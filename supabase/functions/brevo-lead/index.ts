import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { nome, email, whatsapp, razaoSocial } = await req.json();
    
    console.log('Received form data:', { nome, email, whatsapp, razaoSocial });

    // Get Brevo API token from environment
    const brevoApiToken = Deno.env.get('BREVO_API_TOKEN');
    
    console.log('BREVO_API_TOKEN exists:', !!brevoApiToken);
    console.log('BREVO_API_TOKEN length:', brevoApiToken ? brevoApiToken.length : 0);
    console.log('BREVO_API_TOKEN first 10 chars:', brevoApiToken ? brevoApiToken.substring(0, 10) + '...' : 'none');
    
    if (!brevoApiToken) {
      console.error('BREVO_API_TOKEN not found');
      throw new Error('API token not configured');
    }

    // Prepare contact data for Brevo API
    const contactData = {
      email: email,
      attributes: {
        FIRSTNAME: nome,
        WHATSAPP: whatsapp,
        RAZAO_SOCIAL: razaoSocial
      },
      listIds: [3], // Adding to list ID 3 (campanha_setembro)
      updateEnabled: true // Update if contact already exists
    };

    console.log('Sending to Brevo:', contactData);

    // Send to Brevo API
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': brevoApiToken,
      },
      body: JSON.stringify(contactData),
    });

    const brevoData = await brevoResponse.json();
    console.log('Brevo response:', brevoData);

    if (!brevoResponse.ok) {
      console.error('Brevo API error:', brevoData);
      throw new Error(`Brevo API error: ${brevoData.message || 'Unknown error'}`);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Lead criado com sucesso!',
        brevoResponse: brevoData 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );

  } catch (error) {
    console.error('Error in brevo-lead function:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Erro interno do servidor'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
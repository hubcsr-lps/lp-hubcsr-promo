const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { nome, email, RAZAO_SOCIAL } = await req.json();

    console.log('Received form data:', { nome, email, RAZAO_SOCIAL });

    // Get Brevo API token from environment
    const brevoApiToken = Deno.env.get('BREVO_API_TOKEN');

    if (!brevoApiToken) {
      console.error('BREVO_API_TOKEN not found');
      throw new Error('API token não configurado');
    }

    if (!brevoApiToken.startsWith('xkeysib-')) {
      console.error('Invalid API key format - should start with xkeysib-');
      throw new Error('Formato da chave API inválido');
    }

    // Prepare contact data for Brevo API
    const contactData = {
      email: email,
      attributes: {
        FIRSTNAME: nome,
        RAZAO_SOCIAL: RAZAO_SOCIAL
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
    console.log('Brevo response status:', brevoResponse.status);
    console.log('Brevo response:', brevoData);

    if (!brevoResponse.ok) {
      console.error('Brevo API error:', brevoData);

      // Handle specific error cases
      if (brevoResponse.status === 401) {
        throw new Error('Chave da API inválida ou expirada');
      } else if (brevoResponse.status === 400) {
        throw new Error(`Dados inválidos: ${brevoData.message || 'erro desconhecido'}`);
      } else {
        throw new Error(`Erro da API Brevo: ${brevoData.message || 'erro desconhecido'}`);
      }
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

    const errorMessage = error instanceof Error ? error.message : 'Erro interno do servidor';

    return new Response(
      JSON.stringify({
        success: false,
        error: errorMessage
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
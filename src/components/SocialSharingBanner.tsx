import { Share2, Facebook, Twitter, Linkedin, Link2 } from "lucide-react";
import { useState } from "react";

interface SocialSharingBannerProps {
  title: string;
  description: string;
  imageUrl: string;
  url?: string;
}

const SocialSharingBanner = ({ title, description, imageUrl, url }: SocialSharingBannerProps) => {
  const [copied, setCopied] = useState(false);
  const currentUrl = url || window.location.href;
  
  const shareText = `${title} - ${description}`;
  
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <section className="py-12 bg-gradient-to-r from-hubcsr-green/10 to-hubcsr-orange/10 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                  <Share2 className="h-5 w-5 text-hubcsr-green" />
                  <h3 className="text-xl font-bold text-white">Compartilhe esta página</h3>
                </div>
                <p className="text-white/80 mb-6">
                  Ajude outras organizações a conhecer estas soluções para o Terceiro Setor
                </p>
                
                {/* Social Buttons */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <a
                    href={shareLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#1877F2] hover:bg-[#1877F2]/90 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Facebook className="h-4 w-4" />
                    <span className="hidden sm:inline">Facebook</span>
                  </a>
                  
                  <a
                    href={shareLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Twitter className="h-4 w-4" />
                    <span className="hidden sm:inline">Twitter</span>
                  </a>
                  
                  <a
                    href={shareLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="hidden sm:inline">LinkedIn</span>
                  </a>
                  
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 bg-hubcsr-green hover:bg-hubcsr-green/90 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Link2 className="h-4 w-4" />
                    <span className="hidden sm:inline">{copied ? 'Copiado!' : 'Copiar Link'}</span>
                  </button>
                </div>
              </div>
              
              {/* Preview Image */}
              <div className="w-full lg:w-64 xl:w-80">
                <div className="relative rounded-xl overflow-hidden border border-white/20">
                  <img
                    src={imageUrl}
                    alt="Preview da página"
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-white font-semibold text-sm mb-1 line-clamp-2">
                      {title}
                    </h4>
                    <p className="text-white/80 text-xs line-clamp-2">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSharingBanner;
import { useEffect } from 'react';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const useMetaTags = ({ title, description, image, url }: MetaTagsProps) => {
  useEffect(() => {
    const currentUrl = url || window.location.href;
    
    // Update document title
    if (title) {
      document.title = title;
    }
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && title) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && description) {
      ogDescription.setAttribute('content', description);
    }
    
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage && image) {
      ogImage.setAttribute('content', image);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', currentUrl);
    } else if (currentUrl) {
      // Create og:url if it doesn't exist
      const newOgUrl = document.createElement('meta');
      newOgUrl.setAttribute('property', 'og:url');
      newOgUrl.setAttribute('content', currentUrl);
      document.head.appendChild(newOgUrl);
    }
    
    // Update Twitter Card meta tags
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage && image) {
      twitterImage.setAttribute('content', image);
    }
    
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle && title) {
      twitterTitle.setAttribute('content', title);
    } else if (title) {
      // Create twitter:title if it doesn't exist
      const newTwitterTitle = document.createElement('meta');
      newTwitterTitle.setAttribute('name', 'twitter:title');
      newTwitterTitle.setAttribute('content', title);
      document.head.appendChild(newTwitterTitle);
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription && description) {
      twitterDescription.setAttribute('content', description);
    } else if (description) {
      // Create twitter:description if it doesn't exist
      const newTwitterDescription = document.createElement('meta');
      newTwitterDescription.setAttribute('name', 'twitter:description');
      newTwitterDescription.setAttribute('content', description);
      document.head.appendChild(newTwitterDescription);
    }
  }, [title, description, image, url]);
};
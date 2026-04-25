import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({
  title = "Takiyulai DRAMANE | Développeur Web Full Stack",
  description = "Portfolio de Takiyulai DRAMANE, développeur web full stack. Création de solutions web modernes qui transforment les visiteurs en clients.",
  url = "https://takiyulai.vercel.app",
  image = "https://takiyulai.vercel.app/assets/takiyulai.png",
  keywords = "Takiyulai DRAMANE, développeur web full stack, freelance web, création site web, développement web sur mesure, portfolio développeur, React, PHP, Tailwind CSS, Bootstrap, développeur web Bénin"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Takiyulai DRAMANE",
    url: url,
    image: image,
    jobTitle: "Développeur Web Full Stack",
    description: description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Parakou",
      addressCountry: "BJ"
    },
    knowsAbout: [
      "Développement Web",
      "React",
      "PHP",
      "Tailwind CSS",
      "Bootstrap",
      "UI/UX"
    ],
    sameAs: [
      "https://facebook.com/takiyulai.dramane.1",
      "https://linkedin.com/in/takiyulai-dramane-313462a",
      "https://github.com/Takiyulai"
    ]
  };

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Takiyulai DRAMANE" />
      <meta name="language" content="fr" />
      <meta name="geo.region" content="BJ" />
      <meta name="geo.placename" content="Parakou" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Favicon */}
      <link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />
    </Helmet>
  );
};

export default SEO;
import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({
  title = "Takiyulai DRAMANE | Développeur Web Full Stack",
  description = "Portfolio de Takiyulai DRAMANE, développeur web full stack. Création de sites modernes, rapides et sur mesure pour clients dans le monde entier et au Bénin.",
  url = "https://tonsite.vercel.app",
  image = "https://tonsite.vercel.app/assets/takiyulai.png",
  keywords = "Takiyulai DRAMANE, développeur web, full stack, portfolio, freelance, création site web, développement web, React, PHP, Tailwind CSS, Bootstrap, Bénin, international"
}) => {
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Takiyulai DRAMANE" />
      <meta name="language" content="FR" />
      <meta name="geo.region" content="BJ" />
      <meta name="geo.placename" content="Parakou" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />
    </Helmet>
  );
};

export default SEO;

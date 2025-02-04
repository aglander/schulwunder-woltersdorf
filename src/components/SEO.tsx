import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
}

const SEO = ({ title, description }: SEOProps) => {
  const baseTitle = "Schulwunder Woltersdorf";
  const fullTitle = `${title} - ${baseTitle}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

export default SEO;
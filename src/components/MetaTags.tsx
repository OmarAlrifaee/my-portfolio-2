import { Helmet } from "react-helmet";

// You can have more props. In my case, these are enough.
function MetaTags({ title = "", description = "", image = "", name = "" }) {
  return (
    <Helmet>
      <link rel="canonical" href={window.location.href} />
      <meta name="description" content={description} />
      {/* Open Graph tags (OG) */}
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* OG image tags */}
      <meta property="og:image" content={`${window.location.href}${image}`} />
      <meta
        property="og:image:href"
        content={`${window.location.href}${image}`}
      />
      <meta
        property="og:image:secure_url"
        content={`${window.location.href}${image}`}
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="200" />
      <meta property="og:image:alt" content={`Image of ${title} site`} />
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}

export default MetaTags;

import React from "react";
import Helmet from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="stylesheet"
          type="text/css"
          href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css"
        />
        <script src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js" />
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet" />
        <script>
          {typeof window !== `undefined` &&
            window.addEventListener("load", function() {
              typeof window !== `undefined` &&
                window.cookieconsent.initialise({
                  palette: {
                    popup: {
                      background: "#49318B",
                    },
                    button: {
                      background: "#f48120",
                      text: "white",
                    },
                  },
                  theme: "classic",
                  position: "bottom-right",
                  content: {
                    message:
                      "Strona wykorzystuje pliki cookies w celu prawidłowego jego działania, korzystania z wtyczek społecznościowych (Facebook, Twitter, Instagram).",
                    dismiss: "Rozumiem",
                    link: "",
                    href: "",
                  },
                });
            })}
        </script>
        <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />

        <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/at.jpg" />
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:image" content="/img/at.jpg" />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;

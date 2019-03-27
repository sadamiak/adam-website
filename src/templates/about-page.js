import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { FacebookProvider, Page } from "react-facebook";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <div>
      </div>
      <h1 className="adam">Adam traczyk jest najpiękniejszy!</h1>
      <img src={"https://fundacjagloballab.files.wordpress.com/2016/10/panorama.png?w=620&h=342"} alt="Logo" />
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="a_traczyk"
        options={{ height: 400, width: 400 }}
        noScrollbar
        lang="pl"
      />
      <FacebookProvider appId="519495091756536" language={"pl_PL"}>
      <Page href="https://www.facebook.com/AdamTraczykWiosna/" tabs="timeline" width="400" height="400" small-header="false" adapt-container-width="true" hide-cover="false" show-facepile="true" />
    </FacebookProvider>
    </div>
  );

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">{title}</h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate contentComponent={HTMLContent} title={post.frontmatter.title} content={post.html} />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

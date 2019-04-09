import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import wiosnaCheck from "../img/wiosnaCheck.svg";
import styles from "./styles.module.css";

export const IndexPageTemplate = ({ image, title, heading, subheading, mainpitch, description, intro, main }) => (
  <div>
    <div className={styles.mainContainer}>
      <article className={styles.articleContainer}>
        <section className={styles.halfSection}>
          <h2>Kim jestem?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor quis urna ultrices molestie. Duis
            eu dapibus purus. Suspendisse potenti. Donec gravida felis sed lacus finibus, eu sollicitudin nunc pretium.
            Quisque a neque et leo feugiat scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Sed quis venenatis nisl.
          </p>
          <p>
            Aliquam egestas quam eget placerat sollicitudin. Maecenas pharetra fermentum cursus. Fusce sed rhoncus ex.
            Sed convallis massa nibh, sollicitudin accumsan tortor condimentum porttitor. In quis condimentum dolor.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus pharetra
            neque vel fringilla dignissim.
          </p>
          <Link to="/about/" className={`${styles.button}`}>
            Pełna biografia
          </Link>
        </section>
        <section className={`${styles.halfSection} ${styles.imageSection} ${styles.candidatePhoto}`} />
      </article>
      <div className={styles.spacerSection}>
        <div>
          <blockquote cite="https://www.huxley.net/bnw/four.html">
            <p>Jakiś bardzo mądry cytat</p>
          </blockquote>

          <cite>– Mądra osoba, mądre dzieło</cite>
          <img className={styles.wiosnaTick} src={wiosnaCheck} alt="Wiosna logo" />
        </div>
      </div>
      <article className={styles.articleContainer}>
        <section className={`${styles.halfSection} ${styles.imageSection} ${styles.wiosnaPhoto}`} />
        <section className={styles.halfSection}>
          <h2>
            <span style={{ color: "#f48120" }}>Dlaczego</span>
            <span style={{ color: "#40b36e" }}> Wiosna?</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor quis urna ultrices molestie. Duis
            eu dapibus purus. Suspendisse potenti. Donec gravida felis sed lacus finibus, eu sollicitudin nunc pretium.
            Quisque a neque et leo feugiat scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Sed quis venenatis nisl.
          </p>
          <p>
            Aliquam egestas quam eget placerat sollicitudin. Maecenas pharetra fermentum cursus. Fusce sed rhoncus ex.
            Sed convallis massa nibh, sollicitudin accumsan tortor condimentum porttitor. In quis condimentum dolor.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus pharetra
            neque vel fringilla dignissim.
          </p>
        </section>
      </article>
      <div className={styles.spacerSection}>
        <div>
          <blockquote cite="https://www.huxley.net/bnw/four.html">
            <p>Jakaś pochlebna opinia o kandydacie, najlepiej Biedronia</p>
          </blockquote>

          <cite>– Osoba która te pochlebna opinie wyraziła</cite>
          <img className={styles.wiosnaTick} src={wiosnaCheck} alt="Wiosna logo" />
        </div>
      </div>
      <article className={styles.articleContainer}>
        <section className={styles.halfSection}>
          <h2>Moje priorytety</h2>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor quis urna ultrices molestie.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor quis urna ultrices molestie.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor quis urna ultrices molestie.
            </li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor quis urna ultrices molestie.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor quis urna ultrices molestie.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor quis urna ultrices molestie.
            </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </section>
        <section className={`${styles.halfSection} ${styles.imageSection} ${styles.prioritiesPhoto}`} />
      </article>
    </div>
    <div className={styles.spacerSection}>
      <div>
        <blockquote cite="https://www.huxley.net/bnw/four.html">
          <p>Jakaś pochlebna opinia o kandydacie, najlepiej Biedronia</p>
        </blockquote>

        <cite>– Osoba która te pochlebna opinie wyraziła</cite>
        <img className={styles.wiosnaTick} src={wiosnaCheck} alt="Wiosna logo" />
      </div>
    </div>
    <article className={styles.articleContainer}>
      <section className={`${styles.halfSection} ${styles.imageSection} ${styles.candidatePhoto}`} />
      <section className={styles.halfSection}>
        <h2>Aktualności</h2>
        <BlogRoll />
        <Link to="/blog/" className={`${styles.button}`}>
          Wszystkie aktualności
        </Link>
      </section>
    </article>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;

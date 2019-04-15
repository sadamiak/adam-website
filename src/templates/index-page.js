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
          <h2>
            <span className={styles.hHighlight}>Kim</span> jestem?
          </h2>
          <p>
            Jestem Warszawiakiem od pokoleń i Europejczykiem z przekonania. <b>Kandyduję do Parlamentu Europejskiego</b>
            , bo chcę w Brukseli i Strasburgu walczyć o solidarną, praworządną, ekologiczną i tolerancyjną Europę, która
            nie zostawia nikogo z tyłu.
          </p>
          <p>
            Od lat angażuję się na rzecz dialogu międzynarodowego i rozwoju społeczeństwa obywatelskiego w Polsce. Chcę
            wykorzystać moje wykształcenie i doświadczenie analityka polityki międzynarodowej oraz działacza społecznego
            na rzecz Warszawy, Polski i Europy łączyć perspektywę miejską, krajową i europejską.
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
            <p>
              &bdquo;Ludzka godność – to wolności polityczne, prawo do swobodnego wyrażania swoich poglądów, prawo do
              krytyki i wpływania na opinię publiczną. Ludzka godność – to prawo do zdrowia i pracy, do edukacji i
              bezpieczeństwa. Ludzka godność – to prawo i rzeczywista możliwość do kształtowania przyszłości we
              współpracy z innymi.&ldquo;
            </p>
          </blockquote>

          <cite>– Olof Palme, były premier Szwecji</cite>
          <img className={styles.wiosnaTick} src={wiosnaCheck} alt="Wiosna logo" />
        </div>
      </div>
      <article className={styles.articleContainer}>
        <section className={`${styles.halfSection} ${styles.imageSection} ${styles.photoWithXx}`} />
        <section className={styles.halfSection}>
          <h2>Aktualności</h2>
          <BlogRoll count={3} />
          <Link to="/blog/" className={`${styles.button}`}>
            Wszystkie aktualności
          </Link>
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
          <h2>
            Dlaczego <span className={styles.hHighlight}>Wiosna</span>?
          </h2>
          <p>
            Ponieważ chcę, żeby Polska nadawała ton Europie, a nie odwracała się od niej plecami albo tylko dryfowała z
            nurtem. Musimy mieć większe ambicje. Chcę zmiany, bo zmiana niesie nadzieje na poprawę i zachęca do
            formułowania odważnych i ambitnych wizji przyszłości.
          </p>
          <p>
            Ponieważ mam dość polityki napędzanej strachem. Na frustracje chcę odpowiedzieć nadzieją. Populiści żerują
            na lękach. Ja chcę budować politykę na wizji lepszego jutra. Lepszego jutra, które chcę budować dla
            wszystkich Polek i Polaków i we współpracy z nimi. Lepszego jutra, którego chcę dla wszystkich Europejek i
            Europejczyków, a nie tylko dla wybranych. To jest dla mnie istota demokratycznej polityki.
          </p>
          <p>
            Ponieważ nie chcę powrotu do tego, co było. Chcę Europy jutra, a nie powrotu do przeszłości.{" "}
            <b>Chcę Polski i Europy, które idą z odwagą do przodu stawiając czoło najważniejszym wyzwaniom</b> –
            nierównościom społecznym, zmianom klimatu, powrotowi rywalizacji wielkich mocarstw i kryzysowi liberalnego
            porządku międzynarodowego.
          </p>
        </section>
        <section className={`${styles.halfSection} ${styles.imageSection} ${styles.wiosnaPhoto}`} />
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
        <section className={`${styles.halfSection} ${styles.imageSection} ${styles.prioritiesPhoto}`} />

        <section className={styles.halfSection}>
          <h2>
            <span className={styles.hHighlight}>Moje</span> priorytety
          </h2>
          <ul>
            <li>Warszawa, Polska i Europa bez smogu</li>
            <li>Europejska Karta Kultury i Sportu</li>
            <li>Prawo do mieszkania dla każdego</li>
            <li>Zielona i zrównoważona transformacja</li>
            <li>Koniec ery plastiku</li>
            <li>Innowacje w służbie Europejek i Europejczyków</li>
            <li>Sprawiedliwa Unia Europejska – „nie” dla rajów podatkowych</li>
          </ul>
          <Link to="/program/" className={`${styles.button}`}>
            Szczegóły programu
          </Link>
        </section>
      </article>
    </div>
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

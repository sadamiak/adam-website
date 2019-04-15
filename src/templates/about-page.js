import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
import styles from "./styles.module.css";
import brat from "../img/brat.jpg";
import tok from "../img/tok.jpg";
import atBs from "../img/atBs.jpg";
import atXx from "../img/atXx.jpg";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  return (
    <div className={styles.mainContainer}>
      <article
        className={styles.articleContainer}
        style={{
          flexDirection: `column`,
        }}
      >
        <div className={styles.bioContainer}>
          <figure className={`${styles.fullBioPhoto} ${styles.fullBioPhotoL}`}>
            <img src={brat} alt="Adam Traczyk z bratem na wakacjach we Władysławowie" />
            <figcaption>Z bratem na wakacjach we Władysławowie</figcaption>
          </figure>
          <h4>O mnie</h4>
          <p>
            Jestem Warszawiakiem od pokoleń i Europejczykiem z przekonania. Kandyduję do Parlamentu Europejskiego, bo
            chcę w Brukseli i Strasburgu walczyć o solidarną, ekologiczną, różnorodną i tolerancyjną Europę, która nie
            zostawia nikogo z tyłu.
          </p>
          <p>
            Urodziłem się w 1987 roku na warszawskiej Ochocie. Mój tata, Paweł, jest ekonomistą. W czasie studiów w
            Szkole Głównej Planowania i Statystyki (dziś Szkoła Główna Handlowa) był członkiem Niezależnego Zrzeszenia
            Studentów. Moja mama, Małgorzata, jest dentystką. Mój młodszy brat, Łukasz, jest historykiem sztuki. Dzięki
            nim wychowałem się w atmosferze miłości, otwartości i szacunku dla drugiego człowieka.
          </p>
          <p> Jestem szczęśliwym partnerem Agnieszki, prawniczki.</p>
          <p>
            Swoim zaangażowaniem społecznym staram się kontynuować rodzinne tradycje. Mój pradziadek Szczepan był
            członkiem ruchu socjalistycznego i uczestnikiem Powstania Warszawskiego, po którym trafił do obozów
            koncentracyjnych w Auschwitz i Mauthausen. Babcia Janka była aktywną działaczką pierwszej Solidarności.
          </p>
          <h4>Wykształcenie</h4>
          <p>
            Rodzice i dziadkowie zaszczepili we mnie pasję do podróżowania i chęć poznawania świata. Dlatego po maturze
            wybrałem studia w Instytucie Stosunków Międzynarodowych Uniwersytetu Warszawskiego, W ramach stypendiów
            zagranicznych studiowałem nauki polityczne w Bonn oraz studia latynoamerykańskie i północnoamerykańskie w
            Berlinie.
          </p>
          <figure className={`${styles.fullBioPhoto} ${styles.fullBioPhotoR}`}>
            <img src={tok} alt="Adam Traczyk w radiu TOK FM" />
            <figcaption>W radiu TOK FM</figcaption>
          </figure>
          <p>
            W trakcie studiów jako członek Zarządu Samorządu Studentów UW i poseł do Parlamentu Studentów UW pracowałem
            na rzecz promocji mobilności studenckiej. Dzięki działalności w samorządzie studenckim poznałem mnóstwo
            fantastycznych i zaangażowanych osób oraz nauczyłem się pracy zespołowej ponad podziałami na rzecz wspólnego
            dobra.
          </p>
          <h4>Doświadczenie</h4>
          <p>
            Po studiach chciałem łączyć pracę zawodową z działalnością społeczną, dlatego podjąłem pracę w fundacji
            zajmującej się wspieraniem wartości socjaldemokratycznych oraz dialogu polsko-niemieckiego. Jako stypendysta
            Międzynarodowego Stypendium Parlamentarnego Bundestagu, programu dedykowanego wyróżniającym się młodym
            ludziom z przeszło 40 krajów świata, którzy aktywnie uczestniczą w kształtowaniu demokratycznej przyszłości
            swoich ojczyzn, miałem okazję od środka poznać pracę parlamentu największego państwa Unii Europejskiej.
          </p>
          <figure className={`${styles.fullBioPhoto} ${styles.fullBioPhotoL}`}>
            <img src={atBs} alt="Adam Traczyk z senatorem Bernie Sandersem w Waszyngtonie" />
            <figcaption>Z senatorem Bernie Sandersem w Waszyngtonie</figcaption>
          </figure>
          <p>
            Jestem współzałożycielem i prezesem Fundacji Global.Lab, ośrodka analitycznego zajmującego się sprawami
            międzynarodowymi. Obserwując polską debatę publiczną na temat polityki zagranicznej miałem wrażenie, że
            wciąż brakuje głosu, który łączyłby przywiązanie do progresywnych wartości z realistycznym podejściem do
            wyzwań zmieniającego się radykalnie świata. Jestem przekonany, że organizując wraz z zespołem kilkadziesiąt
            wydarzeń i publikując dziesiątki analiz walnie przyczyniliśmy się do wypełnienia tej luki.
          </p>
          <p>
            Zadanie to podejmowałem także jako publicysta i komentator wydarzeń międzynarodowych i polskiej polityki
            zagranicznej. Starałem się przy tym zawsze wychodzić poza „bańkę” i nawiązywać w dialog z inaczej myślącymi.
            Moje artykuły lub wywiady ze mną ukazywały się w prasie polskiej i zagranicznej m.in. na łamach Krytyki
            Politycznej, Dziennika Gazety Prawnej, Rzeczpospolitej, Super Expressu, Gazeta.pl, OKO.press, Klubu
            Jagiellońskiego, Newsweek.pl, Politico Europe, Die Welt, Der Tagesspiegel czy Aspen Review Central Europe.
            Regularnie można mnie usłyszeć na falach Radia TOK FM.
          </p>
          <figure className={`${styles.fullBioPhoto} ${styles.fullBioPhotoR}`}>
            <img src={atXx} alt="Adam Traczyk z ministrem ds. europejskich Niemiec Michaelem Rothem" />
            <figcaption>Z ministrem ds. europejskich Niemiec Michaelem Rothem</figcaption>
          </figure>
          <p>
            Współtworzę Akademię Demokracji Socjalnej, unikatowy program szkoleniowo-liderski dla progresywnych
            aktywistek i aktywistów z partii politycznych, ruchów miejskich, organizacji pozarządowych i związków
            zawodowych. W tym roku odbyła się już trzecia edycja ADS i jesteśmy w trakcie planowania kolejnej.
          </p>
          <p>
            Jako wolontariusz pracowałem dla Helsińskiej Fundacji Praw Człowieka w projekcie dotyczącym wolności
            zgromadzeń oraz byłem członkiem Amnesty International. Wspieram także warszawski ruch miejski Miasto Jest
            Nasze.
          </p>
        </div>
      </article>
    </div>
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

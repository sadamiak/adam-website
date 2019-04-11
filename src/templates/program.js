import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
import styles from "./styles.module.css";

export class ProgramPageTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
      visible6: false,
      visible7: false,
    };
  }

  toggle = par => {
    this.setState(prevState => ({
      [par]: !prevState[par],
    }));
  };

  render() {
    return (
      <div className={styles.mainContainer}>
        <article
          className={styles.articleContainer}
          style={{
            flexDirection: `column`,
          }}
        >
          <div className={styles.plansContainer}>
            <h2>Program europejski</h2>

            <h4 onClick={() => this.toggle("visible1")}>
              1. Warszawa, Polska i Europa bez smogu
              <span className={this.state.visible1 ? styles.rotateScroller270 : styles.rotateScroller90}>&rsaquo;</span>
            </h4>
            <div className={`${styles.longTextContainer} ${this.state.visible1 ? styles.longtTextShow : ""}`}>
              <p>
                Co roku 45 tysięcy Polek i Polaków umiera z powodu smogu. 33 z 50 miast z najbardziej zanieczyszczonym
                powietrzem w UE znajduje się w Polsce. Dosyć tego! Zasługujemy, aby oddychać czystym powietrzem i żyć w
                zdrowiu.
              </p>
              <p>
                W Brukseli i Strasburgu będę zabiegał o środki na wymianę starych pieców węglowych na wymiany pieców na
                instalacje fotowoltaiczne i pompy ciepła, wsparcie ruchu prosumenckiego, podłączanie gospodarstw
                domowych do ciepła systemowego oraz wsparcie termomodernizacji budynków. Dziś rząd Prawa i
                Sprawiedliwości ryzykuje utratę przyznanych już środków europejskich chcąc wymieniać kopciuchy na… inne
                piece węglowe. Pora skończyć z tym absurdem.
              </p>
              <p>
                Dotychczasowe rządy zdawały się uważać, że płuca Polek i Polaków są bardziej odporne na zanieczyszczenia
                niż innych Europejczyków. Norma alarmowa dla mikropyłów PM10 wynosi w naszym kraju 300 µg/m3, podczas
                gdy we Francji 80 µg/m3, a Czechach 100 µg/m3. Dlatego pora na jednolite normy alarmów smogowych w całej
                Unii Europejskiej i ich skuteczne egzekwowanie.
              </p>
              <p>
                W Parlamencie Europejskim będę wspierał inicjatywy wzmacniające transport publiczny, rozwój
                elektromobilności i infrastrukturę rowerową. To szczególnie ważne dla Warszawy, gdzie powstawania smogu
                przyczynia się duży ruch samochodowy: w naszym mieście na jednego mieszkańca przypada niemal 700
                samochodów na 1000 mieszkańców – to prawie trzy razy więcej niż Kopenhadze czy Amsterdamie i ponad dwa
                razy więcej niż w Berlinie!
              </p>
            </div>
            <h4 onClick={() => this.toggle("visible2")}>
              2. Europejska Karta Kultury i Sportu{" "}
              <span className={this.state.visible2 ? styles.rotateScroller270 : styles.rotateScroller90}>&rsaquo;</span>
            </h4>
            <div className={`${styles.longTextContainer} ${this.state.visible2 ? styles.longtTextShow : ""}`}>
              <p>
                Unia Europejska musi być bliżej ludzi i ich codziennych potrzeb. Europejczycy i Europejki zasługują, aby
                po ciężkiej pracy mieć prawo do rekreacji, aktywnego wypoczynku i pogłębiania swoich pasji niezależnie
                od miejsca zamieszkania i zasobności portfela. Dlatego w Brukseli i Strasburgu będę walczył o
                wprowadzenie Europejskiej Karty Kultury i Sportu.
              </p>
              <p>
                Dzięki niej każdy z nas będzie miał zagwarantowaną określoną kwotę w roku do wykorzystania na usługi
                związane ze sportem i kulturą. W ten sposób ułatwiony zostanie dostęp do kin, teatrów, muzeów,
                koncertów, siłowni, basenów i innych aktywności sportowych. Byłoby to pierwsze powszechne europejskie
                świadczenie socjalne i pierwszy krok ku nowemu myśleniu o misji Unii Europejskiej i poczuciu
                europejskiej solidarności.
              </p>
            </div>
            <h4 onClick={() => this.toggle("visible3")}>
              3. Prawo do mieszkania dla każdego{" "}
              <span className={this.state.visible3 ? styles.rotateScroller270 : styles.rotateScroller90}>&rsaquo;</span>
            </h4>
            <div className={`${styles.longTextContainer} ${this.state.visible3 ? styles.longtTextShow : ""}`}>
              <p>
                W całej Europie 75 milionów osób mieszka w przeludnionych lokalach. W Polsce to ponad 40% społeczeństwa.
                W Warszawie ceny kawalerek sięgają już 300 tysięcy złotych. Natomiast ceny najmu przekraczają nie tylko
                możliwości finansowe studentów, ale i młodych pracujących. Standardem jest, że 30-kilkuletnie osoby
                nadal często wynajmują studenckie pokoje albo mieszkają z rodzicami.
              </p>
              <p>
                W państwach europejskich w związku z kryzysem finansowym drastycznie obniżono wydatki na infrastrukturę
                społeczną, w tym w szczególności na budownictwo. Dlatego w Parlamencie Europejskim będę walczył o
                stworzenie specjalnego programu, który sfinansuje budowę 10 milionów tanich mieszkań komunalnych i na
                wynajem w całej Europie, w tym przynajmniej miliona w Polsce. Dzięki UE zbudowaliśmy setki kilometrów
                dróg i autostrad, pora żebyśmy tymi drogami mogli dojechać do nowych domów. Docelowo kwestie
                mieszkalnictwa powinny mieć stałe miejsce w unijnym budżecie przeznaczonym na infrastrukturę.
              </p>
              <p>
                Zbyt wiele osób, niestety także w Warszawie, mieszka w uwłaczających godności warunkach, bez centralnego
                ogrzewania czy łazienki we własnym mieszkaniu. Samorządy powinny mieć dostęp do specjalnego
                europejskiego funduszu interwencyjnego, dzięki któremu sfinansowano by najpilniejsze inwestycje.
              </p>
              <p>
                W szczególności będę zabiegał o wsparcie projektów jak Warszawska Dzielnica Społeczna, które będą łączyć
                dostęp do tanich mieszkań i wzmacnianie więzi społecznych. Oprócz mieszkań na każdą kieszeń i dla
                różnych grup wiekowych priorytetowe znaczenie powinno mieć także postawienie na ruch pieszy, rowerowy i
                transport publiczny oraz dostęp do usług na miejscu. Wspierane projekty powinny też stawiać na
                rozwiązania przyjazne środowisku jak zielone dachy filtrujące zanieczyszczenia z powietrza i
                przeciwdziałające występowaniu tzw. „miejskich wysp ciepła”.
              </p>
            </div>
            <h4 onClick={() => this.toggle("visible4")}>
              4. Zielona i zrównoważona transformacja{" "}
              <span className={this.state.visible4 ? styles.rotateScroller270 : styles.rotateScroller90}>&rsaquo;</span>
            </h4>
            <div className={`${styles.longTextContainer} ${this.state.visible4 ? styles.longtTextShow : ""}`}>
              <p>
                Ochrony środowiska i zmiany klimatu nie są tematami „elit”, jak próbuje wmówić nam prawica. To kwestia
                jakości życia, zdrowia i dobrostanu każdego z nas, a także naszych dzieci. Bo Ziemi nie dziedziczymy po
                naszych przodkach, ale wypożyczamy od naszych potomków i powinniśmy móc im ją oddać bez wstydu.
              </p>
              <p>
                Jako europoseł będę zabiegał, aby naszym wspólnym, europejskim celem było całkowite przejście na
                odnawialne źródła energii do 2050 roku. Oznacza nie bardziej zrównoważoną, zdrową, zieloną i ekologiczną
                Polskę i Europę. To także nowe, wysokiej jakości miejsca pracy. Jednocześnie transformacji muszą
                towarzyszyć programy zapewniające bezpieczeństwo socjalne dla pracowników, których miejsca pracy ulegać
                będą likwidacji bądź przekształceniu. Zielona rewolucja nie może zostać przeprowadzona na barku
                pracowników. Odnawialne źródła energii to także niezależność i bezpieczeństwo energetyczne, zamiast
                rosnącego importu węgla i gazu z Rosji. To jest postęp na miarę XXI wieku!
              </p>
            </div>
            <h4 onClick={() => this.toggle("visible5")}>
              5. Koniec ery plastiku{" "}
              <span className={this.state.visible5 ? styles.rotateScroller270 : styles.rotateScroller90}>&rsaquo;</span>
            </h4>
            <div className={`${styles.longTextContainer} ${this.state.visible5 ? styles.longtTextShow : ""}`}>
              <p>
                Przeciętnie korzystamy z plastikowej torby przez 25 minut w drodze ze sklepu do domu. Co roku na świecie
                do obiegu wprowadzanych jest nawet do biliona foliówek, w tym w Europie ok. 100 miliardów. Zaledwie 1% z
                nich zostanie recyklingowana, reszta trafia na wysypiska śmieci i do środowiska naturalnego. Tylko na
                polskie wysypiska trafia co roku 55 tysięcy ton foliówek, których rozkład trwa nawet kilkaset lat.
              </p>
              <p>
                Plastikowe odpady trafiające do środowiska nie tylko zanieczyszczają lasy, plaże czy przestrzeń miejską,
                ale stanowią również duże zagrożenie dla wielu gatunków zwierząt, szczególnie morskich. Co roku 8
                milionów ton plastikowych odpadów trafia do naszych mórz i oceanów powodując śmierć dziesiątek tysięcy
                wielorybów, fok, żółwi i ptaków, które dostają się do ich przewodu pokarmowego. Wielka Pacyficzna Plama
                Śmieci, składająca się w przeważającej mierze z mikrocząstek plastiku, zajmuje obecnie 1,6 miliona
                kilometrów kwadratowych, czyli powierzchnię pięć razy większa niż obszar Polski i co roku szybko się
                powiększa.
              </p>
              <p>
                Dotychczasowe regulacje dotyczące ograniczenia wykorzystania foliowych toreb i plastikowych przedmiotów
                jednorazowego użytku jak plastikowe sztućce, talerze czy słomki do napojów przyjęte przez Unię
                Europejską to krok w dobrym kierunku, ale to ciągle za mało.
              </p>
              <p>
                Jako poseł Parlamentu Europejskiego będę podejmował działania na rzecz zmniejszenia produkcji
                plastikowych opakowań oraz wspierania alternatywnych, bardziej ekologicznych sposobów pakowania
                produktów. Nie może być tak, że warzywa zapakowane w plastikową folię są tańsze niż sprzedawane luzem.
              </p>
              <p>
                Będę wspierał starania ustanowienie europejskiego systemu recyklingu plastikowych butelek na poziomie co
                najmniej 90% – wzorem Niemiec oraz Holandii. Unia Europejska powinna również aktywnie wspierać badania
                nad innowacyjnymi technologiami, które pozwolą zastąpić plastik materiałami bardziej przyjaznymi dla
                środowiska.
              </p>
              <p>
                Moja Europa, to Europa zielona, biorąca odpowiedzialność za środowisko naturalne i dobro przyszłych
                pokoleń.
              </p>
            </div>
            <h4 onClick={() => this.toggle("visible6")}>
              6. Innowacje w służbie Europejek i Europejczyków{" "}
              <span className={this.state.visible6 ? styles.rotateScroller270 : styles.rotateScroller90}>&rsaquo;</span>
            </h4>
            <div className={`${styles.longTextContainer} ${this.state.visible6 ? styles.longtTextShow : ""}`}>
              <p>
                Budżet UE powinien służyć trzem podstawowym celom: redukcji różnic ekonomicznych pomiędzy państwami
                członkowskimi, wyrównywaniu nierówności społecznych w ramach państw oraz zapewnieniu Europie
                konkurencyjności w starciu z największymi światowymi konkurentami. Aby było to możliwe, Unia Europejska
                musi postawić na rozwój innowacyjnej gospodarki.
              </p>
              <p>
                Polska nie może przespać przemian gospodarczych związanych z cyfryzacją i automatyzacją. Tymczasem
                znajdujemy się na szarym końcu listy państw członkowskich wykorzystujących fundusze z unijnego programu
                Horyzont, który wspiera sektor innowacji, badań i rozwoju, a nasi naukowcy i innowatorzy ciągle uciekają
                do zachodnich ośrodków badawczych. Zgodnie z projektem unijnego budżetu w następnych wieloletnich ramach
                finansowych nakłady na program Horyzont wzrosną do 100 miliardów euro – w przeciwieństwie do nakładów na
                politykę spójności, która ulegnie drastycznemu uszczupleniu.
              </p>
              <p>
                Jako Poseł do Parlamentu Europejskiego będę zabiegał o sprawiedliwy rozdział tych środków. Z innowacji
                powinni móc korzystać obywatele w codziennym życiu, a fundusze powinny szerszym strumieniem trafiać do
                słabiej rozwiniętych krajów członkowskich o mniejszym własnym potencjale akademickich ośrodków
                badawczych. Będę zabiegał o umiędzynarodowienie projektów badawczych i kierowanie środków do kluczowych
                sektorów: zielonych technologii czy ochrony zdrowia, w tym leczenia raka. Należy też uprościć zasady
                pozyskiwania i obsługi środków na innowacyjność – by były bardziej dostępne małym i średnim
                przedsiębiorstwom, które często są źródłem świetnych – a niedocenianych – rozwiązań.
              </p>
              <p>
                Innowacje to nie tylko technologia, ale przede wszystkim ludzie. Inwestowanie w innowacje w Europie
                pozwoli nam nie tylko zachować konkurencyjność wobec Chin i Stanów Zjednoczonych, ale tworzyć
                wartościowe miejsca pracy, w poszanowaniu praw pracowniczych. Strona publiczna musi dawać dobry przykład
                w konstruowaniu przetargów na zamówienia publiczne – w ich rozstrzyganiu liczyć się powinno się nie
                tylko kryterium ceny, ale również kryteria płacowe, długofalowe koszty i oddziaływanie na środowisko w
                całym cyklu życia. Nie bez przyczyny w ocenie innowacyjności w programie Horizon 2020 najlepiej radzą
                sobie kraje skandynawskie, które łączą innowacyjność i wysoki poziom bezpieczeństwa socjalnego.
              </p>
              <p>
                Innowacyjnej gospodarki opartej na danych nie uda się osiągnąć bez infrastruktury cyfrowej i wyposażenia
                uczniów i studentów w odpowiednie kompetencje. Dlatego zbudowanie sojuszu między uczelniami wyższymi a
                praktykami innowacji i biznesem jest tak ważne nie tylko w kontekście badawczym, ale również
                dydaktycznym. Unia Europejska powinna stawiać na rozwój sztucznej inteligencji, ale musi też mieć odwagę
                ją regulować. Jako poseł do Parlamentu Europejskiego będę dbał, aby na rewolucji przemysłowej 4.0
                skorzystają wszyscy obywatele.
              </p>
            </div>
            <h4 onClick={() => this.toggle("visible7")}>
              7. Sprawiedliwa Unia Europejska – „nie” dla rajów podatkowych{" "}
              <span className={this.state.visible7 ? styles.rotateScroller270 : styles.rotateScroller90}>&rsaquo;</span>
            </h4>
            <div className={`${styles.longTextContainer} ${this.state.visible7 ? styles.longtTextShow : ""}`}>
              <p>
                825 000 000 000 euro. Tyle rocznie tracą państwa unijne z powodu uchylania się od opodatkowania i
                oszustw podatkowych. To 1600 euro przypadające na każdą Europejkę i każdego Europejczyka, które można by
                przeznaczyć na opiekę zdrowotną, wsparcie osób z niepełnosprawnościami i ich opiekunów czy szkolnictwo i
                innowacyjne badania. Kolejne 160-190 miliardów euro tracimy z powodu unikania opodatkowania. To więcej
                niż roczny budżet Unii Europejskiej!
              </p>
              <p>
                Podczas, gdy zwykli obywatele muszą zaciskać pasa albo godzić się na niski poziom usług publicznych,
                globalne korporacje wykorzystują luki w prawie i niewystarczające regulacje na szczeblu państw
                narodowych do unikania płacenia podatków. Dlatego potrzebujemy europejskich rozwiązań. Tylko dzięki
                międzynarodowej współpracy możemy odzyskać znaczną część należnych obywatelom i obywatelkom Europy
                środków. Walka z uchylaniem i unikaniem się od opodatkowania powinna stać się priorytetem wszystkich
                instytucji unijnych. Sprawna Unia Europejska musi dbać o interesy uczciwych przedsiębiorców i obywateli.
              </p>
              <p>
                Jako poseł do Parlamentu Europejskiego będę walczył o likwidację rajów podatkowych na terenie Unii
                Europejskiej i zabiegał o harmonizację podatkową. Państwa UE powinny wprowadzić jednolitą minimalną
                stawkę CIT na wzór minimalnej stawki VAT. Dziś różnice w stawkach podatkowych i liczne ulgi w państwach
                członkowskich sprawiają, że za pomocą sztuczek księgowych międzynarodowe korporacje sztucznie obniżają
                wartość płaconych podatków. Tracimy na tym wszyscy. Podatki od osiąganych zysków powinny trafiać do
                budżetu państw, w których zostały osiągnięte, a nie do rajów podatkowych. Dlatego Europejki i
                Europejczycy muszą mieć pełne prawo do informacji o zyskach korporacji osiąganych w danym kraju Unii
                Europejskiej i odprowadzanych przez nie podatków. Dotyczy to m.in. wielkich firm cyfrowych.
              </p>
              <p>
                Unia Europejska nie może być też pralnią brudnych pieniędzy. Inwestorzy spoza UE – jak na przykład
                rosyjscy oligarchowie powiązani z Władimirem Putinem – nie mogą kryć się firmami-skrytkami pocztowymi
                ulokowanymi na Kajmanach czy innych rajach podatkowych i ukrywać prawdziwe pochodzenie swoich funduszy.
                Na forum Parlamentu Europejskiego będę wspierał wszelkie działania mające na celu wprowadzenie klauzul
                zwalczających uchylanie się od opodatkowania we wszystkich porozumieniach handlowych zawieranych przez
                Unię Europejską.
              </p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

ProgramPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ProgramPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ProgramPageTemplate contentComponent={HTMLContent} title={post.frontmatter.title} content={post.html} />
    </Layout>
  );
};

ProgramPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProgramPage;

export const programPageQuery = graphql`
  query ProgramPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

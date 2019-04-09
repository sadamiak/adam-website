import React from "react";
import Layout from "../components/Layout";
import styles from "../templates/styles.module.css";

const NotFoundPage = () => (
  <Layout>
    <div className={styles.mainContainer}>
      <article
        className={styles.articleContainer}
        style={{
          flexDirection: `column`,
          textAlign: `center`,
          margin: 40,
        }}
      >
        <h1>404</h1>
        <p>Strona nie znaleziona</p>
      </article>
    </div>
  </Layout>
);

export default NotFoundPage;

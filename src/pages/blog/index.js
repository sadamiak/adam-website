import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import styles from "./styles.module.css";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className={styles.mainContainer}>
          <div
            className={styles.articleContainer}
            style={{
              flexDirection: `column`,
              padding: 40,
            }}
          >
            <BlogRoll />
          </div>
        </div>
      </Layout>
    );
  }
}

import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    let { edges: posts } = data.allMarkdownRemark;
    if (this.props.count) posts = posts.slice(0, this.props.count);
    return (
      <div>
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id}>
              <article>
                <h3 className="blogpostHeader">
                  {post.frontmatter.title}
                  <span> &bull; </span>
                  <span className="postDate">{post.frontmatter.date}</span>
                </h3>
                <p className="postExcerpt">
                  {post.excerpt}
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    Przeczytaj całość
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default class BlogRollHoc extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query BlogRollQuery {
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
              filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
            ) {
              edges {
                node {
                  excerpt(pruneLength: 200)
                  id
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    templateKey
                    date(formatString: "DD/MM/YYYY")
                  }
                }
              }
            }
          }
        `}
        render={(data, count) => <BlogRoll data={data} count={this.props.count} />}
      />
    );
  }
}

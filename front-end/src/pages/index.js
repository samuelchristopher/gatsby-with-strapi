import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import GatsbyImage from "gatsby-image";

const IndexPage = ({ data }) => {
  let { edges } = data.allStrapiArticle
  let articlesListItems = edges.map((edge, key) => {
    let { node: article } = edge
    return (
      <div key={key}>
        <li><Link to={`/${article.id}`}>{article.Title}</Link></li>
        <p>{ article.Content }</p>
        <Image fixed={article.Image.childImageSharp.fixed} />
      </div>
    )
  })
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <ul>
        { articlesListItems }
      </ul>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageQuery {
    allStrapiArticle {
      edges {
        node {
          id
          Title
          Image {
            childImageSharp {
              fixed(width: 225, height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          Content
        }
      }
    }
  }
`

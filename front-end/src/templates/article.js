import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"

const ArticleTemplate = ({ data }) => {
    let { strapiArticle: article } = data
    return (
        <Layout>
            <h1>This is an article about { article.Title }</h1>
            <h3>
                by <Link to={`/authors/User_${article.author.id}`}>{ article.author.username }</Link>
            </h3>
            <p>{ article.Content }</p>
            <Image fluid={ article.Image.childImageSharp.fluid }/>
        </Layout>
    )
}

export default ArticleTemplate

export const ArticleQuery = graphql`
    query ArticleQuery($id: String!) {
        strapiArticle(id: { eq: $id }) {
            Title
            Content
            author {
                username
                id
            }
            Image {
                childImageSharp {
                    fluid(maxWidth: 3000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`
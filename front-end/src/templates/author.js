import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const AuthorTemplate = ({ data }) => {
    let author = data.strapiUser
    let { articles } = author

    let articlesListItems = articles.map(article, key => {
        console.log(key)
        console.log(article)
    })

    return (
        <Layout>
            <h1>Author username: { author.username }</h1>
            { articlesListItems }
        </Layout>
    )
}

export default AuthorTemplate

export const AuthorTemplateQuery = graphql`
    query AuthorTemplateQuery($id: String!) {
        strapiUser(id: { eq: $id }) {
            id
            username
            articles {
                Title
                Content
            }
        }
    }
`
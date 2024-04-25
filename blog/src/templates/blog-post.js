import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPost = ({ data }) => {
    const { title, body } = data.contentfulSwiftiesBlog;

    return (
        <Layout>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}}></div>
        </Layout>
    );
}

export default BlogPost;

export const pageQuery = graphql`
    query blogPostQuery($slug: String!) {
        contentfulSwiftiesBlog(slug: {eq: $slug}) {
            title
            slug
            body {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`
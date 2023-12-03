import React from "react"
import { graphql } from "gatsby"
import { Cards, Hero, SiteMetadata } from "../components"
import { Layout } from "../layouts/Layout"

export default ({ data }) => {
  return (
    <Layout>
      <SiteMetadata
        title="Bootstrap City Business Directory"
        description="List of Businesses in Bootstrap City"
        image={data.hero.url}
      />

      <Hero
        image={data.hero}
        tag="#bootstrap.city"
        title="Bootstrap City Business Directory"
        description="List of Businesses in Bootstrap City"
      />

      <Cards nodes={data.items.nodes} />
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery($tableName: String!) {
    hero: file(relativePath: { eq: "hero-travel.jpg" }) {
      ...HeroImageFragment
    }
    items: allAirtable(filter: { table: { eq: $tableName } }) {
      nodes {
        data {
          raipay_address
          street_address
          image {
            ...CardImageFragment
          }
          name
          slug
          summary
        }
      }
    }
  }
`

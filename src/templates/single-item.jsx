import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { Feature, SiteMetadata } from "../components"
import { useModal } from "../context"
import { Layout } from "../layouts/Layout"

export default props => {
  const { data, location } = props
  const {
    raipay_address,
    street_address,
    description,
    image: {
      localFiles: [cover],
    },
    name,
    summary,
    tags,
    url,
  } = data.item.data
  const navigation = location.state ? location.state.navigation : null
  const { modal } = useModal()

  return (
    <Layout navigation={navigation}>
      <SiteMetadata title={name} description={summary} image={cover.url} />
      <article className={modal && "max-h-80vh md:max-h-90vh overflow-auto"}>
        <div className={modal ? "p-4 lg:p-8" : "container py-8"}>
          <h1 className="text-2xl lg:text-3xl text-blue-500 font-bold leading-tight">
            {name}
          </h1>
          <p className="text-base lg:text-lg text-blue-800 font-medium mb-4">
            {summary}
          </p>
          <div className="flex flex-wrap">
            <div className="w-full pb-4 lg:w-3/5 lg:pr-4 lg:pb-0">
              <Img fluid={cover.childImageSharp.fluid} alt={name} />
            </div>
            <div className="w-full lg:w-2/5 lg:pl-4">
              <Feature label="Street Address" value={street_address} />
              <Feature label="Raipay Address" value={raipay_address} />
              <Feature label="Tags" value={tags} />
              <Feature label="Overview" value={url} />
              <p className="mt-4 whitespace-pre-line text-sm lg:text-base leading-normal text-blue-900">
                {description}
              </p>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query SingleItemQuery($slug: String!) {
    item: airtable(data: { slug: { eq: $slug } }) {
      data {
        raipay_address
        street_address
        description
        name
        image {
          localFiles {
            url: publicURL
            childImageSharp {
              fluid(maxWidth: 733, maxHeight: 480, cropFocus: NORTH) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        slug
        summary
        tags
        url
      }
    }
  }
`

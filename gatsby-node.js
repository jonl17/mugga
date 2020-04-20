const path = require("path")
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const landshlutiTemplate = path.resolve(`src/templates/landshluti.tsx`)
  const result = await graphql(`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
        }
      }
    }
  }
  `)
  result.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: slugify(`${node.frontmatter.title}`, { lower: true }),
      component: landshlutiTemplate
    })
  })
}
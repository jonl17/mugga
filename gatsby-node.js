const path = require("path")
const slugify = require("slugify")


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const landshlutiTemplate = path.resolve(`src/templates/landshluti.tsx`)
  const afangastadurTemplate = path.resolve(`src/templates/afangastadur.tsx`)
  const result = await graphql(`
  {
    landshlutar: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/landshlutar/"}}) {
      nodes {
        id
        frontmatter {
          title
        }
      }
    }
    afangastadir: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/afangastadir/"}}) {
      nodes {
        id
        frontmatter {
          title
          landshluti
        }
      }
    }
  }
  `)
  result.data.landshlutar.nodes.forEach(node => {
    createPage({
      path: slugify(`${node.frontmatter.title}`, { lower: true }),
      component: landshlutiTemplate,
      context: {
        title: node.frontmatter.title,
        id: node.id,
        landshluti: slugify(node.frontmatter.title, { lower: true })
      }
    })
  })
  result.data.afangastadir.nodes.forEach(node => {
    const slugifiedTitle = slugify(`${node.frontmatter.title}`, { lower: true })
    const slugifiedLandshluti = slugify(`${node.frontmatter.landshluti}`, { lower: true })
    createPage({
      path: `${slugifiedLandshluti}/${slugifiedTitle}`,
      component: afangastadurTemplate,
      context: {
        title: node.frontmatter.title,
        id: node.id
      }
    })
  })
}
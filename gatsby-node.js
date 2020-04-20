const path = require(`path`)

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const workTemplate = path.resolve(`src/templates/work.js`)
  // Query for recipe nodes to use in creating pages.
  return graphql(
    `
      {
        works: allNodeObra(filter: { status: { eq: true } }) {
          nodes {
            drupal_internal__nid
            title
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create pages for each recipe.
    result.data.works.nodes.forEach((node) => {
      const slug = `/obra/${node.drupal_internal__nid}/`
      createPage({
        path: slug,
        component: workTemplate,
        context: {
          id: node.drupal_internal__nid,
        },
      })
    })
  })
}

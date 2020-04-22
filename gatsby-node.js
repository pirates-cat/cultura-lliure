const pagination = require("gatsby-awesome-pagination")

const path = require(`path`)

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const workEntry = path.resolve(`src/templates/work.js`)
    const workIndex = path.resolve(`src/templates/index.js`)
    resolve(
      graphql(
        `
          {
            allNodeObra(filter: { status: { eq: true } }) {
              nodes {
                drupal_internal__nid
                title
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.error(result.errors)
          reject(result.errors)
        }

        const works = result.data.allNodeObra.nodes
        pagination.paginate({
          createPage,
          items: works,
          component: workIndex,
          itemsPerPage: 9,
          pathPrefix: `/`,
        })

        works.forEach(work => {
          const slug = `/obres/${work.drupal_internal__nid}/`
          createPage({
            path: slug,
            component: workEntry,
            context: {
              id: work.drupal_internal__nid,
            },
          })
        })
      })
    )
  })
}

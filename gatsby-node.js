const path = require(`path`);
const { createFilePath, createNodeField } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const galleryItem = path.resolve(`./src/templates/galleryItem.js`);
  const albumTemplate = path.resolve(`./src/templates/album.js`);

  return graphql(
    `
      {
        allFile {
          edges {
            node {
              fields {
                slug
              }
              relativeDirectory
              relativePath
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const images = result.data.allFile.edges;
    const albumImages = images.filter(image => image.node.relativeDirectory !== 'thumbnails')
    const albums = []
    
    // create array of subdirectories
    albumImages.forEach(image => {
      if(!albums.includes(image.node.relativeDirectory)){ 
        albums.push(image.node.relativeDirectory)
      }
    })

    // create page for each subdirectory
    albums.forEach((album, index) => {
      createPage({
        path: album,
        component: albumTemplate,
        context: {
          slug: album,
        }
      })
    })

    // Create a new page from each image file
    albumImages.forEach((image, index) => {
      createPage({
        path: image.node.fields.slug,
        component: galleryItem,
        context: {
          slug: image.node.fields.slug
        }
      })
    })



//     // Create the paginated home view
//     const cardsPerPage = 6;
//     const numPages = Math.ceil(works.length / cardsPerPage);

//     Array.from({ length: numPages }).forEach((_, i) => {
//       createPage({
//         path: i === 0 ? `/` : `/${i + 1}`,
//         component: path.resolve("./src/templates/album.js"),

//         // pass variables to the album component using page context
//         context: {
//           limit: cardsPerPage,
//           skip: i * cardsPerPage,
//           numPages,
//           currentPage: i + 1
//         }
//       });
//     });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // create a slug out of the image's filename
  if (node.internal.type === `File` || node.internal.type === `Directory`) {
    const relativeFilePath = createFilePath({ 
      node, 
      getNode
    })

    createNodeField({
      node,
      name: `slug`,
      value: relativeFilePath
    })
  }

//   // create custom node fields containing exif data for each image file
//   if (node.internal.mediaType === "image/jpeg") {
//     fastExif
//       .read(node.absolutePath)
//       .then(exifData => {
//         const description = exifData.image.ImageDescription;
//         const title = exifData.image.DocumentName;
//         const copyright = exifData.image.Copyright;

//         createNodeField({
//           name: `exif`,
//           node,
//           value: { title, description, copyright }
//         });
//       })
//       .then(() => {
//         console.log("node fields created");
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }
}

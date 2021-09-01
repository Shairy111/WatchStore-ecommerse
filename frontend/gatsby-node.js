/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const { features } = require("process")

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [
            // You don't need to add the matching ExtractText plugin
            // because gatsby already includes it and makes sure it's only
            // run at the appropriate stages, e.g. not in development
            loaders.miniCssExtract(),
            loaders.css({ importLoaders: 1 }),
            // the postcss loader comes with some nice defaults
            // including autoprefixer for our configured browsers
            loaders.postcss(),
            `less-loader`,
          ],
        },
      ],
    },
    plugins: [
      plugins.define({
        __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
      }),
    ],
  })
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const results = await graphql(`
    {
      brands: allStrapiBrand {
        nodes {
          brandName
          strapiId
        }
      }
      categories: allStrapiCategory {
        nodes {
          categoryName
          categoryDescription
          strapiId
          watches {
            id
            brand
            category
            description
            featured
            on_sale
            price
            salePercent
           
          }
        }
      }

      products: allStrapiWatch {
        nodes {
          name
          description
          featured
          id
          images {
            url
          }
          price
          salePercent
          strapiId
          variants {
            band
            color
            qty
            size
            watch
          }
        }
      }
    }
  `)

  if (results.errors) {
    throw results.errors
  }
  console.log(results)

  const brands = results.data.brands.nodes
  const categories = results.data.categories.nodes
  const products = results.data.products.nodes

  brands.forEach(brand => {
    createPage({
      path: `/brands/${brand.brandName.toLowerCase()}`,
      component: require.resolve("./src/templates/brandDetail.js"),
      context: {
        name: brand.brandName,
        id: brand.strapiId,
      },
    })
  })

  categories.forEach(category => {
    
    createPage({
      path: `/${category.categoryName.toLowerCase()}`,
      component: require.resolve("./src/templates/categoryDetail.js"),
      context: {
        strapiId:category.strapiId,
        name: category.categoryName,
        
        watches : category.watches,
        brand : category.watches.brand
      },
    })
  })

   products.forEach(product =>{
      createPage({
          path:`/${product.name}/details`,
          component:require.resolve("./src/templates/productDetail.js"),
          context:{
            name:product.name,
            description:product.description,
            featured : product.featured,
            images :product.images,
            variants:product.variants,
            qty : product.qty,
            price : product.price,
            product : product
          }
      })
  })
}

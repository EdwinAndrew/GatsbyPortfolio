module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Edwin Andrew","short_name":"Edwin Andrew","start_url":"/","background_color":"#ffffff","theme_color":"#000000","display":"minimal-ui","icon":"src/favicon1.png"},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":1000,"quality":80}}]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]

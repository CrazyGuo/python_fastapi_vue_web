
/*module.exports = {
  "presets": [
    [
      "@vue/cli-plugin-babel/preset",
      {
        "useBuiltIns": "entry"
      }
    ]
  ]
}*/

module.exports = {
  "env":{
    "development":{
      "sourceMaps":true,
      "retainLines":true, 
    }
  },
  presets: [
    '@vue/app'
  ]
}

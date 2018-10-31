module.exports = {
    helpers: {
      raw: function(options) {
        return options.fn(this)
      }
    },
    prompts: {
      name: {
        type: "string",
        required: true,
        message: "Project name"
      },
      description: {
        type: "string",
        required: false,
        message: "Project description",
        default: "quickly created a vue project base on NETEASE AI TEAM STANDARD"
      },
      author: {
        type: "string",
        message: "Author"
      },
      ui: {
        type: "confirm",
        message: "Set up light-weight components?"
      }
    },
    filters: {
      'src/components/common/**/*': 'ui',
      'src/components/u-demo-item.vue': 'ui',
      'src/pages/demo.vue': 'ui'
    },
    completeMessage:
      "{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}"
  }
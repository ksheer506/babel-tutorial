import * as t from "@babel/types"

 const plugin = (babel) => ({
  name: "tutorial",
  visitor: {
    ImportSpecifier(nodePath) {

    },
  },
})

export default plugin
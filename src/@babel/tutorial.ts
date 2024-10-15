import { PluginObj } from "@babel/core"
import type * as BabelCore from "@babel/core"
import * as t from "@babel/types"

type Babel = typeof BabelCore

 const plugin = (babel: Babel): PluginObj => ({
  name: "tutorial",
  visitor: {
    ImportSpecifier(nodePath) {

    },
  },
})

export default plugin
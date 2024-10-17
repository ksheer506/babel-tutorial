import { PluginObj } from "@babel/core"
import type * as BabelCore from "@babel/core"
import * as t from "@babel/types"

type Babel = typeof BabelCore

const plugin = (babel: Babel): PluginObj => ({
  name: "tutorial",
  visitor: {
    BinaryExpression(p) {
      if (p.node.operator === "*") {
        p.replaceWith(t.binaryExpression("+", p.node.left, p.node.right))
      }
    },
  },
})

/**
 * [변수 선언 방법이 다른 경우]
 * 1. `const { t } = useTranslation()`
 * 2. `const { t: translate } = useTranslation()`
 * 3. const i18n = useTranslation()
 * 
 * [별도의 커스텀 훅을 사용하는 경우]
 * 
 * [<div>의 children으로 사용되는 경우]
 * 
 * [<div>의 다른 prop으로 사용되는 경우]
 * 
 * [커스텀 컴포넌트의 children로 사용되는 경우]
 * 
 * [커스텀 컴포넌트의 다른 prop으로 사용되는 경우] 
 */

export default plugin
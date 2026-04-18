import { apiSections } from '../features/Api/api/apiData'
import { browserSections } from '../features/Browser/api/browserData'
import { devToolsSections } from '../features/DevTools/api/devToolsData'
import { generalSections } from '../features/General/api/generalData'
import { htmlCssSections } from '../features/HtmlCss/api/htmlCssData'
import { javascriptSections } from '../features/JavaScript/api/javascriptData'
import { laravelSections } from '../features/Laravel/api/laravelData'
import { nextSections } from '../features/Next/api/nextData'
import { nodeSections } from '../features/Node/api/nodeData'
import { performanceSections } from '../features/Performance/api/performanceData'
import { reactSections } from '../features/React/api/reactData'
import { testingSections } from '../features/Testing/api/testingData'
import { typeScriptSections } from '../features/TypeScript/api/typeScriptData'

export const allSections = [
  ...javascriptSections,
  ...typeScriptSections,
  ...htmlCssSections,
  ...browserSections,
  ...performanceSections,
  ...devToolsSections,
  ...testingSections,
  ...apiSections,
  ...laravelSections,
  ...nodeSections,
  ...nextSections,
  ...reactSections,
  ...generalSections,
]

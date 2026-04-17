import { generalSections } from '../features/General/api/generalData'
import { laravelSections } from '../features/Laravel/api/laravelData'
import { nextSections } from '../features/Next/api/nextData'
import { nodeSections } from '../features/Node/api/nodeData'
import { reactSections } from '../features/React/api/reactData'

export const allSections = [
  ...laravelSections,
  ...nodeSections,
  ...nextSections,
  ...reactSections,
  ...generalSections,
]

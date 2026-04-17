import TopicSection from '../../../components/TopicSection'
import { laravelSectionsByLevel } from '../api/laravelData'

function IntermediateSection({ startIndex }) {
  return <TopicSection section={laravelSectionsByLevel.intermediate} startIndex={startIndex} />
}

export default IntermediateSection

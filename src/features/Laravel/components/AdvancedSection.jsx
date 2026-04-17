import TopicSection from '../../../components/TopicSection'
import { laravelSectionsByLevel } from '../api/laravelData'

function AdvancedSection({ startIndex }) {
  return <TopicSection section={laravelSectionsByLevel.advanced} startIndex={startIndex} />
}

export default AdvancedSection

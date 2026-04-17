import TopicSection from '../../../components/TopicSection'
import { laravelSectionsByLevel } from '../api/laravelData'

function FundamentalsSection({ startIndex }) {
  return <TopicSection section={laravelSectionsByLevel.fundamentals} startIndex={startIndex} />
}

export default FundamentalsSection

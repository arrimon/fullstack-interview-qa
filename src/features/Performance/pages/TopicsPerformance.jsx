import TopicsBoard from '../../../components/TopicsBoard'
import { performanceSections } from '../api/performanceData'

function TopicsPerformance() {
  return <TopicsBoard sections={performanceSections} />
}

export default TopicsPerformance

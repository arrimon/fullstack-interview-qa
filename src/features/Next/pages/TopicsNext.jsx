import TopicsBoard from '../../../components/TopicsBoard'
import { nextSections } from '../api/nextData'

function TopicsNext() {
  return <TopicsBoard sections={nextSections} />
}

export default TopicsNext

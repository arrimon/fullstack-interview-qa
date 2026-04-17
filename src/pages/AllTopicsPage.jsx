import TopicsBoard from '../components/TopicsBoard'
import { allSections } from '../lib/allTopics'

function AllTopicsPage() {
  return <TopicsBoard sections={allSections} />
}

export default AllTopicsPage

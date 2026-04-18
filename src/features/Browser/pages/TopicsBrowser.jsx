import TopicsBoard from '../../../components/TopicsBoard'
import { browserSections } from '../api/browserData'

function TopicsBrowser() {
  return <TopicsBoard sections={browserSections} />
}

export default TopicsBrowser

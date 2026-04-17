import TopicsBoard from '../../../components/TopicsBoard'
import { nodeSections } from '../api/nodeData'

function TopicsNode() {
  return <TopicsBoard sections={nodeSections} />
}

export default TopicsNode

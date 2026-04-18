import TopicsBoard from '../../../components/TopicsBoard'
import { apiSections } from '../api/apiData'

function TopicsApi() {
  return <TopicsBoard sections={apiSections} />
}

export default TopicsApi

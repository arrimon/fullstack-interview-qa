import AdvancedSection from '../components/AdvancedSection'
import FundamentalsSection from '../components/FundamentalsSection'
import IntermediateSection from '../components/IntermediateSection'

function TopicsLaravel() {
  return (
    <>
      <FundamentalsSection startIndex={1} />
      <IntermediateSection startIndex={11} />
      <AdvancedSection startIndex={21} />
    </>
  )
}

export default TopicsLaravel

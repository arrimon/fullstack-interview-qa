import TopicSection from './TopicSection'

function TopicsBoard({ sections }) {
  const indexedSections = sections.map((section, index) => ({
    section,
    startIndex:
      sections.slice(0, index).reduce((count, item) => count + item.topics.length, 0) + 1,
  }))

  return (
    <div className="w-full">
      {indexedSections.map(({ section, startIndex }) => (
        <TopicSection key={section.category} section={section} startIndex={startIndex} />
      ))}
    </div>
  )
}

export default TopicsBoard

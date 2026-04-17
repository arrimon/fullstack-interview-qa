import TopicSection from './TopicSection'

function TopicsBoard({ sections }) {
  let currentIndex = 1

  return (
    <div className="w-full">
      {sections.map((section) => {
        const startIndex = currentIndex
        currentIndex += section.topics.length

        return <TopicSection key={section.category} section={section} startIndex={startIndex} />
      })}
    </div>
  )
}

export default TopicsBoard

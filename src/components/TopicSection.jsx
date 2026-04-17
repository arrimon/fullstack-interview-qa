import TopicCard from './TopicCard'

function TopicSection({ section, startIndex = 1 }) {
  return (
    <section className="mb-12">
      <div className="mb-4 flex items-center gap-3">
        <div className="h-7 w-1 shrink-0 rounded-sm" style={{ background: section.color }} />
        <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-app-text">
          {section.category.replace(/^⬡ /, '')}
        </span>
        <span className="rounded bg-app-tag px-2 py-0.5 font-mono text-[11px] text-app-muted">
          {section.topics.length} topics
        </span>
      </div>

      <div className="topic-grid">
        {section.topics.map((topic, index) => (
          <TopicCard
            key={`${section.tag}-${topic.name}`}
            number={startIndex + index}
            tag={section.tag}
            topic={topic}
          />
        ))}
      </div>
    </section>
  )
}

export default TopicSection

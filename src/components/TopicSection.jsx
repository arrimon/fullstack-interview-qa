import useInView from '../hooks/useInView'
import TopicCard from './TopicCard'

function TopicSection({ section, startIndex = 1 }) {
  const { elementRef, isInView } = useInView({ rootMargin: '220px 0px' })

  return (
    <section
      ref={elementRef}
      className={`mb-12 transition-[opacity,transform] duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div className="h-7 w-1 shrink-0 rounded-sm" style={{ background: section.color }} />
        <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-app-text">
          {section.category}
        </span>
        <span className="rounded bg-app-tag px-2 py-0.5 font-mono text-[11px] text-app-muted">
          {section.topics.length} topics
        </span>
      </div>

      <div className="topic-grid">
        {isInView
          ? section.topics.map((topic, index) => (
              <TopicCard
                key={`${section.tag}-${topic.name}`}
                number={startIndex + index}
                tag={section.tag}
                topic={topic}
              />
            ))
          : section.topics.map((topic) => (
              <div
                key={`${section.tag}-${topic.name}`}
                className="h-[88px] rounded-[10px] border border-app-border bg-app-card/50"
              />
            ))}
      </div>
    </section>
  )
}

export default TopicSection

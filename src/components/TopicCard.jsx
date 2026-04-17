import { useTopicModal } from '../context/TopicModalContext'

const tagClasses = {
  laravel: 'bg-[rgba(255,45,32,.12)] text-laravel',
  node: 'bg-[rgba(104,160,99,.12)] text-node',
  next: 'bg-[rgba(255,255,255,.07)] text-[#bbb]',
  react: 'bg-[rgba(97,218,251,.10)] text-react',
  general: 'bg-[rgba(245,158,11,.10)] text-general',
}

function TopicCard({ topic, tag, number }) {
  const { openTopic } = useTopicModal()

  return (
    <button
      type="button"
      onClick={() => openTopic(topic)}
      className="flex cursor-pointer items-start gap-3 rounded-[10px] border border-app-border bg-app-card px-4 py-[14px] text-left transition-[border-color,transform] duration-200 hover:-translate-y-px hover:border-[#2a2a3a]"
    >
      <span className="mt-0.5 min-w-7 shrink-0 font-mono text-[10px] text-app-muted">
        {String(number).padStart(3, '0')}
      </span>
      <div className="flex-1">
        <div className="mb-[3px] text-[13.5px] leading-[1.35] font-semibold text-app-text">
          {topic.name}
        </div>
        <div className="font-mono text-[11.5px] leading-[1.45] text-app-muted">{topic.desc}</div>
      </div>
      <span
        className={`mt-0.5 shrink-0 rounded px-[7px] py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-[0.06em] ${tagClasses[tag]}`}
      >
        {tag}
      </span>
    </button>
  )
}

export default TopicCard

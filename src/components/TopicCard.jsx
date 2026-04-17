import { useTopicModal } from '../context/TopicModalContext'
import useInView from '../hooks/useInView'

const tagClasses = {
  laravel: 'bg-[rgba(255,45,32,.12)] text-laravel',
  node: 'bg-[rgba(104,160,99,.12)] text-node',
  next: 'bg-[rgba(255,255,255,.07)] text-[#bbb]',
  react: 'bg-[rgba(97,218,251,.10)] text-react',
  general: 'bg-[rgba(245,158,11,.10)] text-general',
}

function TopicCard({ topic, tag, number }) {
  const { openTopic } = useTopicModal()
  const { elementRef, isInView } = useInView({ rootMargin: '0px 0px -5% 0px', threshold: 0.18 })

  return (
    <button
      ref={elementRef}
      type="button"
      onClick={() => openTopic(topic)}
      className={`flex min-h-[88px] cursor-pointer items-start gap-3 rounded-[10px] border border-app-border bg-app-card px-4 py-[14px] text-left transition-[opacity,transform,border-color,box-shadow,background-color] duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] ${
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } hover:-translate-y-[2px] hover:border-[#2c2c3d] hover:bg-[#191924] hover:shadow-[0_18px_44px_rgba(0,0,0,.2)] active:scale-[0.995]`}
    >
      <span className="mt-0.5 min-w-7 shrink-0 font-mono text-[10px] text-app-muted">
        {String(number).padStart(3, '0')}
      </span>
      <div className="min-w-0 flex-1">
        <div className="mb-[3px] text-[13.5px] leading-[1.35] font-semibold text-app-text">
          {topic.name}
        </div>
        <div className="font-mono text-[11.5px] leading-[1.45] text-app-muted">{topic.desc}</div>
      </div>
      <span
        className={`mt-0.5 shrink-0 rounded px-[7px] py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-[0.06em] max-[420px]:hidden ${tagClasses[tag]}`}
      >
        {tag}
      </span>
    </button>
  )
}

export default TopicCard

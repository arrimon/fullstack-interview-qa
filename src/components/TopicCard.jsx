import { buildTopicPath } from '../lib/topicDetails'
import { categoryMeta } from '../lib/topicMeta'
import { useTopicModal } from '../hooks/useTopicModal'
import useInView from '../hooks/useInView'

const tagClasses = {
  javascript: 'bg-[rgba(239,159,39,.12)] text-[#ef9f27]',
  typescript: 'bg-[rgba(55,138,221,.12)] text-[#378add]',
  'html-css': 'bg-[rgba(216,90,48,.12)] text-[#d85a30]',
  browser: 'bg-[rgba(29,158,117,.12)] text-[#1d9e75]',
  performance: 'bg-[rgba(127,119,221,.12)] text-[#7f77dd]',
  devtools: 'bg-[rgba(136,135,128,.12)] text-[#a4a39c]',
  testing: 'bg-[rgba(212,83,126,.12)] text-[#d4537e]',
  api: 'bg-[rgba(99,153,34,.12)] text-[#84b940]',
  laravel: 'bg-[rgba(255,45,32,.12)] text-laravel',
  node: 'bg-[rgba(104,160,99,.12)] text-node',
  next: 'bg-[rgba(255,255,255,.07)] text-[#bbb]',
  react: 'bg-[rgba(97,218,251,.10)] text-react',
  general: 'bg-[rgba(245,158,11,.10)] text-general',
}

function TopicCard({ topic, tag, number }) {
  const { openTopic } = useTopicModal()
  const { elementRef, isInView } = useInView({ rootMargin: '0px 0px -5% 0px', threshold: 0.18 })
  const topicPath = buildTopicPath(tag, topic.slug)
  const tagLabel = categoryMeta[tag]?.label ?? tag

  return (
    <article
      ref={elementRef}
      onClick={() => openTopic({ ...topic, tag, path: topicPath })}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          openTopic({ ...topic, tag, path: topicPath })
        }
      }}
      role="button"
      tabIndex={0}
      className={`flex min-h-[88px] cursor-pointer items-start gap-3 rounded-[10px] border border-app-border bg-app-card px-4 py-[14px] text-left transition-[opacity,transform,border-color,box-shadow,background-color] duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] ${
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } hover:-translate-y-[2px] hover:border-[#2c2c3d] hover:bg-[#191924] hover:shadow-[0_18px_44px_rgba(0,0,0,.2)]`}
    >
      <div className="flex min-w-0 flex-1 items-start gap-3 text-left">
        <span className="mt-0.5 min-w-7 shrink-0 font-mono text-[10px] text-app-muted">
          {String(number).padStart(3, '0')}
        </span>
        <div className="min-w-0 flex-1">
          <div className="mb-[3px] text-[13.5px] leading-[1.35] font-semibold text-app-text">
            {topic.name}
          </div>
          <div className="font-mono text-[11.5px] leading-[1.45] text-app-muted">{topic.desc}</div>
        </div>
      </div>
      <div className="ml-2 flex shrink-0 flex-col items-end">
        <span
          className={`mt-0.5 shrink-0 rounded px-[7px] py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-[0.06em] max-[420px]:hidden ${tagClasses[tag]}`}
        >
          {tagLabel}
        </span>
      </div>
    </article>
  )
}

export default TopicCard

import { useEffect, useRef } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-bash'
import 'prismjs/themes/prism-tomorrow.css'
import { useNavigate, useParams } from 'react-router-dom'
import { allSections } from '../lib/allTopics'
import { findTopicByTagAndSlug } from '../lib/topicDetails'

function TopicDetail() {
  const { tag, slug } = useParams()
  const navigate = useNavigate()
  const codeRef = useRef(null)
  const match = findTopicByTagAndSlug(allSections, tag, slug)

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current)
    }
  }, [match])

  if (!match) {
    return (
      <section className="mx-auto max-w-4xl rounded-[20px] border border-app-border bg-app-card p-6">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-6 rounded-md border border-app-border bg-app-surface px-3 py-2 font-mono text-[11px] text-app-muted transition-all duration-300 hover:border-[#333340] hover:bg-app-card hover:text-app-text"
        >
          &larr; Back
        </button>
        <h1 className="mb-3 text-[28px] font-extrabold text-app-text">Topic not found</h1>
        <p className="font-mono text-[13px] leading-6 text-app-muted">
          The topic link could not be matched to your current data set.
        </p>
      </section>
    )
  }

  const { section, topic } = match
  const paragraphs = (topic.answer || topic.desc).split('\n\n')

  return (
    <section className="mx-auto max-w-4xl">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="mb-5 rounded-md border border-app-border bg-app-surface px-3 py-2 font-mono text-[11px] text-app-muted transition-all duration-300 hover:border-[#333340] hover:bg-app-card hover:text-app-text"
      >
        &larr; Back
      </button>

      <div className="rounded-md border border-app-border bg-app-card p-5 shadow-[0_20px_60px_rgba(0,0,0,.28)] sm:p-7">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-app-border bg-app-surface px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-app-muted">
            {section.category}
          </span>
          {topic.code ? (
            <span className="rounded-full border border-app-border bg-app-surface px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-app-muted">
              {topic.language}
            </span>
          ) : null}
        </div>

        <h1 className="mb-3 text-[clamp(30px,4vw,42px)] leading-[1.1] font-extrabold text-app-text">
          {topic.name}
        </h1>
        <p className="mb-8 font-mono text-[13px] leading-6 text-app-muted sm:text-[13.5px]">
          {topic.desc}
        </p>

        <div className="mb-8 space-y-4">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-[15px] leading-7 text-app-text/90">
              {paragraph}
            </p>
          ))}
        </div>

        {topic.code ? (
          <div className="overflow-hidden rounded-[20px] border border-app-border bg-[#101018]">
            <div className="border-b border-app-border px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-app-muted">
              Code Example
            </div>
            <pre className="topic-code-block overflow-x-auto p-4 text-[13px] leading-6 sm:p-5">
              <code ref={codeRef} className={`language-${topic.language}`}>
                {topic.code}
              </code>
            </pre>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default TopicDetail

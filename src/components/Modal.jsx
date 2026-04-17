import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { useTopicModal } from '../context/TopicModalContext'

function Modal() {
  const navigate = useNavigate()
  const { selectedTopic, closeTopic } = useTopicModal()

  useEffect(() => {
    if (!selectedTopic) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeTopic()
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [closeTopic, selectedTopic])

  if (!selectedTopic) {
    return null
  }

  const paragraphs = selectedTopic.answer
    ? selectedTopic.answer.split('\n\n')
    : ['Explanation coming soon...']
  const visibleParagraphs = selectedTopic.readMore ? paragraphs.slice(0, 2) : paragraphs
  const codeLines = selectedTopic.code ? selectedTopic.code.split('\n') : []
  const visibleCode = selectedTopic.readMore ? codeLines.slice(0, 4).join('\n') : selectedTopic.code
  const modalLabel = selectedTopic.readMore ? 'Topic Preview' : 'Topic Details'

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[rgba(10,10,15,.82)] px-3 py-4 sm:px-6 sm:py-8"
      onClick={closeTopic}
      role="presentation"
    >
      <div
        className="relative w-full max-w-xl rounded-[20px] border border-app-border bg-app-card p-4 shadow-[0_20px_60px_rgba(0,0,0,.45)] transition-transform duration-500 ease-out sm:p-6"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="topic-modal-title"
      >
        <button
          type="button"
          onClick={closeTopic}
          aria-label="Close modal"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-app-border bg-app-surface text-[16px] leading-none text-app-muted transition-all duration-300 hover:border-[#333340] hover:bg-app-card hover:text-app-text sm:hidden"
        >
          &times;
        </button>

        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div className="min-w-0 pr-10 sm:pr-0">
            <div className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-react">
              {modalLabel}
            </div>
            <h2
              id="topic-modal-title"
              className="text-[24px] leading-[1.15] font-extrabold text-app-text sm:text-[28px]"
            >
              {selectedTopic.name}
            </h2>
            <p className="mt-3 font-mono text-[12px] leading-5 text-app-muted sm:max-w-[90%]">
              {selectedTopic.desc}
            </p>
          </div>
          <button
            type="button"
            onClick={closeTopic}
            className="hidden shrink-0 rounded-md border border-app-border bg-app-surface px-3 py-2 font-mono text-[11px] text-app-muted transition-all duration-300 hover:border-[#333340] hover:bg-app-card hover:text-app-text sm:block sm:self-start"
          >
            Close
          </button>
        </div>

        <div className="rounded-2xl border border-app-border/80 bg-app-surface/80 p-4 sm:p-5">
          <div className="space-y-4">
            {visibleParagraphs.map((paragraph) => (
              <p key={paragraph} className="font-mono text-[13px] leading-6 text-app-muted sm:text-[13.5px]">
                {paragraph}
              </p>
            ))}
          </div>

          {visibleCode ? (
            <div className="mt-5 overflow-hidden rounded-[16px] border border-app-border bg-[#101018]">
              <div className="border-b border-app-border px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-app-muted">
                Code Example
              </div>
              <pre className="overflow-x-auto p-4 font-mono text-[12px] leading-6 text-app-text">
                <code>{visibleCode}</code>
              </pre>
            </div>
          ) : null}

          {selectedTopic.readMore ? (
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-[11px] leading-5 text-app-muted">
                This topic has a longer explanation and full code example on its detail page.
              </p>
              <button
                type="button"
                onClick={() => {
                  closeTopic()
                  navigate(selectedTopic.path)
                }}
                className="rounded-md border border-app-border bg-app-card px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-app-text transition-all duration-300 hover:border-[#333340] hover:bg-[#191924]"
              >
                Read More
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default Modal

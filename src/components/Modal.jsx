import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useTopicModal } from '../context/TopicModalContext'

function Modal() {
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
          ×
        </button>

        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div className="min-w-0 pr-10 sm:pr-0">
            <div className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-react">
              Topic Preview
            </div>
            <h2
              id="topic-modal-title"
              className="text-[24px] leading-[1.15] font-extrabold text-app-text sm:text-[28px]"
            >
              {selectedTopic.name}
            </h2>
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
          <p className="font-mono text-[13px] leading-6 text-app-muted sm:text-[13.5px]">
            Explanation coming soon...
          </p>
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default Modal

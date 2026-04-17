import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useTopicModal } from '../context/TopicModalContext'

function Modal() {
  const { selectedTopic, closeTopic } = useTopicModal()

  useEffect(() => {
    if (!selectedTopic) {
      return undefined
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeTopic()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [closeTopic, selectedTopic])

  if (!selectedTopic) {
    return null
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(10,10,15,.78)] px-6"
      onClick={closeTopic}
      role="presentation"
    >
      <div
        className="w-full max-w-xl rounded-2xl border border-app-border bg-app-card p-6 shadow-[0_20px_60px_rgba(0,0,0,.45)]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="topic-modal-title"
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <div className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-react">
              Topic Preview
            </div>
            <h2 id="topic-modal-title" className="text-[28px] leading-[1.15] font-extrabold text-app-text">
              {selectedTopic.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeTopic}
            className="rounded-md border border-app-border bg-app-surface px-3 py-1.5 font-mono text-[11px] text-app-muted transition-colors hover:border-[#333340] hover:text-app-text"
          >
            Close
          </button>
        </div>
        <p className="font-mono text-[13px] leading-6 text-app-muted">Explanation coming soon...</p>
      </div>
    </div>,
    document.body,
  )
}

export default Modal

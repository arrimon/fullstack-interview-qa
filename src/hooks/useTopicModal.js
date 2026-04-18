import { useContext } from 'react'
import { TopicModalContext } from '../context/TopicModalContext'

export function useTopicModal() {
  const context = useContext(TopicModalContext)

  if (!context) {
    throw new Error('useTopicModal must be used inside TopicModalProvider')
  }

  return context
}

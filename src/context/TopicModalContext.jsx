import { createContext, useContext, useMemo, useState } from 'react'

const TopicModalContext = createContext(null)

export function TopicModalProvider({ children }) {
  const [selectedTopic, setSelectedTopic] = useState(null)

  const value = useMemo(
    () => ({
      selectedTopic,
      openTopic: (topic) => setSelectedTopic(topic),
      closeTopic: () => setSelectedTopic(null),
    }),
    [selectedTopic],
  )

  return <TopicModalContext.Provider value={value}>{children}</TopicModalContext.Provider>
}

export function useTopicModal() {
  const context = useContext(TopicModalContext)

  if (!context) {
    throw new Error('useTopicModal must be used inside TopicModalProvider')
  }

  return context
}

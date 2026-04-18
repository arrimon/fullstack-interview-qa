import { createContext, useMemo, useState } from 'react'

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
export { TopicModalContext }

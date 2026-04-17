import { allSections } from './allTopics'

const statConfig = [
  { key: 'laravel', label: 'Laravel', color: 'var(--color-laravel)' },
  { key: 'node', label: 'Node.js', color: 'var(--color-node)' },
  { key: 'next', label: 'Next.js', color: '#ccc' },
  { key: 'react', label: 'React', color: 'var(--color-react)' },
  { key: 'general', label: 'General', color: 'var(--color-general)' },
]

export const topicCounts = allSections.reduce(
  (counts, section) => {
    const topicCount = section.topics.length

    if (Object.hasOwn(counts, section.tag)) {
      counts[section.tag] += topicCount
    }

    counts.total += topicCount

    return counts
  },
  {
    laravel: 0,
    node: 0,
    next: 0,
    react: 0,
    general: 0,
    total: 0,
  },
)

export const totalTopics = topicCounts.total

export const statItems = [
  ...statConfig.map((item) => ({
    ...item,
    value: topicCounts[item.key],
  })),
  {
    key: 'total',
    label: 'Total',
    value: totalTopics,
    color: 'var(--color-app-text)',
  },
]

import { allSections } from './allTopics'

const statConfig = [
  { key: 'javascript', label: 'JavaScript', color: 'var(--color-javascript)' },
  { key: 'typescript', label: 'TypeScript', color: 'var(--color-typescript)' },
  { key: 'html-css', label: 'HTML & CSS', color: 'var(--color-html-css)' },
  { key: 'browser', label: 'Browser', color: 'var(--color-browser)' },
  { key: 'performance', label: 'Performance', color: 'var(--color-performance)' },
  { key: 'devtools', label: 'Dev Tools', color: 'var(--color-devtools)' },
  { key: 'testing', label: 'Testing', color: 'var(--color-testing)' },
  { key: 'api', label: 'API & Data', color: 'var(--color-api)' },
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
    javascript: 0,
    typescript: 0,
    'html-css': 0,
    browser: 0,
    performance: 0,
    devtools: 0,
    testing: 0,
    api: 0,
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

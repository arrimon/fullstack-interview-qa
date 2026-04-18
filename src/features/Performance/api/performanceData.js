import { enrichSectionsWithTopicDetails } from '../../../lib/topicDetails'

const performanceSectionsSource = [
  {
    category: 'Performance & Optimization',
    color: 'var(--color-performance)',
    tag: 'performance',
    topics: [
      { name: 'Core Web Vitals', desc: 'LCP, CLS, INP - measurement and improvement', level: 'junior' },
      { name: 'Lazy Loading', desc: 'loading="lazy", React.lazy, dynamic import()', level: 'junior' },
      { name: 'Code Splitting', desc: 'Bundle splitting, chunk strategy, vendor chunks', level: 'junior' },
      { name: 'Memoization', desc: 'useMemo, useCallback, React.memo, when to avoid', level: 'junior' },
      { name: 'Debounce & Throttle', desc: 'Limiting function calls, lodash, custom hooks', level: 'junior' },
      { name: 'Image Optimization', desc: 'WebP, srcset, sizes, next/image, aspect-ratio', level: 'junior' },
      { name: 'Network Waterfall', desc: 'Critical path, preload/prefetch, resource hints', level: 'mid' },
      { name: 'Caching Strategies', desc: 'HTTP cache headers, stale-while-revalidate, CDN', level: 'mid' },
      { name: 'Tree Shaking', desc: 'Dead code elimination, side effects, sideEffects flag', level: 'mid' },
      { name: 'Virtualisation', desc: 'Windowing large lists, react-window, react-virtual', level: 'mid' },
    ],
  },
]

export const performanceSections = enrichSectionsWithTopicDetails(performanceSectionsSource)

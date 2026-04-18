import { enrichSectionsWithTopicDetails } from '../../../lib/topicDetails'

const browserSectionsSource = [
  {
    category: 'Web APIs & Browser',
    color: 'var(--color-browser)',
    tag: 'browser',
    topics: [
      { name: 'DOM Manipulation', desc: 'querySelector, createElement, appendChild, events', level: 'junior' },
      { name: 'Fetch API', desc: 'GET/POST, headers, JSON parsing, AbortController', level: 'junior' },
      { name: 'LocalStorage & SessionStorage', desc: 'setItem, getItem, JSON serialization, limits', level: 'junior' },
      { name: 'Web Storage vs Cookies', desc: 'Differences, use cases, HttpOnly, SameSite', level: 'junior' },
      { name: 'Event Delegation', desc: 'Bubbling, capturing, event.target vs currentTarget', level: 'junior' },
      { name: 'IntersectionObserver', desc: 'Lazy loading, infinite scroll, visibility tracking', level: 'junior' },
      { name: 'History API', desc: 'pushState, replaceState, popstate event, SPA routing', level: 'junior' },
      { name: 'Web Workers', desc: 'Background threads, postMessage, Transferable objects', level: 'mid' },
      { name: 'IndexedDB', desc: 'Client-side DB, transactions, object stores', level: 'mid' },
      { name: 'WebSockets', desc: 'ws:// protocol, send/onmessage, vs HTTP polling', level: 'mid' },
    ],
  },
]

export const browserSections = enrichSectionsWithTopicDetails(browserSectionsSource)

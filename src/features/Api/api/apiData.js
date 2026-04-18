import { enrichSectionsWithTopicDetails } from '../../../lib/topicDetails'

const apiSectionsSource = [
  {
    category: 'API & Data',
    color: 'var(--color-api)',
    tag: 'api',
    topics: [
      { name: 'REST API Basics', desc: 'HTTP verbs, status codes, headers, CRUD', level: 'junior' },
      { name: 'GraphQL Basics', desc: 'Query, mutation, schema, Apollo Client', level: 'junior' },
      { name: 'CORS', desc: 'Same-origin policy, preflight, Access-Control headers', level: 'junior' },
      { name: 'Authentication (JWT)', desc: 'Token flow, access/refresh tokens, storage', level: 'junior' },
      { name: 'OAuth 2.0 / OIDC', desc: 'Authorization code flow, scopes, PKCE', level: 'junior' },
      { name: 'API Error Handling', desc: 'Retry logic, fallback UI, error boundaries', level: 'junior' },
      { name: 'Pagination Patterns', desc: 'Offset vs cursor, infinite scroll, page controls', level: 'junior' },
      { name: 'WebSocket vs SSE', desc: 'Full-duplex vs server-push, use cases', level: 'mid' },
      { name: 'Rate Limiting & Throttling', desc: 'Client-side retry, exponential backoff', level: 'mid' },
      { name: 'OpenAPI / Swagger', desc: 'Spec-driven dev, client generation, docs', level: 'mid' },
    ],
  },
]

export const apiSections = enrichSectionsWithTopicDetails(apiSectionsSource)

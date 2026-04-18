import { enrichSectionsWithTopicDetails } from '../../../lib/topicDetails'

const devToolsSectionsSource = [
  {
    category: 'Git & Dev Tools',
    color: 'var(--color-devtools)',
    tag: 'devtools',
    topics: [
      { name: 'Git Branching', desc: 'feature branches, merge vs rebase, fast-forward', level: 'junior' },
      { name: 'Pull Requests & Code Review', desc: 'PR etiquette, review comments, LGTM flow', level: 'junior' },
      { name: 'Conventional Commits', desc: 'feat:, fix:, chore:, breaking changes, changelog', level: 'junior' },
      { name: 'npm / yarn / pnpm', desc: 'lock files, workspaces, scripts, peer deps', level: 'junior' },
      { name: 'ESLint & Prettier', desc: 'Rules, plugins, .eslintrc, formatOnSave', level: 'junior' },
      { name: 'Browser DevTools', desc: 'Network tab, Sources, Lighthouse, Memory profiler', level: 'junior' },
      { name: 'Environment Variables', desc: '.env files, VITE_ prefix, secrets vs public vars', level: 'junior' },
      { name: 'CI/CD Basics', desc: 'GitHub Actions, build -> test -> deploy pipeline', level: 'junior' },
      { name: 'Docker Basics', desc: 'Dockerfile, image vs container, docker-compose', level: 'mid' },
      { name: 'Monorepo (Turborepo)', desc: 'Workspaces, shared packages, build caching', level: 'mid' },
    ],
  },
]

export const devToolsSections = enrichSectionsWithTopicDetails(devToolsSectionsSource)

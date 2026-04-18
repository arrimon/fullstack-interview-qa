import { enrichSectionsWithTopicDetails } from '../../../lib/topicDetails'

const htmlCssSectionsSource = [
  {
    category: 'HTML & CSS',
    color: 'var(--color-html-css)',
    tag: 'html-css',
    topics: [
      { name: 'Semantic HTML', desc: 'article, section, nav, main, aside, figure', level: 'junior' },
      { name: 'CSS Box Model', desc: 'margin, border, padding, content, box-sizing', level: 'junior' },
      { name: 'Flexbox', desc: 'flex-direction, justify-content, align-items, gap', level: 'junior' },
      { name: 'CSS Grid', desc: 'grid-template, fr, auto-fill, grid-area', level: 'junior' },
      { name: 'Responsive Design', desc: 'media queries, mobile-first, viewport units', level: 'junior' },
      { name: 'CSS Variables', desc: '--custom-props, var(), fallback values, scoping', level: 'junior' },
      { name: 'Positioning', desc: 'relative, absolute, fixed, sticky, z-index', level: 'junior' },
      { name: 'Pseudo-classes & Elements', desc: ':hover, :nth-child, ::before, ::after', level: 'junior' },
      { name: 'CSS Animations', desc: '@keyframes, transition, animation shorthand', level: 'junior' },
      { name: 'CSS Specificity', desc: 'Cascade, inheritance, specificity score', level: 'junior' },
    ],
  },
]

export const htmlCssSections = enrichSectionsWithTopicDetails(htmlCssSectionsSource)

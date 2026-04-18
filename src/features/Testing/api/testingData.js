import { enrichSectionsWithTopicDetails } from '../../../lib/topicDetails'

const testingSectionsSource = [
  {
    category: 'Testing',
    color: 'var(--color-testing)',
    tag: 'testing',
    topics: [
      { name: 'Unit Testing', desc: 'Vitest/Jest, describe, it, expect, mocks', level: 'junior' },
      { name: 'Component Testing (RTL)', desc: 'render, screen.getBy*, userEvent, act', level: 'junior' },
      { name: 'Mocking', desc: 'vi.mock, jest.fn(), spyOn, module mocking', level: 'junior' },
      { name: 'Test Coverage', desc: 'Istanbul, v8 coverage, coverage thresholds', level: 'junior' },
      { name: 'E2E Testing (Playwright)', desc: 'page, locator, assertions, CI integration', level: 'junior' },
      { name: 'TDD Basics', desc: 'Red-green-refactor, test-first approach', level: 'junior' },
      { name: 'Snapshot Testing', desc: 'toMatchSnapshot, when useful vs brittle', level: 'junior' },
      { name: 'API Mocking (MSW)', desc: 'Service worker intercepts, handlers, REST & GraphQL', level: 'mid' },
      { name: 'Visual Regression', desc: 'Percy, Chromatic, pixel diffing with Storybook', level: 'mid' },
      { name: 'Testing Hooks', desc: 'renderHook, act, custom hook test strategies', level: 'mid' },
    ],
  },
]

export const testingSections = enrichSectionsWithTopicDetails(testingSectionsSource)

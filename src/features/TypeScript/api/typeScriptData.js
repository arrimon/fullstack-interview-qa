import { enrichSectionsWithTopicDetails } from '../../../lib/topicDetails'

const typeScriptSectionsSource = [
  {
    category: 'TypeScript',
    color: 'var(--color-typescript)',
    tag: 'typescript',
    topics: [
      { name: 'Types vs Interfaces', desc: 'Differences, when to use each, extending', level: 'junior' },
      { name: 'Union & Intersection Types', desc: 'A | B and A & B, narrowing', level: 'junior' },
      { name: 'Generics', desc: '<T>, constraints, default types, utility types', level: 'junior' },
      { name: 'Enums', desc: 'String enums, const enums, alternatives', level: 'junior' },
      { name: 'Type Narrowing', desc: 'typeof, instanceof, in, discriminated unions', level: 'junior' },
      { name: 'Utility Types', desc: 'Partial, Required, Pick, Omit, Readonly, Record', level: 'junior' },
      { name: 'Type Assertions', desc: 'as keyword, non-null assertion, satisfies', level: 'junior' },
      { name: 'keyof & typeof', desc: 'Indexed access types, template literal types', level: 'mid' },
      { name: 'Declaration Files (.d.ts)', desc: 'Ambient modules, global types, DefinitelyTyped', level: 'mid' },
      { name: 'Mapped Types', desc: 'Transforming types, readonly, optional modifiers', level: 'mid' },
    ],
  },
]

export const typeScriptSections = enrichSectionsWithTopicDetails(typeScriptSectionsSource)

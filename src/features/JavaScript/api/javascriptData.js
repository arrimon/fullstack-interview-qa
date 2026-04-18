import { enrichSectionsWithTopicDetails } from '../../../lib/topicDetails'

const javascriptSectionsSource = [
  {
    category: 'JavaScript Fundamentals',
    color: 'var(--color-javascript)',
    tag: 'javascript',
    topics: [
      { name: 'var / let / const', desc: 'Hoisting, block scope, temporal dead zone', level: 'junior' },
      { name: 'Arrow Functions', desc: 'Syntax, lexical this, implicit return', level: 'junior' },
      { name: 'Destructuring', desc: 'Array & object destructuring, default values', level: 'junior' },
      { name: 'Spread & Rest', desc: '...spread in arrays, objects, function args', level: 'junior' },
      { name: 'Template Literals', desc: 'Interpolation, multi-line strings, tagged templates', level: 'junior' },
      { name: 'Array Methods', desc: 'map, filter, reduce, find, some, every, flat', level: 'junior' },
      { name: 'Promises & async/await', desc: 'then/catch, async functions, error handling', level: 'junior' },
      { name: 'Event Loop', desc: 'Call stack, microtasks, macrotasks, setTimeout', level: 'junior' },
      { name: 'Closures', desc: 'Lexical scope, closure over variables, private state', level: 'junior' },
      { name: 'this keyword', desc: 'call, apply, bind, implicit vs explicit binding', level: 'junior' },
      { name: 'Prototype & Inheritance', desc: 'Prototype chain, __proto__, class syntax', level: 'junior' },
      { name: 'Modules (ESM)', desc: 'import/export, named vs default, dynamic import()', level: 'junior' },
      { name: 'Optional Chaining & Nullish', desc: '?. operator, ?? nullish coalescing', level: 'junior' },
      { name: 'Error Handling', desc: 'try/catch/finally, custom Error classes', level: 'junior' },
      { name: 'Map & Set', desc: 'WeakMap, WeakSet, iteration, use cases vs Object', level: 'junior' },
    ],
  },
]

export const javascriptSections = enrichSectionsWithTopicDetails(javascriptSectionsSource)

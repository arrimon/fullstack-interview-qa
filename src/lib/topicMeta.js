export const categoryMeta = {
  all: {
    label: 'All',
    path: '/',
    accentText: 'var(--color-app-text)',
    activeClassName: 'text-app-text border-[#333340] bg-[#1e1e2e]',
  },
  laravel: {
    label: 'Laravel',
    path: '/laravel',
    accentText: 'var(--color-laravel)',
    activeClassName: 'text-laravel border-[rgba(255,45,32,.4)] bg-[rgba(255,45,32,.08)]',
  },
  node: {
    label: 'Node.js',
    path: '/node',
    accentText: 'var(--color-node)',
    activeClassName: 'text-node border-[rgba(104,160,99,.4)] bg-[rgba(104,160,99,.08)]',
  },
  next: {
    label: 'Next.js',
    path: '/next',
    accentText: '#ddd',
    activeClassName: 'text-white border-[rgba(200,200,200,.3)] bg-[rgba(255,255,255,.05)]',
  },
  react: {
    label: 'React',
    path: '/react',
    accentText: 'var(--color-react)',
    activeClassName: 'text-react border-[rgba(97,218,251,.4)] bg-[rgba(97,218,251,.08)]',
  },
  general: {
    label: 'General / CS',
    path: '/general',
    accentText: 'var(--color-general)',
    activeClassName: 'text-general border-[rgba(245,158,11,.4)] bg-[rgba(245,158,11,.08)]',
  },
}

export const stackPills = [
  { key: 'laravel', label: 'Laravel', className: 'text-laravel border-[rgba(255,45,32,.35)] bg-[rgba(255,45,32,.07)]' },
  { key: 'node', label: 'Node.js', className: 'text-node border-[rgba(104,160,99,.35)] bg-[rgba(104,160,99,.07)]' },
  { key: 'next', label: 'Next.js', className: 'text-[#ccc] border-[rgba(200,200,200,.2)] bg-[rgba(255,255,255,.04)]' },
  { key: 'react', label: 'React', className: 'text-react border-[rgba(97,218,251,.3)] bg-[rgba(97,218,251,.07)]' },
]

export const legendItems = [
  { key: 'laravel', label: 'Laravel', dot: 'var(--color-laravel)' },
  { key: 'node', label: 'Node.js', dot: 'var(--color-node)' },
  { key: 'next', label: 'Next.js', dot: '#bbb' },
  { key: 'react', label: 'React', dot: 'var(--color-react)' },
  { key: 'general', label: 'General / CS', dot: 'var(--color-general)' },
]

import { NavLink } from 'react-router-dom'
import { categoryMeta } from '../lib/topicMeta'
import { totalTopics } from '../lib/topicStats'

const navOrder = [
  'all',
  'javascript',
  'typescript',
  'html-css',
  'browser',
  'api',
  'testing',
  'performance',
  'devtools',
  'react',
  'next',
  'node',
  'laravel',
  'general',
]

function Navbar() {
  return (
    <nav className="sticky-shell sticky top-0 z-10 flex flex-wrap justify-center gap-2 border-b border-app-border px-3 py-3 sm:px-6 sm:py-5">
      {navOrder.map((key) => {
        const item = categoryMeta[key]
        const label = key === 'all' ? `${item.label} ${totalTopics}` : item.label

        return (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `inline-flex min-h-[38px] items-center justify-center rounded-md border border-app-border bg-app-surface px-2 py-2 font-mono text-[11px] font-semibold tracking-[0.06em] text-app-muted transition-all duration-300 ease-out hover:border-[#333340] hover:bg-app-card hover:text-app-text sm:min-h-[36px] sm:justify-start sm:gap-2 sm:px-[14px] sm:py-1.5 ${
                isActive ? item.activeClassName : ''
              }`
            }
            aria-label={label}
            title={label}
          >
            {({ isActive }) => (
              <>
                <span
                  className={`inline-flex min-w-[32px] items-center justify-center rounded px-1.5 py-1 text-[9px] font-bold tracking-[0.08em] transition-all duration-300 ${
                    isActive
                      ? item.activeChipClassName
                      : item.chipClassName
                  }`}
                >
                  {item.shortLabel}
                </span>
                <span
                  className={`hidden transition-colors duration-300 sm:inline ${
                    isActive ? '' : 'text-app-muted'
                  }`}
                  style={isActive ? { color: item.accentText } : undefined}
                >
                  {label}
                </span>
              </>
            )}
          </NavLink>
        )
      })}
    </nav>
  )
}

export default Navbar

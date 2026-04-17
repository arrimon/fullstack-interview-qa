import { NavLink } from 'react-router-dom'
import { categoryMeta } from '../lib/topicMeta'
import { totalTopics } from '../lib/topicStats'

const navOrder = ['all', 'laravel', 'node', 'next', 'react', 'general']

function Navbar() {
  return (
    <nav className="sticky-shell sticky top-0 z-10 flex flex-wrap justify-center gap-2 border-b border-app-border px-4 py-4 sm:px-6 sm:py-5">
      {navOrder.map((key) => {
        const item = categoryMeta[key]
        const label = key === 'all' ? `${item.label} ${totalTopics}` : item.label

        return (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `rounded-md border border-app-border bg-app-surface px-3 py-2 font-mono text-[11px] font-semibold tracking-[0.06em] text-app-muted transition-all duration-300 ease-out hover:border-[#333340] hover:bg-app-card hover:text-app-text sm:px-[14px] sm:py-1.5 ${
                isActive ? item.activeClassName : ''
              }`
            }
          >
            {label}
          </NavLink>
        )
      })}
    </nav>
  )
}

export default Navbar

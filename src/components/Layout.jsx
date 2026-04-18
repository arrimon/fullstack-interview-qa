import { Outlet } from 'react-router-dom'
import { stackPills } from '../lib/topicMeta'
import { totalTopics } from '../lib/topicStats'
import Legend from './Legend'
import Modal from './Modal'
import Navbar from './Navbar'
import Pill from './Pill'
import StatsBar from './StatsBar'

function Layout() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-app-bg font-display text-app-text">
      <header className="relative overflow-hidden border-b border-app-border px-5 pb-14 pt-[64px] text-center sm:px-6 sm:pt-[72px]">
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <div className="relative">
          <div className="mb-[22px] inline-block rounded-full border border-[rgba(97,218,251,.2)] bg-[rgba(97,218,251,.08)] px-[14px] py-[5px] font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-react">
            Interview Crack Guide &middot; 0&ndash;2 Years
          </div>
          <h1 className="title-tight mb-[14px] text-[clamp(28px,6vw,60px)] leading-[1.1] font-extrabold">
            {totalTopics} Topics Every
            <br />
            <span className="text-react">Full-Stack Dev</span> Must Know
          </h1>
          <p className="mx-auto mb-7 max-w-[520px] text-[15px] leading-[1.6] text-app-muted">
            JavaScript, TypeScript, HTML/CSS, Browser APIs, React, Next.js, Node.js, Laravel,
            testing, performance, API, and core engineering topics in one responsive guide.
          </p>
          <div className="flex flex-wrap justify-center gap-[10px]">
            {stackPills.map((pill) => (
              <Pill key={pill.key} className={pill.className}>
                &#11041; {pill.label}
              </Pill>
            ))}
          </div>
        </div>
      </header>

      <StatsBar />
      <Legend />
      <Navbar />

      <main className="mx-auto w-full max-w-[1400px] px-4 py-6 sm:px-5 sm:py-8">
        <Outlet />
      </main>

      <footer className="border-t border-app-border px-5 py-8 text-center font-mono text-[12px] text-app-muted sm:px-8">
        <p className="m-0">{totalTopics} interview topics for full-stack developers.</p>
        <p className="mt-3 mb-0">
          Copyright &copy; {currentYear}{' '}
          <a
            href="https://arrimon-portfolio.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-react transition-colors duration-300 hover:text-app-text"
          >
            arrimon
          </a>
        </p>
      </footer>

      <Modal />
    </div>
  )
}

export default Layout

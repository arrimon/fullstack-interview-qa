import { Suspense, lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { TopicModalProvider } from './context/TopicModalContext'

const AllTopicsPage = lazy(() => import('./pages/AllTopicsPage'))
const TopicsLaravel = lazy(() => import('./features/Laravel/pages/TopicsLaravel'))
const TopicsNode = lazy(() => import('./features/Node/pages/TopicsNode'))
const TopicsNext = lazy(() => import('./features/Next/pages/TopicsNext'))
const TopicsReact = lazy(() => import('./features/React/pages/TopicsReact'))
const TopicsGeneral = lazy(() => import('./features/General/pages/TopicsGeneral'))

function PageLoader() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center px-6 py-12">
      <div className="rounded-full border border-app-border bg-app-surface px-5 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-app-muted">
        Loading topics
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <TopicModalProvider>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<AllTopicsPage />} />
              <Route path="/laravel" element={<TopicsLaravel />} />
              <Route path="/node" element={<TopicsNode />} />
              <Route path="/next" element={<TopicsNext />} />
              <Route path="/react" element={<TopicsReact />} />
              <Route path="/general" element={<TopicsGeneral />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Suspense>
      </TopicModalProvider>
    </BrowserRouter>
  )
}

export default App

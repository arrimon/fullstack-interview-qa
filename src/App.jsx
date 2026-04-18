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
const TopicsJavaScript = lazy(() => import('./features/JavaScript/pages/TopicsJavaScript'))
const TopicsTypeScript = lazy(() => import('./features/TypeScript/pages/TopicsTypeScript'))
const TopicsHtmlCss = lazy(() => import('./features/HtmlCss/pages/TopicsHtmlCss'))
const TopicsBrowser = lazy(() => import('./features/Browser/pages/TopicsBrowser'))
const TopicsPerformance = lazy(() => import('./features/Performance/pages/TopicsPerformance'))
const TopicsDevTools = lazy(() => import('./features/DevTools/pages/TopicsDevTools'))
const TopicsTesting = lazy(() => import('./features/Testing/pages/TopicsTesting'))
const TopicsApi = lazy(() => import('./features/Api/pages/TopicsApi'))
const TopicDetail = lazy(() => import('./pages/TopicDetail'))

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
              <Route path="/javascript" element={<TopicsJavaScript />} />
              <Route path="/typescript" element={<TopicsTypeScript />} />
              <Route path="/html-css" element={<TopicsHtmlCss />} />
              <Route path="/browser" element={<TopicsBrowser />} />
              <Route path="/performance" element={<TopicsPerformance />} />
              <Route path="/devtools" element={<TopicsDevTools />} />
              <Route path="/testing" element={<TopicsTesting />} />
              <Route path="/api" element={<TopicsApi />} />
              <Route path="/topic/:tag/:slug" element={<TopicDetail />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Suspense>
      </TopicModalProvider>
    </BrowserRouter>
  )
}

export default App

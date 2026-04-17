import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AllTopicsPage from './pages/AllTopicsPage'
import TopicsGeneral from './features/General/pages/TopicsGeneral'
import TopicsLaravel from './features/Laravel/pages/TopicsLaravel'
import TopicsNext from './features/Next/pages/TopicsNext'
import TopicsNode from './features/Node/pages/TopicsNode'
import TopicsReact from './features/React/pages/TopicsReact'
import { TopicModalProvider } from './context/TopicModalContext'

function App() {
  return (
    <BrowserRouter>
      <TopicModalProvider>
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
      </TopicModalProvider>
    </BrowserRouter>
  )
}

export default App

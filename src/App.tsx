import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react';

// const InitialPage = lazy(() => import('./pages/Loading/InitialPage'));
const Home = lazy(() => import('./pages/Home/Home'));
const MyWorks = lazy(() => import('./pages/MyWorks/MyWork'));

export default function App() {
  return (
    <main>
      <BrowserRouter>

        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/MyWorks" element={<MyWorks />} />
          </Routes>
          </Suspense>
      </BrowserRouter>
    </main>
  )
}
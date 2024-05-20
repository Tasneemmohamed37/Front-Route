import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/main layout/MainLayout'
import Home from './components/home/Home'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import NotFound from './pages/notFound/NotFound'


export default function App() {
  
  const routes = createBrowserRouter([
    {path: "/", element: <MainLayout />, children: [
      {index: true, element: <Home />},
      {path:"home", element: <Home />},
      {path:"about", element: <About />},
      {path:"portfolio", element: <Portfolio />},
      {path:"contact", element: <Contact />},
    ]
    },
    { path: "*", element: <NotFound /> },
  ]);
  
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}


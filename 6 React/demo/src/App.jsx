import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import MainLayout from './components/main layout/MainLayout'
import Trending from './pages/trending/Trending'
import Login from './pages/login/Login'
import NotFound from './pages/not found/NotFound'
import { BrowserRouter, Navigate, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'

function App() {

  const [data, setData] = useState([
    {
      id: 1,
      name: 'samsung A11',
      category: 'mobile',
      imageUrl: 'http://localhost:5173/src/imgs/1.avif',
      price: 2100,
      description: 'lllllllllllllllll lllllllllll lllllllll'
    },
    {
      id: 2,
      name: 'samsung A22',
      category: 'mobile',
      imageUrl: 'http://localhost:5173/src/imgs/2.avif',
      price: 2100,
      description: 'lllllllllllllllll lllllllllll lllllllll'
    },
    {
      id: 3,
      name: 'samsung A33',
      category: 'mobile',
      imageUrl: 'http://localhost:5173/src/imgs/3.avif',
      price: 2100,
      description: 'lllllllllllllllll lllllllllll lllllllll'
    },
    {
      id: 4,
      name: 'samsung A44',
      category: 'mobile',
      imageUrl: 'http://localhost:5173/src/imgs/4.avif',
      price: 2100,
      description: 'lllllllllllllllll lllllllllll lllllllll'
    }
        ]);

  function deleteProductCard(index){
    const newData = [...data]; //best practice to declare new var and delete from it
    newData.splice(index, 1);
    setData(newData);
  }

  const routes = createBrowserRouter([
    {path: "/", element: <MainLayout />, children: [
        {index: true, element: <Home />},
        {path:"home", element: <Home />},
        {path: "/trending", element: <Trending />, children: [
            {index: true, element: <Navigate replace to={'movies'}/> },
            {path: "movies", element: <h2 className="mt-20">movies</h2>},
            { path: "people", element: <h2 className="mt-20">People</h2> },
            { path: "tv", element: <h2 className="mt-20">Tv</h2> },
          ],
        }
      ]
    },
    { path: "login", element: <Login /> },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )


    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>

            <Route index element={<Home/>}/>
            <Route path='home' element={<Home/>}/>

            <Route path='trending' element={<Trending/>}>
                <Route index element={<h3>movies</h3>}/>
                <Route path='movies' element={<h3>movies</h3>}/>
                <Route path='people' element={<h3>people</h3>}/>
                <Route path='tv' element={<h3>tv</h3>}/>
            </Route>

        </Route>
        <Route path='login' element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter> */}
}

export default App

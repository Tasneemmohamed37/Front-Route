import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card/Card'
import Loading from './components/loading/Loading'

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

  return (
    <>
    {/* <Loading/> */}
    <div className="max-w-screen-xl mx-auto">
      <div className="container mx-auto flex justify-evenly py-8">
        {data.map((product, i)=>{
          return <Card productObject={product} deleteFn={deleteProductCard} index={i}/>
        })}
      </div>
    </div>
    </>
  )
}

export default App

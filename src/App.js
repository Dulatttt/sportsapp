import { Route, Routes } from 'react-router-dom';
import './assets/style/style.css';
import Categories from './pages/Categories';
import Category from './pages/Category';
import Detail from './pages/Detail';
import Home from './pages/Home';

function App() {
  return(
    <div>
     
    <main>
    
    <Routes>
      <Route path="/" element={<Home/>}></Route>
   
      <Route path="/categories" element={<Categories/>}></Route>
      <Route path="category" element={<Category/>}></Route>
      <Route path="/post/:id" element={<Detail />} />

    </Routes>
 
 
    
    </main>
    </div>
   
  )

  
}

export default App;

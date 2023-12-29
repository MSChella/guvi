import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import MainPageCard from './components/Main Page/MainPageCard';
import Header from './components/Header/Header';
import { useState } from 'react';

function App() {

  const [products, setProducts] = useState(["", "", "", ""]);
  return <>
    (
    <div className="App">
      <Navigation />
      <Header />
      <section className='py-5'>

        {products.map((product, index) => (
          <MainPageCard key={`product-${index}`} />

        ))}
      </section>

    </div>)

  </>

}

export default App;

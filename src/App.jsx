import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import MainPageCard from './components/Main Page/MainPageCard';
import Header from './components/Header/Header';
import { useState } from 'react';

function App() {
  const [cartQuantity, setCartQuantity] = useState(0);

  const updateCartQuantity = (newQuantity) => {
    setCartQuantity(newQuantity);
  };

  return <>
    (
    <div className="App">
      <Navigation cartQuantity={cartQuantity} />
      <Header />


      <section className="py-5">
        <MainPageCard updateCartQuantity={updateCartQuantity} />
      </section>


    </div>)

  </>

}

export default App;

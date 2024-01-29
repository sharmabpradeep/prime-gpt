import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer';
import Body from './components/Body';

function App() {
  return (
    <div className="text-3xl">
      <Header/>
      <h1>Welcome to Prime GPT</h1>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;

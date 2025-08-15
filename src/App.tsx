// import { useState } from 'react'
import CountrySelector from './components/CountrySelector'
import InputCurrency from './components/InputCurrency'
import './App.css'

function App() {
  const today = new Date();
  const formatteDate = today.toLocaleDateString('en-GB')

  return (
    <main className='containerCard'>
      <h1>Currency Converter</h1>
      <CountrySelector />
      <InputCurrency />
      <footer>All these prices are set on day {formatteDate}</footer>
    </main>
  )
}

export default App

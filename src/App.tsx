import CountrySelector from './components/CountrySelector'
import './App.css'


function App() {
  const today = new Date();
  const formatteDate = today.toLocaleDateString('en-GB')

  return (
    <main className='containerCard'>
      <h1>Currency Converter</h1>
      <CountrySelector  />
      <footer>All these prices are set on day {formatteDate}</footer>
    </main>
  )
}

export default App

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './routes/HomePage'
import AddCard from './routes/AddCard'
import Header from './components/Header/Header'
import './App.css'

const App = () => {
  return (
    <div className="appWrapper">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addcard" element={<AddCard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

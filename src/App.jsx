
import { Route, Router, Routes } from "react-router-dom"
import FirstPage from "./components/FirstPage"
import SecondPage from "./components/SecondPage"


function App() {
  
  return (
     <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/select" element={<SecondPage />} />
      </Routes>
    </Router>
  )
}

export default App

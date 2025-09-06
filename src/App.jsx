import { Route, Routes } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/select/:type" element={<SecondPage />} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/select" element={<SecondPage />} />
    </Routes>
  );
}

export default App;

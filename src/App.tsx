import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./page/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

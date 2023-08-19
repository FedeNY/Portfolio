import "./App.css";
import Principal from "./page/Principal";
import Header from "./components/Header";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import DetailProyect from "./page/DetailProyect";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/detail" element={<DetailProyect />} />
        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/main";
import { Succes } from "./pages/succes";
import { IndividualCommandView } from "./pages/editorPage/individualCommandView";
import { ListCommandView } from "./pages/editorPage/listCommandPage";

function App() {
  return (
    <BrowserRouter>
      {/* Para autentificacion o envolver estados */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ListCommandView />} />
        <Route path="/edit" element={<IndividualCommandView />} />
        <Route path="/success" element={<Succes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

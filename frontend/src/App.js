import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Succes } from "./pages/succes";
import { IndividualCommandView } from "./pages/editorPage/individualCommandView";
import { ListCommandView } from "./pages/editorPage/listCommandPage";
import Home from "./pages/uploadPage/main";
import { EditorConfig } from "./pages/config/editorConfig";
import { ListRutinaView } from "./pages/listRutinaPage/listRutinaView";
import { EstresPage } from "./pages/estresPage/estresPage";

function App() {
  return (
    <BrowserRouter>
      {/* Para autentificacion o envolver estados */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<EditorConfig />}>
          <Route path="/list" element={<ListCommandView />} />
        </Route>
        <Route path="/edit" element={<IndividualCommandView />} />
        <Route path="/rutinas" element={<ListRutinaView />} />
        <Route path="/estres" element={<EstresPage />} />
        <Route path="/success" element={<Succes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

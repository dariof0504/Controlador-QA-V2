import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IndividualCommandView } from "./pages/editorPage/individualCommandView";
import { ListCommandView } from "./pages/editorPage/listCommandPage";
import { CreateNewRutina } from './pages/uploadPage/main'
import { EditorConfig } from "./pages/config/editorConfig";
import { ListRutinaView } from "./pages/listRutinaPage/listRutinaView";
import { SessionPage } from "./pages/sessionCreatePage/sessionPage";

function App() {
  return (
    <BrowserRouter>
      {/* Para autentificacion o envolver estados */}

      <Routes>
        <Route path="/" element={<CreateNewRutina />} />
        <Route element={<EditorConfig />}>
          <Route path="/list" element={<ListCommandView />} />
        </Route>
        <Route path="/edit" element={<IndividualCommandView />} />
        <Route path="/rutinas" element={<ListRutinaView />} />
        <Route path="/session" element={<SessionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

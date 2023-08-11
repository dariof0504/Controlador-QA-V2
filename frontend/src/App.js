import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IndividualCommandView } from "./pages/editorPage/individualCommandView";
import { ListCommandView } from "./pages/editorPage/listCommandPage";
import { CreateNewRutina } from './pages/uploadPage/main'
import { EditorConfig } from "./pages/config/editorConfig";
import { ListRutinaView } from "./pages/listRutinaPage/listRutinaView";
import { SessionPage } from "./pages/sessionCreatePage/sessionPage";
import { HomePage } from "./pages/Home/homePage";
import { ListSessionsPage } from "./pages/sessionCreatePage/listSessionPage";

function App() {
  return (
    <BrowserRouter>
      {/* Para autentificacion o envolver estados */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createRutina" element={<CreateNewRutina />} />
        <Route element={<EditorConfig />}>
          <Route path="/editRutina" element={<ListCommandView />} />
        </Route>
        <Route path="/editCommand" element={<IndividualCommandView />} />
        <Route path="/listRutinas" element={<ListRutinaView />} />
        <Route path="/editSession" element={<SessionPage />} />
        <Route path="/listSession" element={<ListSessionsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import BrandsPage from "./pages/BrandsPage";
import ModelsPage from "./pages/ModelsPage";

function App() {
    return (
        <div className="w-100 min-vh-100 d-flex flex-column">
            <Routes>
                <Route path="/" element={<BrandsPage />} />
                <Route path="/models/:id" element={<ModelsPage />} />
            </Routes>
        </div>

    );
}

export default App;

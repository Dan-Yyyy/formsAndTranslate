import React, { Suspense } from "react";
import { BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./utils/i18n";
import './App.css';

import { Header } from "./components/Header/Header";
import { FormicPage } from "./pages/FormicPage";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading profile...</h1>}>
        <BrowserRouter>
            <Header />
            <Routes>
              <Route path="formicPage" element={<FormicPage />}/>
            </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;

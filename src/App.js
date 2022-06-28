import React, { Suspense } from "react";
import { BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

import Wrapper from "./components/Wrapper/Wrapper";
import { Header } from "./components/Header/Header";
import { FormicPage } from "./pages/FormicPage";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading profile...</h1>}>
        <BrowserRouter>
            <Header />
            <Wrapper>
              <Routes>
                <Route path="formicPage" element={<FormicPage />}/>
              </Routes>
            </Wrapper>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;

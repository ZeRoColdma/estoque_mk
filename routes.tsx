import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginPage } from "./src/View/LoginPage/LoginPage";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

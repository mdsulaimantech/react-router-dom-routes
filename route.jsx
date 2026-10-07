<!-- Step 1: type the command below -->

npm install react-router-dom

------------------------------------------------------------>

<!-------------------- Step 2: Go To main.jsx -------------------->

import { BrowserRouter } from "react-router-dom";

<StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</StrictMode>

------------------------------------------------------------>

<!-------------------- Step 3: Go to App.jsx -------------------->

import RootLayout from "./components/layouts/RootLayout";
import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="*" element={<Error />} />
  </Route>
</Routes>

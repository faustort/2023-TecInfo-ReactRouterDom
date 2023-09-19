import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculadora from "../components/Calculadora";
import ContatoScreen from "../screens/ContatoScreen";
import HomeScreen from "../screens/HomeScreen";

export default function RoutesRoot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeScreen />} path="/">
          <Route element={<Calculadora />} path="/calculadora" />
          <Route element={<ContatoScreen />} path="/contato" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

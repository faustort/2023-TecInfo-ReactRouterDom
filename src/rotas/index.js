import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculadora from "../components/Calculadora";
import ContatoScreen from "../screens/ContatoScreen";
import HomeScreen from "../screens/HomeScreen";
import Body from "../components/Body";

export default function RoutesRoot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Body />} path="/">
          <Route element={<Calculadora />} path="/calculadora" />
          <Route element={<ContatoScreen />} path="/contato" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

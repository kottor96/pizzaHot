import { Route,Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import './app.css'
import ModifPizza from "./pages/ModifPizza";
import Merci from "./pages/Merci";
function App() {

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/modif/:recup" element={<ModifPizza/>}/>
          <Route path="/merci" element={<Merci/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

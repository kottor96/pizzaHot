import { Route,Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import './app.css'
import ModifPizza from "./pages/ModifPizza";

function App() {

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/modif/:index" element={<ModifPizza/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

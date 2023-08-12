import { Fragment } from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/HomePage"


function App() {
  return (
      <Fragment>
        {<BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
        </BrowserRouter>}
      </Fragment>
  )
}

export default App

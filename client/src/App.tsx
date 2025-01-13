import { Route, Routes } from "react-router"
import LogInPage from "./modules/pages/LogInPage"
import Layout from "./modules/layout/Layout"
import HomePage from "./modules/pages/HomePage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LogInPage />}/>
        <Route path="/signup" element={<LogInPage />}/>

        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

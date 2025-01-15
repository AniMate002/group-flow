import { Navigate, Route, Routes } from "react-router"
import LogInPage from "./modules/pages/LogInPage"
import Layout from "./modules/layout/Layout"
import HomePage from "./modules/pages/HomePage"
import SignupPage from "./modules/pages/SignupPage"
import { getMe } from "./services/auth.service"
import { useQuery } from '@tanstack/react-query'
import ExplorePage from "./modules/pages/ExplorePage"



function App() {

  const {data: authUser} = useQuery({
    queryKey: ["authUser"],
    queryFn: () => getMe()
  })

  // if(isError){
  //   return <h1>{error.message}</h1>
  // }

  return (
    <>
        <Routes>
          <Route path="/login" element={authUser ? <Navigate to={"/"}/> : <LogInPage />}/>
          <Route path="/signup" element={authUser ? <Navigate to={"/"}/> : <SignupPage />}/>
          {/* <Route path="/login" element={<LogInPage />}/> */}
          {/* <Route path="/signup" element={<SignupPage />}/> */}

          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}/>
            <Route path="/explore" element={<ExplorePage />} />
          </Route>
        </Routes>
    </>
  )
}

export default App

import { Navigate, Route, Routes } from "react-router"
import LogInPage from "./modules/pages/LogInPage"
import Layout from "./modules/layout/Layout"
import HomePage from "./modules/pages/HomePage"
import SignupPage from "./modules/pages/SignupPage"
import { getMe } from "./services/auth.service"
import { useQuery } from '@tanstack/react-query'
import ExplorePage from "./modules/pages/ExplorePage"
import { ITeam } from "./types/types"
import { Keys } from "./utils/query-keys"
import { getAllTeamsService } from "./services/team.services"
import DynamicExplorePage from "./modules/pages/DynamicExplorePage"



function App() {

  // GETTING CURRENT USER
  const {data: authUser} = useQuery({
    queryKey: [Keys.authUser],
    queryFn: () => getMe()
  })

  // GETTING ALL TEAMS
  const { data: allTeams } = useQuery<Array<ITeam>>({
    queryKey: [Keys.allTeams],
    queryFn: () => getAllTeamsService(),
  })
  console.log("ALL TEAMS:", allTeams);

  


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
            <Route path="/explore/:projectType" element={<DynamicExplorePage />}/>
          </Route>
        </Routes>
    </>
  )
}

export default App

import Navbar from "./components/Navbar.tsx"
import Home from "./pages/Home.tsx"
import Project from "./pages/Project.tsx"
import RecentWork from "./pages/RecentWork.tsx"
import Reviews from "./pages/Reviews.tsx"
import Supplies from "./pages/Supplies.tsx"

const App = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <Navbar/>
      <Home/>
      <Project/>
      <Supplies/>
      <RecentWork/>
      <Reviews/>
    </div>
  )
}

export default App
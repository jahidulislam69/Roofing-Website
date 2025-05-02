import Navbar from "./components/Navbar.tsx"
import Home from "./pages/Home.tsx"
import Project from "./pages/Project.tsx"
import Supplies from "./pages/Supplies.tsx"

const App = () => {
  return (
    <div className="relative w-full h-full overflow-x-hidden">
      <Navbar/>
      <Home/>
      <Project/>
      <Supplies/>
    </div>
  )
}

export default App
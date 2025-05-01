import Navbar from "./components/Navbar.tsx"
import Home from "./pages/Home.tsx"
import Project from "./pages/Project.tsx"
import Supplies from "./pages/Supplies.tsx"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Project/>
      <Supplies/>
    </div>
  )
}

export default App
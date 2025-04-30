import Navbar from "./components/Navbar.tsx"
import Home from "./pages/Home.tsx"
import Project from "./pages/Project.tsx"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Project/>
    </div>
  )
}

export default App
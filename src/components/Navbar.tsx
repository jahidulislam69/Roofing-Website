import { Button } from "./ui/button"
import {images} from '../assets/assets.ts'

const Navbar = () => {
  return (
    <nav className="flex  items-center justify-between p-4 bg-white">
        <img className="w-[10rem]" src={images.logo} alt="" />

        <ul className="flex  items-center justify-between gap-5 cursor-pointer">
            <li className="text-l hover:text-gray-700 hidden md:block">Home</li>
            <li className="text-l hover:text-gray-700 hidden md:block">About Us</li>
            <li className="text-l hover:text-gray-700 hidden md:block">Project</li>
            <li className="text-l hover:text-gray-700 hidden md:block">Services</li>
            <li className="text-l hover:text-gray-700 hidden md:block">Contact Us</li>
            <Button variant="customRedWhite" className="text-l text-white">Call us: 956(326)-56</Button>
        </ul>
    </nav>
  )
}

export default Navbar
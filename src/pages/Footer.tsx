import { images } from "@/assets/assets";
import ContactForm from "@/components/ContactForm";
import { Facebook, Instagram, X, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer min:h-screen w-screen md:mt-50 ">
      <div className="flex w-full md:flex-row flex-col justify-center items-center">
        <div className="flex flex-col md:w-[45%] w-full md:mx-50 mx-200 text-white gap-10 mt-30 items-center justify-center">
          <img src={images.logo} alt="" width={300} />
          <ul className="mt-20">
            <h5>Working Hours</h5>
            <li className="text-gray-300 mt-5">Monday To Thursday 10:00Am to 4:00PM</li>
            <li className="text-gray-300">Friday: Close</li>
          </ul>
          <ul className="flex flex-col gap-5 mt-20">
            <h5>Our Services</h5>
            <ul className="flex gap-5 capitalize ">
              <ul>
                <li className="text-gray-300">Damage Roofing</li>
                <li className="text-gray-300">Siding Corner</li>
                <li className="text-gray-300">Roof Repair</li>
              </ul>
              <ul>
                <li className="text-gray-300">Damage Roofing</li>
                <li className="text-gray-300">Siding Corner</li>
                <li className="text-gray-300">Roof Repair</li>
              </ul>
            </ul>

            <ul className="flex gap-5 mt-30">
              <div className="h-10 w-10 rounded-lg bg-gray-400 text-center">
              <X  className="h-10 w-10 p-1"/>
              </div>
              <div className="h-10 w-10 rounded-lg bg-gray-400 text-center">
              <Youtube  className="h-10 w-10 p-1"/>
              </div>
              <div className="h-10 w-10 rounded-lg bg-gray-400 text-center">
              <Facebook  className="h-10 w-10 p-1"/>
              </div>
              <div className="h-10 w-10 rounded-lg bg-gray-400 text-center">
              <Instagram  className="h-10 w-10 p-1"/>
              </div>
              
            </ul>
          </ul>
        </div>
        <div className="flex flex-col md:w-[45%] w-full md:mx-50 text-gray-600 gap-10 mt-20 justify-center items-center">
          <ContactForm/>

        </div>
      </div>

      <div className="w-screen container mx-auto text-center p-5">
        <h1 className="text-white font-semibold">© Copyright Shouvo 2025. All Right Reserved.</h1>
      </div>
    </footer>
  );
};

export default Footer;

import { images } from "@/assets/assets"
import SmallCart from "@/components/SmallCart"

const Supplies = () => {
  return (
    <>
    <div className="w-screen min-h-screen mt-10 relative z-1">
        <img className="w-full relative hidden md:block" src={images.Rect} alt="" />
        <div className="container mx-auto p-20">
            <div className="supplie flex flex-col md:flex-row justify-center items-center gap-10 absolute inset-0 z-5 bg-blue-950 md:bg-transparent">
                <div className="w-2/4 flex items-center justify-center">
                    <img src={images.Supplie} alt="" />
                </div>
                <div className="w-2/4 flex items-start justify-center flex-col text-white">
                    <h6 className="md:text-m">Trusted Best Company</h6>
                    <h4 className="md:text-5xl text-3xl md:w-[24rem] ">We help you build on your Past & The Future.</h4>
                    <p className="md:text-s text-m text-gray-400 mt-5 md:w-[35rem]">Mintech has been helping organizations throughout the World to manage their IT with our unique approach to technology management and consultancyt the World to manage their IT with our unigement and consultancy.</p>
                    <button className="md:bg-white bg-blue-900 w-20 md:w-40 p-2 md:mt-10 mt-2 md:text-black text-white text-[.5rem] md:text-[1rem]">Get Free Quote</button>
                </div>
            </div>
            <div className="flex md:flex-row flex-col z-11 justify-center items-center mb-20 gap-10 absolute inset-0 md:top-200 top-240">
            <SmallCart/>
            <SmallCart/>
            </div>
    
        </div>
      
    </div>
    <div className="md:mt-18 mt-25 container mx-auto flex flex-col justify-center items-center text-center md:p-10 p-40">
            <h1 className="text-5xl font-semibold text-center">Our Supplieres</h1>
            <div className="flex flex-wrap justify-center items-center gap-8 md:mt-16 mt-20">
                {[1,2,3,4,5,6,7,8,9].map((i) => (
                <img key={i} src={images.CompanySeal} alt="" />
                ))}
            </div>

    </div>
    </>
  )
}

export default Supplies
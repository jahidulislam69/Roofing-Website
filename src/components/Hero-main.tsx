import {images} from "../assets/assets.ts"

const Hero = () => {
  return (
    <div className="h-[39vh] w-[45rem] md:w-screen md:h-screen relative">
        <img className="absolute inset-0 w-full h-full object-cover hero-image md:w-full md:h-full" src={images.hero} alt="" />
        <div className="text-white absolute top-20 left-20 md:top-60 md:left-90 w-[40vw]">
            <h1 className="text-[1rem] md:text-[4rem] font-medium md:leading-[4rem] ">Providing Reliable & Trusted Residential Roof Replacement & Repairs</h1>
            <button className="bg-white w-20 md:w-40 p-2 md:mt-10 mt-2 text-black text-[.5rem] md:text-[1rem]">Get Free Quote</button>
        </div>
    </div>
  )
}

export default Hero
import { images, WorkData } from "@/assets/assets";
import Work from "@/components/Work";

const RecentWork = () => {
  return (
    <div className="w-screen md:min-h-[150vh] min-h-[300vh] relative text-black mt-5">
      <div className="absolute z-11 clip-1 h-[100vh] md:min-h-2/3 w-full bg-yellow-50 text-black flex flex-col items-center justify-center p-10 md:p-40">
        <h5 className="z-5 top-20 text-center md:text-[.8rem] text-bg-gray-300 capitalize">
          Explore Recent Works
        </h5>
        <h3 className="text-4xl font-semibold text-center">Explore our last projects</h3>
        <h3 className="text-4xl font-semibold text-center">and recent works</h3>
        <div className="grid md:grid-cols-4 grid-cols-2 p-5 gap-5 items-center justify-center mt-4">
          {WorkData.map((item, index) => (
            <Work
              key={index}
              image={item.image}
              header={item.header}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <div className="clip-2 w-full md:min-h-2/3 h-[125vh] bg-green-600 absolute top-160 styled-clip-2 text-white">
        <img src={images.RectImage} alt="" className="w-full h-auto relative hidden md:block" />
        <div className="flex flex-col items-center justify-center absolute inset-0 z-13">
          <h1 className="md:text-6xl text-4xl text-center md:w-[38%] font-semibold">Leading Way In Roofing and Repair Construction!</h1>
          <h6 className="text-[1rem] p-4 text-center md:w-[38%]">
            Roofing whenan unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has Roofing whenan unknow near
            printer a took a galley of type and scrambled.
          </h6>
          <div  className="grid md:grid-cols-4 grid-cols-2 justify-center items-center gap-4 mt-6">
            <div className=" p-6 text-center">
              <h1 className="text-6xl font-semibold">200+</h1>
              <p className="text-gray-200 p-2 mt-2">Roofing whena</p>
            </div>
            <div className=" p-6 text-center">
              <h1 className="text-6xl font-semibold">50+</h1>
              <p className="text-gray-200 p-2 mt-2">Roofing whena</p>
            </div>
            <div className="p-6 text-center">
              <h1 className="text-6xl font-semibold">200+</h1>
              <p className="text-gray-200 p-2 mt-2">Roofing whena</p>
            </div>
            <div className="p-6 text-center">
              <h1 className="text-6xl font-semibold">540+</h1>
              <p className="text-gray-200 p-2 mt-2">Roofing whena</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;

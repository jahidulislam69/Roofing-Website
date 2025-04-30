import Card from "@/components/Card";
import { CardData, images } from "../assets/assets.ts"; // Import CardData
import { Button } from "@/components/ui/button.tsx";

const Project = () => {
  return (
    <div className="h-[50vh] w-full mt-10 text items-center relative ">
      <h1 className="mx-auto text-center text-4xl md:w-[20vw]">
        We'r Providing Quality Roofing Services
      </h1>
      <div className="flex flex-col md:flex-row gap-18 justify-center items-center mt-15">
        {CardData.map(
          (
            card,
            index // Map over CardData
          ) => (
            <Card
              key={index}
              image={card.image}
              header={card.header}
              description={card.description}
              buttonText={card.buttonText}
            />
          )
        )}
      </div>

      <div className="w-screen flex flex-col md:flex-row container mx-auto mt-20">
        <div className="md:w-2/4 flex justify-center items-center">
          <div className="md:w-[50%] p-20 md:p-0">
            <h6 className="text-md text-gray-600">About us</h6>
            <h3 className="text-5xl pt-2">We’r commited to provide Roofing services</h3>
            <p className="mt-4 mb-4 text-gray-700">
              Roofing whenan unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has Roofing whenan unknow near
              printer a took a galley of type and scrambled.
            </p>
            <Button variant="customRedWhite" className="text-l text-white">
              More About Us
            </Button>
          </div>
        </div>

        <div className="md:w-2/4 mt-10 flex justify-center items-center">
          <img className="w-[70%]" src={images.about} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Project;

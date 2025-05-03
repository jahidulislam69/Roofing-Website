import { BlogdData, ReviewData } from "@/assets/assets";
import Card from "@/components/Card";
import ReviewCard from "@/components/Review";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Reviews = () => {
  return (
    <div className="relative md:top-30 w-screem md:min:h-screen h-screen -top-230">
      <div className="p-2 mx-auto text-center md:w-[35%]">
        <h1 className="tex-[.8rem]">WORKING PEOPLE</h1>
        <h1 className="md:text-6xl text-4xl font-semibold">We always work with energetic team</h1>
      </div>
      <Carousel className="w-[60vw] mx-auto mt-10">
        <CarouselContent>
          {ReviewData.map((item, index) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
              <ReviewCard 
                name={item.name}
                review={item.review}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="p-2 mx-auto mt-5">
        <h1 className="text-[.8rem] text-center uppercase">what's new</h1>
        <h1 className="md:text-6xl text-4xl font-semibold text-center capitalize">Our latest news & blog</h1>
        <div className="flex flex-col md:flex-row gap-14 w-full justify-center items-center mt-20">
          {BlogdData.map((blog,index)=>(
          <Card
          key={1+index}
          image={blog.image}
          header={blog.header}
          description={blog.description}
          buttonText={blog.buttonText}

          />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

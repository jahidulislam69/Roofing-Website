
interface WorkProps {
    image: string;
    header: string;
    description: string;
  }
  

const Work: React.FC<WorkProps> = ({image, header, description}) => {
  return (
    <div className="flex flex-col items-start ">
    <img src={image} alt="" className="w-full h-auto" />
    <h6 className="text-[.8rem] md:text-[1rem]">{header}</h6>
    <h3 className="text-xl md:text-2xl font-semibold">{description}</h3>
  </div>
  )
}

export default Work
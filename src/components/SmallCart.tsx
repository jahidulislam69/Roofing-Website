import { images } from "@/assets/assets"

const SmallCart = () => {
  return (
    <div className="flex md:w-[32rem] md:h-fit w-[23rem] border-1 rounded-lg border-gray-300 md:p-7 p-4 bg-white">
        <img className="size-fit mr-3" src={images.innovation} alt="" />
        <div className="flex flex-col gap-2">
            <h5 className="font-bold md:text-[1.2rem] text-[15px]">Build Roof Standard</h5>
            <h6 className="text-[.9rem]">Roofing whenan unknown printer took a galley of type and scrambled it to make a type specim.</h6>

        </div>
    </div>
  )
}

export default SmallCart
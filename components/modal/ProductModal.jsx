import { IoCloseSharp } from "react-icons/io5";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ProductData } from "@/data/product";

//swiper import here
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const ProductModal = ({ setOpenModal }) => {
  return (
    <>
      <div className="fixed z-10 left-0 top-0 w-[100%]  bg-white bg-opacity-30 backdrop-blur-[16px] product-modal">
        <div className="flex justify-between h-[100vh]">
          <Swiper slidesPerView={3} direction="vertical" spaceBetween={40}>
            {ProductData.data.map((elem, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={elem.src}
                  alt="details"
                  width={200}
                  height={200}
                  className={`rounded-md shadow-sm h-full w-auto `}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center items-center h-[100vh] w-auto gap-4">
            <button className="p-5 bg-white rounded-lg shadow-md">
              <BsChevronLeft size={35} />
            </button>
            <Image
              src={ProductData.data.map((elem) => elem.src)[1]}
              alt="details"
              width={600}
              height={600}
              className="rounded-md shadow-md h-[80%] w-auto"
            />
            <button className="p-5 bg-white rounded-lg shadow-md ">
              <BsChevronRight size={35} />
            </button>
          </div>
          <IoCloseSharp
            size={25}
            className="w-9 h-9 bg-white border border-black p-2 rounded-md m-2 shadow-sm relative z-40 cursor-pointer"
            onClick={() => {
              setOpenModal(false);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ProductModal;

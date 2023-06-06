import Image from "next/image";
import { ProductData } from "@/data/product";
import ProductModal from "../modal/ProductModal";

const DetailImage = ({ setOpenModal, openModal }) => {
  return (
    <>
      <div className="hidden lg:grid grid-cols-2 gap-4">
        {ProductData.data.map((elem, index) => (
          <button
            key={index}
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <Image src={elem.src} alt={elem.src} width={600} height={800} />
          </button>
        ))}
      </div>
      {openModal && <ProductModal setOpenModal={setOpenModal} />}
    </>
  );
};

export default DetailImage;

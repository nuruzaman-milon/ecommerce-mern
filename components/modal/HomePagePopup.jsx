import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";

const HomePagePopup = ({ setIsModalOpen }) => {
  return (
    <div className="fixed z-10 left-0 top-0 h-full w-full overflow-auto flex items-center justify-center backdrop-opacity-50 bg-white/60 ">
      <div className="h-max w-96 lg:w-[28rem] bg-white relative rounded-xl border-4 border-secondary-color">
        <button
          className="btn btn-sm btn-circle absolute right-3 top-[6px]"
          onClick={() => setIsModalOpen(false)}
        >
          <IoCloseSharp size={26} color="gray" />
        </button>
        <div className="text-primary-color text-center mt-9 mb-3 mx-4">
          <Image
            src="/images/modal.png"
            alt="bridal_top"
            width={400}
            height={300}
            className="w-full"
          />
          <div className="px-10">
            <div className="mb-4">
              <p className="text-2xl font-semibold mb-2 mt-4">
                JOIN ON OUR LIST TODAY!
              </p>
              <p className="text-[13px] text-center font-[500]">
                Be the first to know about new products, exclusive collections,
                the latest trends, and more. By Clicking on “Subscribe”, you
                agree to receive our newsletter. You can opt out at any time.
              </p>
            </div>
            <div className="mt-7">
              <form action="" className="flex flex-col gap-2">
                <input
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 outline-gray-300 w-full"
                  placeholder="Enter Your Email"
                  required
                />
                <button
                  type="submit"
                  className="mt-1 px-4 py-2 rounded-lg bg-primary-color text-white transition-colors duration-500 text-sm font-medium hover:bg-primary-hover-color"
                >
                  SUBSCRIBE
                </button>
              </form>
              <label
                onClick={() => setIsModalOpen(false)}
                className="text-xs text-gray-600 cursor-pointer font-medium"
              >
                No, Thanks
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePagePopup;

"use client";
import BookAppointment from "@/components/BookAppointment";
import AllCategoriesCard from "@/components/card/category-card/AllCategoriesCard";
import AllBestSellingCard from "@/components/card/product/bestSelling/AllBestSellingCard";
import AllCards from "@/components/card/youMayLike/AllCards";
import Slider from "@/components/carosel/Slider";
import DeliveryDesktop from "@/components/delivery-partner/deliveryDesktop";
import TinySlider from "@/components/tiny-carosel/TinySlider";

export default function Home() {
  return (
    <div className="container my-4 lg:my-10 flex flex-col gap-y-10 lg:gap-y-16">
      {/* top carosel start */}
      <div className="flex flex-col lg:flex-row gap-x-10 gap-y-4 lg:gap-6">
        <div className="lg:w-[70%] 2xl:w-3/4 z-0">
          <Slider />
        </div>
        <div className="lg:w-[28%] 2xl:w-[23%] z-0">
          <TinySlider />
        </div>
      </div>
      {/* top carosel end */}

      {/* shop by category starts */}
      <div>
        <h1 className="card-title">SHOP BY CATEGORY</h1>
        <AllCategoriesCard />
      </div>
      {/* shop by category end */}

      {/* best selling start */}
      <div>
        <h1 className="card-title">BEST SELLING</h1>
        <AllBestSellingCard />
      </div>
      {/* best selling end */}

      {/* YOU MAY LIKE start */}
      <div>
        <h1 className="card-title">YOU MAY LIKE</h1>
        <AllCards />
      </div>
      {/* YOU MAY LIKE end */}

      {/* BOOK AN APPOINTMENT start */}
      <div>
        <h1 className="card-title">BOOK AN APPOINTMENT</h1>
        <div className="">
          <BookAppointment />
        </div>
      </div>
      {/* BOOK AN APPOINTMENT end */}

      {/* Our Delivery Partner start */}
      <div>
        <h1 className="card-title">OUR DELIVERY PARTNERS</h1>
        <DeliveryDesktop />
      </div>
      {/* Our Delivery Partner end */}
    </div>
  );
}

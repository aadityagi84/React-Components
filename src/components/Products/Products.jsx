import img1 from "../../assets/Products/Women-Ethnic.jpg";
import img2 from "../../assets/Products/Women-Western.jpg";
import img3 from "../../assets/Products/Googles.jpg";
import img4 from "../../assets/Products/Printed-T-Shirt.jpg";
import img5 from "../../assets/Products/Fashion-T-Shirt.jpg";
import { FaStar } from "react-icons/fa";

const Products = () => {
  const ProductsData = [
    {
      id: 1,
      img: img1,
      title: "Women Ethnic",
      rating: 5.0,
      color: "white",
      aosDelay: "0",
    },
    {
      id: 22,
      img: img2,
      title: "Women Western",
      rating: 4.5,
      color: "Red",
      aosDelay: "400",
    },
    {
      id: 2,
      img: img3,
      title: "Googles",
      rating: 4.7,
      color: "brown",
      aosDelay: "800",
    },
    {
      id: 3,
      img: img4,
      title: "Printed T-Shirt",
      rating: 4.4,
      color: "Yellow",
      aosDelay: "1200",
    },
    {
      id: 4,
      img: img5,
      title: "Fashion T-Shirt ",
      rating: 4.5,
      color: "Pink",
      aosDelay: "1600",
    },
  ];

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10 mx-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            quibusdam provident vel. Repellendus quibusdam provident vel.
          </p>
        </div>
        {/* Body Section */}
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card Section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className=" h-[220px]  object-contain  rounded-md"
                />
                <div className="">
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-gray-600 text-sm">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

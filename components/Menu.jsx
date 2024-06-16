"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const menu = [
  {
    img: "/menu/item-1.png",
    title: "Papandayan",
    description:
      "Arabica coffee beans have a sweet and slightly soft taste, similar to caramel. Apart from that, the acidity level of this coffee also tends to be just right (medium and dominant).",
    price: "125k",
  },
  {
    img: "/menu/item-2.png",
    title: "Honduras",
    description:
      "Arabica coffee beans have a distinctive taste with hints of raisins, red current and hazelnuts.",
    price: "130k",
  },
  {
    img: "/menu/item-3.png",
    title: "Bali Kintamani",
    description:
      "Arabica coffee beans tend to taste sweet, fruity, floral, chocolaty, and have a low acidity level.",
    price: "120k",
  },
  {
    img: "/menu/item-4.png",
    title: "Tanzania",
    description:
      "Arabica coffee beans have a complex taste with slightly striking acidity, accompanied by berry notes and a fruity taste. Tanzanian coffees are also known for their juicy, attractive and delicious character.",
    price: "130k",
  },
];

const Menu = () => {
  return (
    <section className="bg-cream relative py-12 xl:py-24" id="menu">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-navy max-w-[570px] mx-auto text-center xl:text-right"
        >
          <h2 className="mb-3 text-center p-10">Our Favorite Beans</h2>
        </motion.div>
        {/* menu grid */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mx-auto"
          style={{
            maxWidth: "1200px",
          }}
        >
          {menu.map((item, index) => (
            <div
              key={index}
              className="max-w-[300px] bg-white shadow-primary mx-auto group border border-gray-200"
            >
              {/* img */}
              <div className="overflow-hidden">
                <Image
                  src={item.img}
                  width={270}
                  height={270}
                  alt=""
                  className="group-hover:scale-110 transition-all duration-300"
                />
              </div>
              {/* title, price, description */}
              <div className="p-4 text-center">
                <Link href="/">
                  <h3 className="font-poppins text-navy mb-2">{item.title}</h3>
                </Link>
                <div className="text-xl font-poppins font-semibold text-red">
                  {item.price}
                </div>
                <br />
                <div className="text-sm font-poppins text-navy">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;

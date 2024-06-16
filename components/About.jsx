"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <section
      className="bg-cream grid grid-cols-1 xl:grid-cols-2 gap-x-{74px] p-10 md:p-12 items-center"
      id="about"
    >
      {/* text */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="text-left px-10"
      >
        <h1 className="mb-9 text-red">
          Why you have to choose Roots Supply ID Coffee & Roastery?
        </h1>
        <p className="mb-8 text-navy">
          Our coffee beans are the best coffee beans grown at an altitude of
          1850m above sea level, our coffee beans are located under eucalyptus
          and pine trees and we use 100% Arabica coffee beans. The coffee beans
          took longer time to ripe, because it's nestled beneath the eucalyptus
          and pinus trees.
        </p>
        <p className="mb-10 text-navy">
          Apart from the fact that the coffee we grow ourselves is premium
          quality coffee, we uphold solidarity and high respect between fellow
          families at Roots Supply ID. Because 30% of coffee characteristics are
          influenced by who roasts it, we always make families feel happy and
          cheerful to produce delicious coffee with unique character!
        </p>
      </motion.div>
      {/* img */}
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Image
          src="/about/img.png"
          width={705}
          height={771}
          alt=""
          className="hidden xl:flex"
        />
      </motion.div>
    </section>
  );
};

export default About;

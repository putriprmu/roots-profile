"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Button } from "./ui/button";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <section
      className="bg-hero bg-no-repeat relative xl:bg-cover xl:h-[1098px] py-40 pb-32 xl:py-0"
      id="home"
    >
      <div className="container mx-auto">
        {/* text & video */}
        <div className="flex items-center xl:h-[960px]">
          {/* text */}
          <div className="w-full xl:max-w-[460px] text-center xl:text-left">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-navy mb-7"
            >
              May your day <br /> be as good <br /> as our coffee
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-navy font-semibold mb-7"
            >
              by: <span className="text-red">Roots Supply ID</span>
            </motion.p>
            <motion.p
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-navy mb-12 max-w-lg mx-auto xl:max-w-none xl:mx-0"
            >
              Nurtured by nature, picked by good hands, processed with details.
              It began with these beautiful cherries, that would later end up in
              a wonderful cup on your hands. Meet our flavourful coffee beans.
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <ScrollLink to="menu" smooth={true}>
                <Button>Let's try!</Button>
              </ScrollLink>
            </motion.div>
          </div>
          {/* video */}
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="hidden xl:flex xl:absolute xl:top-[200px] xl:right-[5%]"
          >
            <iframe
              width="693"
              height="390"
              src="https://www.youtube.com/embed/Ienj1VAI6zo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

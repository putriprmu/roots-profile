"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import ReservationForm from "./ReservationForm";

const Reservation = () => {
  return (
    <section
      className="bg-cream xl:h-[1020px] xl:bg-reservation bg-no-repeat flex flex-col justify-end items-end"
      id="reservation"
    >
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="bg-red w-full xl:max-w-[868px] min-h-[518px] p-8 md:p-14 xl:p-16"
      >
        <h2 className="text-white mb-9 capitalize text-center ">
          Try the best experience at Roots!
        </h2>
        <ReservationForm />
      </motion.div>
    </section>
  );
};

export default Reservation;

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variant";
const MapSection = () => {
    return (
        <motion.div
            variants={fadeIn("top", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className=" hidden sm:block"
        >
            <iframe
                className="w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127364.72900276158!2d122.49549680802131!3d-3.9900117082337907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d98ecde0b6b7183%3A0x1397347f9e562fc7!2sKendari%2C%20Kendari%20City%2C%20South%20East%20Sulawesi!5e0!3m2!1sen!2sid!4v1730160877005!5m2!1sen!2sid"
                width="600"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </motion.div>
    );
};

export default MapSection;

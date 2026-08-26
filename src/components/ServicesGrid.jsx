import React from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import CustumTitle from './CustumTitle';

export default function ServicesGrid({ services = [] }) {
  return (
    <section className="services">
      <div className="services__head">
         <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              >
        <CustumTitle title="AMT African Machinery Technologies Systems engineering SARL  is a company for  focusing on real results" />

        </motion.div>
        
        <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              >
        <p>
          We offer  IT , Data and Procurement Services. 
          We implement Systems-Engineering approaches  and deliver smart  Prototypes  
          We continously  strive for excellence in project management and stay focused on our customer statisfaction
        </p>
        </motion.div>

      </div>
      <div className="services__grid">
        {services.map((s, i) => (
          <motion.div
          key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay:  0.2 }}
                viewport={{ once: true }}
              >
          <ServiceCard key={i} {...s} />
          </motion.div>
        )
        )}
      </div>
    </section>
  );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "../../App.css";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

function SelectActionCard() {
  const { t } = useTranslation();
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <div>
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
        >
          <p>
            <label className='title-text'>AMT</label> 
          </p>
          <h1>{t("socialMedia.bestForYou")}</h1>
        </motion.div>
    </div>
  );
}

export default SelectActionCard;

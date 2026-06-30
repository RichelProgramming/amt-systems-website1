import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import BugReportIcon from "@mui/icons-material/BugReport";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SchemaIcon from "@mui/icons-material/Schema";
import StorageIcon from "@mui/icons-material/Storage";
import InventoryIcon from "@mui/icons-material/Inventory";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const gradientStyle = {
  background: "linear-gradient(90deg,rgb(102, 188, 70),rgb(65, 66, 141),red)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const serviceBlocks = [
  {
    icon: BugReportIcon,
    title: "Prototyping & Reverse Engineering",
    description:
      "Fast product proof-of-concept and hardware validation with modern CAD, 3D printing, and PCB layout prototyping.",
    items: [
      "CAD modelling",
      "3D printing and 3D scanning",
      "HW layout design & PCB prototyping",
    ],
  },
  {
    icon: PhoneAndroidIcon,
    title: "Web & Mobile App Design",
    description:
      "Design, build and deliver both mobile and web applications with strong UX, embedded software, and high performance.",
    items: [
      "Mobile app design",
      "Embedded software design",
      "Web application design",
    ],
  },
  {
    icon: LocalShippingIcon,
    title: "Procurement Services",
    description:
      "Technical procurement support for supplier selection, relationship management, and risk control in the supply chain.",
    items: [
      "Customer needs identification & specification",
      "Supplier identification & selection",
      "Supplier relationship management",
      "Risk management in procurement",
    ],
  },
  {
    icon: SchemaIcon,
    title: "Systems-Engineering Services",
    description:
      "Structured systems engineering and product development from requirements to hardware/software implementation.",
    items: [
      "Requirement engineering",
      "Architecture design with HW/SW implementation",
      "Verification and validation",
    ],
  },
  {
    icon: StorageIcon,
    title: "Data Engineering & Analytics",
    description:
      "Collect, transform and analyze your data to reveal the strategic insights that drive better decisions.",
    items: [
      "Data acquisition and transformation",
      "Data analysis",
      "Data modeling",
    ],
  },
  {
    icon: InventoryIcon,
    title: "Supply Management",
    description:
      "Inventory and supply chain optimization services to keep projects moving and reduce operational bottlenecks.",
    items: [
      "Inventory management",
      "Supply chain optimization",
    ],
  },
];

export default function OurServices() {
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.85, ease: "easeOut" }}
      sx={{
        position: "relative",
        overflow: "hidden",
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
        px: { xs: 4, md: 10 },
        background: "linear-gradient(180deg, #f8faff 0%, #f0f3ff 100%)",
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        {/* Main Title Section */}
        <Typography
          sx={{
            fontSize: { xs: "1.2rem", md: "1.35rem" },
            fontWeight: 700,
            letterSpacing: "0.12em",
            textAlign: "center",
            color: "#0A1633",
            textTransform: "uppercase",
            mb: 3,
          }}
        >
          AMT Systems-Engineering Services
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "2.2rem", md: "3.2rem" },
            fontWeight: 900,
            letterSpacing: "-0.02em",
            textAlign: "center",
            mb: 2,
            ...gradientStyle,
          }}
        >
          A Complete Engineering and Procurement Offer
        </Typography>

        <Box
          sx={{
            width: 80,
            height: 5,
            background: "linear-gradient(90deg, #5263ff 0%, #1d284f 100%)",
            mx: "auto",
            mb: 6,
            borderRadius: 4,
          }}
        />

        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.1rem" },
            color: "#55627c",
            textAlign: "center",
            maxWidth: 700,
            mx: "auto",
            mb: 8,
            lineHeight: 1.8,
          }}
        >
          AMT Systems Engineering SARL combines hardware engineering, software development,
          data services and procurement support to deliver practical solutions from prototype to
          production.
        </Typography>

        {/* Services Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" },
            gap: 4,
          }}
        >
          {serviceBlocks.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: "easeOut" }}
              >
                <Box
                  sx={{
                    h: "100%",
                    background: "rgba(255,255,255,0.95)",
                    borderRadius: "24px",
                    boxShadow: "0 30px 70px rgba(10, 22, 51, 0.1)",
                    p: { xs: 3.5, md: 4 },
                    border: "1px solid rgba(10, 22, 51, 0.06)",
                    transition: "all 0.35s ease",
                    "&:hover": {
                      boxShadow: "0 40px 90px rgba(10, 22, 51, 0.14)",
                      transform: "translateY(-6px)",
                    },
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 56,
                      height: 56,
                      borderRadius: "14px",
                      background: "linear-gradient(135deg, #5263ff 0%, #364999 100%)",
                      mb: 3,
                    }}
                  >
                    <IconComponent sx={{ color: "#fff", fontSize: 32 }} />
                  </Box>

                  {/* Title */}
                  <Typography
                    sx={{
                      fontSize: { xs: "1.2rem", md: "1.35rem" },
                      fontWeight: 800,
                      color: "#0A1633",
                      mb: 2,
                      lineHeight: 1.3,
                    }}
                  >
                    {service.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      color: "#55627c",
                      fontSize: { xs: "0.95rem", md: "1rem" },
                      lineHeight: 1.7,
                      mb: 3,
                    }}
                  >
                    {service.description}
                  </Typography>

                  {/* Items List */}
                  <Box sx={{ display: "grid", gap: 2 }}>
                    {service.items.map((item, itemIdx) => (
                      <Box key={itemIdx} sx={{ display: "flex", gap: 2 }}>
                        <CheckCircleIcon
                          sx={{
                            color: "#5263ff",
                            fontSize: 20,
                            flexShrink: 0,
                            mt: 0.5,
                          }}
                        />
                        <Typography
                          sx={{
                            color: "#33415c",
                            fontSize: "0.95rem",
                            lineHeight: 1.6,
                            fontWeight: 500,
                          }}
                        >
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

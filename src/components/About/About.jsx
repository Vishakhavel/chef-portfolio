import React from "react";
import { Avatar, Box } from "@mui/material";
import { motion } from "framer-motion";
import chefPic from "../../assets/vidya.jpg";

// Generate multiple falling flowers and other emojis
const flowerEmojis = ["🌸", "💖", "✨", "🌷", "🌼"];
const flowers = Array.from({ length: 20 });

export const About = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
        background: "linear-gradient(to bottom right, #fce4ec, #f8bbd0)",
        height: "100vh",
        border: "4px solid #f4d1e7",
        borderRadius: "20px",
      }}
    >
      {/* Falling flower animations */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {flowers.map((_, index) => {
          const left = Math.random() * 100; // random horizontal position
          const duration = 8 + Math.random() * 5;
          const delay = Math.random() * 5;
          const emoji =
            flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];

          return (
            <motion.div
              key={index}
              initial={{ y: -50 }}
              animate={{ y: "110vh" }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                repeatType: "loop",
              }}
              style={{
                position: "absolute",
                left: `${left}%`,
                fontSize: "24px",
              }}
            >
              {emoji}
            </motion.div>
          );
        })}
      </Box>

      {/* Content section */}
      <Box sx={{ zIndex: 1 }}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Avatar
            sx={{
              width: 300,
              height: 300,
              border: "6px solid #f4d1e7",
              boxShadow: "0 0 20px #f4d1e7",
            }}
            alt="Vidya Sri"
            src={chefPic}
          />
        </motion.div>
      </Box>

      <Box sx={{ textAlign: "center", marginTop: "30px", zIndex: 1 }}>
        <Box sx={{ maxWidth: "500px" }}>
          <Box sx={{ marginBottom: "20px" }}>
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              hey sugar!
            </motion.h1>
          </Box>

          <motion.h4
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Meet Vidya Sri — a sweet soul with a heart full of sugar and dreams!
            💕 Currently sprinkling magic as a pastry extern at Terranea Resort
            and crafting delightful treats while studying at the Culinary
            Institute of America. 🍰✨
          </motion.h4>
        </Box>
      </Box>
    </Box>
  );
};

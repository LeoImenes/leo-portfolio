import { Button, Card, Chip, Stack, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../../hooks/useDarkMode";
import { PublicProject } from "../../constants/publicProjects";
import { PublicProjectDetailsModal } from "../Modals/PublicProjectsDetailsModal";

type Props = {
  project: PublicProject;
};

const PublicProjectCard: React.FC<Props> = ({ project }) => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");
  const isSmallMobile = useMediaQuery("(max-width:480px)");
  const { darkMode } = useDarkMode();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: project.id * 0.2 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <Card
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setOpen(true)}
        sx={{
          m: { xs: 1, sm: 1.5, md: 2 },
          width: { xs: "calc(100% - 16px)", sm: "calc(50% - 24px)", md: "300px" },
          height: { xs: "420px", sm: "400px", md: "520px" },
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
          borderRadius: "24px",
          border: `1px solid ${
            hovered
              ? darkMode ? "rgba(0,180,216,0.4)" : "rgba(0,119,182,0.35)"
              : darkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"
          }`,
          boxShadow: hovered
            ? darkMode
              ? "0 20px 50px rgba(0,0,0,0.55), 0 0 30px rgba(0,180,216,0.15)"
              : "0 20px 40px rgba(0,0,0,0.13), 0 0 20px rgba(0,119,182,0.10)"
            : darkMode
            ? "0 4px 20px rgba(0,0,0,0.3)"
            : "0 4px 16px rgba(0,0,0,0.07)",
          transition: "all 0.4s cubic-bezier(0.34, 1.2, 0.64, 1)",
          transform: hovered ? "translateY(-8px)" : "translateY(0)",
        }}
      >
        {/* Background image */}
        <Box
          component="img"
          src={project.image}
          alt={project.name}
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: hovered ? "brightness(0.3) saturate(1.15)" : "brightness(0.8) saturate(0.8)",
            transform: hovered ? "scale(1.1)" : "scale(1)",
            transition: "filter 0.6s ease, transform 0.7s ease",
          }}
        />

        {/* Multi-layer gradient for better readability */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, transparent 0%, transparent 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.85) 100%)",
            zIndex: 1,
          }}
        />

        {/* Side gradient for depth */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(0,0,0,0.4) 0%, transparent 50%, rgba(0,0,0,0.4) 100%)",
            zIndex: 1,
            opacity: hovered ? 0.6 : 0.3,
            transition: "opacity 0.4s ease",
          }}
        />

        {/* Top cyan glow line — appears on hover */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, transparent, #00B4D8, transparent)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.4s ease",
            zIndex: 3,
            boxShadow: hovered ? "0 0 20px rgba(0,180,216,0.8)" : "none",
          }}
        />

        {/* Bottom cyan accent line */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, transparent, #00B4D8, transparent)",
            opacity: 0.4,
            zIndex: 3,
          }}
        />

        {/* Content */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            p: 3,
          }}
        >
          {/* Tech chips — slide up on hover */}
        

          {/* Project name */}
          <Typography
            variant={!isMobile ? "h6" : "subtitle1"}
            sx={{
              color: "#fff",
              fontWeight: 800,
              textShadow: "0 2px 16px rgba(0,0,0,0.8)",
              transform: hovered ? "translateY(-6px)" : "translateY(0)",
              transition: "transform 0.4s cubic-bezier(0.34, 1.2, 0.64, 1)",
              lineHeight: 1.3,
              mb: hovered ? 2 : 1,
              fontSize: { xs: "1.1rem", sm: "1.25rem" },
            }}
          >
            {project.name}
          </Typography>

          {/* CTA button — reveals on hover */}
          <Box
            sx={{
              maxHeight: hovered ? "44px" : "0px",
              overflow: "hidden",
              transition: "max-height 0.4s ease",
            }}
          >
            <Button
              variant="contained"
              size="small"
              sx={{
                background: "linear-gradient(135deg, #00B4D8 0%, #0077B6 100%)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.82rem",
                borderRadius: "10px",
                px: 2.5,
                py: 0.7,
                boxShadow: "0 4px 16px rgba(0,180,216,0.5)",
                pointerEvents: "none",
                "&:hover": {
                  background: "linear-gradient(135deg, #0077B6 0%, #00B4D8 100%)",
                },
              }}
            >
              Ver detalhes →
            </Button>
          </Box>
        </Box>
      </Card>

      <PublicProjectDetailsModal
        open={open}
        setOpen={setOpen}
        project={project}
      />
    </motion.div>
  );
};

export default PublicProjectCard;
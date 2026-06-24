import {
  Box,
  Button,
  Chip,
  Modal,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { PublicProject } from "../../../constants/publicProjects";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  project: PublicProject;
};

export const PublicProjectDetailsModal: React.FC<Props> = ({
  open,
  setOpen,
  project,
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const controls = useAnimation();
  const isMobile = useMediaQuery("(max-width:768px)");
  const isSmallMobile = useMediaQuery("(max-width:480px)");
  const { darkMode } = useDarkMode();

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 50;
    if (info.offset.x > threshold && currentImage > 0) {
      setCurrentImage((prev) => prev - 1);
    } else if (info.offset.x < -threshold && currentImage < project.images.length - 1) {
      setCurrentImage((prev) => prev + 1);
    }
    controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } });
  };

  const bg     = darkMode ? "#0D1B2A" : "#FAF8F5";
  const bgEl   = darkMode ? "#1B2B3B" : "#F0EDE8";
  const border = darkMode ? "rgba(0,180,216,0.18)" : "rgba(0,119,182,0.14)";
  const textPrimary  = darkMode ? "#E2E8F0" : "#1A2332";
  const textSecondary = darkMode ? "#94A3B8" : "#3D5166";
  const chipBg   = darkMode ? "rgba(0,180,216,0.12)" : "rgba(0,119,182,0.08)";
  const chipColor = darkMode ? "#48CAE4" : "#0077B6";
  const chipBorder = darkMode ? "rgba(0,180,216,0.28)" : "rgba(0,119,182,0.22)";

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ backdropFilter: "blur(6px)" }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "92vw", sm: "80vw", md: "70vw", lg: "900px" },
          maxHeight: "90vh",
          overflowY: "auto",
          bgcolor: bg,
          borderRadius: "20px",
          border: `1px solid ${border}`,
          boxShadow: darkMode
            ? "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,180,216,0.08)"
            : "0 32px 80px rgba(0,0,0,0.12)",
          outline: "none",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          overflow: "hidden",
          // Top glow line
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, transparent, #00B4D8, transparent)",
            opacity: darkMode ? 0.6 : 0.4,
            zIndex: 10,
          },
        }}
      >
        {/* ── Left: draggable image carousel ── */}
        <Box
          sx={{
            position: "relative",
            flexShrink: 0,
            width: isMobile ? "100%" : "55%",
            minHeight: isMobile ? "300px" : "500px",
            overflow: "hidden",
          }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            animate={controls}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              cursor: "grab",
            }}
          >
            {project.images.map((img, index) => (
              <Box
                key={index}
                component="img"
                src={img}
                alt={`${project.name} - ${index + 1}`}
                draggable={false}
                sx={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  minHeight: isMobile ? "300px" : "500px",
                  objectFit: "contain",
                  filter: "brightness(0.5) saturate(0.85)",
                  transition: "filter 0.4s ease, transform 0.5s ease",
                  display: "block",
                  opacity: index === currentImage ? 1 : 0,
                  pointerEvents: "none",
                  "&:hover": {
                    filter: "brightness(0.65) saturate(1)",
                    transform: "scale(1.04)",
                  },
                }}
              />
            ))}
          </motion.div>
          {/* Gradient overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: isMobile
                ? "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.75) 100%)"
                : "linear-gradient(270deg, rgba(13,27,42,0.55) 0%, transparent 60%)",
              zIndex: 1,
            }}
          />
          {/* Navigation arrows */}
          {project.images.length > 1 && (
            <>
              <Box
                onClick={(e) => {
                  e.stopPropagation();
                  if (currentImage > 0) setCurrentImage((prev) => prev - 1);
                }}
                sx={{
                  position: "absolute",
                  left: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                  width: { xs: 36, sm: 44 },
                  height: { xs: 36, sm: 44 },
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  background: "rgba(0,180,216,0.85)",
                  backdropFilter: "blur(10px)",
                  color: "#fff",
                  border: "2px solid #fff",
                  boxShadow: "0 4px 20px rgba(0,180,216,0.5)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "rgba(0,180,216,1)",
                    transform: "translateY(-50%) scale(1.1)",
                    boxShadow: "0 6px 25px rgba(0,180,216,0.7)",
                  },
                }}
              >
                <ArrowBackIosNewIcon sx={{ fontSize: 20, fontWeight: 700 }} />
              </Box>
              <Box
                onClick={(e) => {
                  e.stopPropagation();
                  if (currentImage < project.images.length - 1) setCurrentImage((prev) => prev + 1);
                }}
                sx={{
                  position: "absolute",
                  right: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                  width: { xs: 36, sm: 44 },
                  height: { xs: 36, sm: 44 },
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  background: "rgba(0,180,216,0.85)",
                  backdropFilter: "blur(10px)",
                  color: "#fff",
                  border: "2px solid #fff",
                  boxShadow: "0 4px 20px rgba(0,180,216,0.5)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "rgba(0,180,216,1)",
                    transform: "translateY(-50%) scale(1.1)",
                    boxShadow: "0 6px 25px rgba(0,180,216,0.7)",
                  },
                }}
              >
                <ArrowForwardIosIcon sx={{ fontSize: 20, fontWeight: 700 }} />
              </Box>
            </>
          )}

          {/* Image indicators */}
          {project.images.length > 1 && (
            <Box
              sx={{
                position: "absolute",
                bottom: 16,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 1,
                zIndex: 2,
                background: "rgba(0,0,0,0.5)",
                backdropFilter: "blur(8px)",
                px: 1.5,
                py: 0.8,
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {project.images.map((_, index) => (
                <Box
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImage(index);
                  }}
                  sx={{
                    width: currentImage === index ? 28 : 10,
                    height: 10,
                    borderRadius: 99,
                    background: currentImage === index ? "#00B4D8" : "rgba(255,255,255,0.5)",
                    border: currentImage === index ? "2px solid #fff" : "1px solid rgba(255,255,255,0.3)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    boxShadow: currentImage === index ? "0 0 10px rgba(0,180,216,0.6)" : "none",
                  }}
                />
              ))}
            </Box>
          )}
          {/* Project name on image (mobile only) */}
          {isMobile && (
            <Typography
              sx={{
                position: "absolute",
                bottom: 40,
                left: 16,
                color: "#fff",
                fontWeight: 800,
                fontSize: "1.25rem",
                textShadow: "0 2px 10px rgba(0,0,0,0.7)",
                zIndex: 2,
              }}
            >
              {project.name}
            </Typography>
          )}
        </Box>

        {/* ── Right: content ── */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 3, md: 4 },
            display: "flex",
            flexDirection: "column",
            gap: 2,
            position: "relative",
          }}
        >
          {/* Close button */}
          <Box
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              top: 14,
              right: 14,
              width: { xs: 26, sm: 30 },
              height: { xs: 26, sm: 30 },
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              background: darkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)",
              border: `1px solid ${border}`,
              color: textSecondary,
              fontSize: "0.8rem",
              fontWeight: 700,
              transition: "all 0.2s ease",
              "&:hover": {
                background: darkMode ? "rgba(255,255,255,0.13)" : "rgba(0,0,0,0.1)",
                color: textPrimary,
              },
            }}
          >
            ✕
          </Box>

          {/* Title (desktop) */}
          {!isMobile && (
            <Typography
              id="modal-modal-title"
              variant="h5"
              sx={{ fontWeight: 800, color: textPrimary, pr: 4, lineHeight: 1.2 }}
            >
              {project.name}
            </Typography>
          )}

          {/* Divider */}
          <Box sx={{ height: "1px", background: border }} />

          {/* Description */}
          <Typography
            id="modal-modal-description"
            variant="body2"
            sx={{
              color: textSecondary,
              lineHeight: 1.85,
              fontSize: "0.93rem",
              flex: 1,
            }}
          >
            {project.description}
          </Typography>

        </Box>
      </Box>
    </Modal>
  );
};

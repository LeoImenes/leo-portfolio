import { Button, Card, Chip, Stack, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";
import React, { useState } from "react";
import { ProjectDetailsModal } from "../Modals/ProjectDetailsModal";
import { useDarkMode } from "../../hooks/useDarkMode";

export type Portfolio = {
  id: number;
  name: string;
  description: string;
  image: string;
  languages: string[];
};

export type PortfolioCardProps = {
  portfolio: Portfolio;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({ portfolio }) => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");
  //const isSmallMobile = useMediaQuery("(max-width:480px)");
  const { darkMode } = useDarkMode();

  return (
    <>
      <Card
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setOpen(true)}
        sx={{
          m: { xs: 1, sm: 1.5, md: 2 },
          width: { xs: "calc(100% - 16px)", sm: "calc(50% - 24px)", md: "360px" },
          height: { xs: "240px", sm: "260px", md: "280px" },
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
          borderRadius: "18px",
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
          src={portfolio.image}
          alt={portfolio.name}
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
          <Stack
            direction="row"
            flexWrap="wrap"
            gap={0.7}
            sx={{
              mb: 1.5,
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
              maxHeight: "44px",
              overflow: "hidden",
            }}
          >
            {portfolio.languages.slice(0, 4).map((lang) => (
              <Chip
                key={lang}
                label={lang}
                size="small"
                sx={{
                  height: "22px",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  background: "rgba(0,180,216,0.25)",
                  color: "#ADE8F4",
                  border: "1px solid rgba(0,180,216,0.4)",
                  backdropFilter: "blur(6px)",
                  "& .MuiChip-label": { px: 1.2 },
                  boxShadow: "0 2px 8px rgba(0,180,216,0.2)",
                }}
              />
            ))}
          </Stack>

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
            {portfolio.name}
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

      <ProjectDetailsModal open={open} setOpen={setOpen} portfolio={portfolio} />
    </>
  );
};

export default PortfolioCard;

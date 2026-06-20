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
  const isMobile = useMediaQuery("(max-width:900px)");
  const { darkMode } = useDarkMode();

  return (
    <>
      <Card
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setOpen(true)}
        sx={{
          m: { xs: 1.5, md: 2 },
          width: { xs: "calc(100% - 24px)", sm: "320px", md: "360px" },
          height: "280px",
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
            filter: hovered ? "brightness(0.25) saturate(1.1)" : "brightness(0.18) saturate(0.7)",
            transform: hovered ? "scale(1.08)" : "scale(1)",
            transition: "filter 0.5s ease, transform 0.6s ease",
          }}
        />

        {/* Bottom gradient for readability */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, transparent 25%, rgba(0,0,0,0.75) 100%)",
            zIndex: 1,
          }}
        />

        {/* Top cyan glow line — appears on hover */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, transparent, #00B4D8, transparent)",
            opacity: hovered ? 0.9 : 0,
            transition: "opacity 0.4s ease",
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
            p: 2.5,
          }}
        >
          {/* Tech chips — slide up on hover */}
          <Stack
            direction="row"
            flexWrap="wrap"
            gap={0.6}
            sx={{
              mb: 1,
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
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
                  height: "20px",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  background: "rgba(0,180,216,0.2)",
                  color: "#ADE8F4",
                  border: "1px solid rgba(0,180,216,0.35)",
                  backdropFilter: "blur(4px)",
                  "& .MuiChip-label": { px: 1 },
                }}
              />
            ))}
          </Stack>

          {/* Project name */}
          <Typography
            variant={!isMobile ? "h6" : "subtitle1"}
            sx={{
              color: "#fff",
              fontWeight: 700,
              textShadow: "0 2px 12px rgba(0,0,0,0.6)",
              transform: hovered ? "translateY(-4px)" : "translateY(0)",
              transition: "transform 0.35s ease",
              lineHeight: 1.2,
              mb: hovered ? 1.5 : 0,
            }}
          >
            {portfolio.name}
          </Typography>

          {/* CTA button — reveals on hover */}
          <Box
            sx={{
              maxHeight: hovered ? "40px" : "0px",
              overflow: "hidden",
              transition: "max-height 0.35s ease",
            }}
          >
            <Button
              variant="contained"
              size="small"
              sx={{
                background: "linear-gradient(135deg, #00B4D8 0%, #0077B6 100%)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.78rem",
                borderRadius: "8px",
                px: 2,
                py: 0.6,
                boxShadow: "0 4px 14px rgba(0,180,216,0.4)",
                pointerEvents: "none",
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

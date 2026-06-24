import { Box, Typography } from "@mui/material";
import { skillsImage } from "../../constants/skills";
import { useDarkMode } from "../../hooks/useDarkMode";
import "./SkillsSection.css";

function SkillsSection({ isMobile, isSmallMobile }: { isMobile: boolean; isSmallMobile: boolean }) {
  const { darkMode } = useDarkMode();
  // Triple-duplicate so the track never visibly resets on any screen width
  const row = [...skillsImage, ...skillsImage, ...skillsImage];

  return (
    <Box
      id="skills"
      width="100%"
      sx={{
        py: { xs: 4, md: 5 },
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* ── Section header ── */}
      <Box textAlign="center" mb={5}>
        <Typography
          variant="overline"
          color="secondary"
          sx={{ letterSpacing: 3, fontWeight: 700, fontSize: "0.72rem" }}
        >
          Ferramentas &amp; Tecnologias
        </Typography>
        <Typography
          variant={!isMobile ? "h3" : "h4"}
          fontWeight={800}
          color="textSecondary"
          sx={{ mt: 0.5, lineHeight: 1.15 }}
        >
          Minhas Skills
        </Typography>
        {/* Underline accent */}
        <Box
          sx={{
            width: 56,
            height: 4,
            borderRadius: 99,
            background: "linear-gradient(90deg, #00B4D8, #0077B6)",
            mx: "auto",
            mt: 1.5,
          }}
        />
      </Box>

      {/* ── Carousel ── */}
      <Box
        className={`skills-carousel ${darkMode ? "dark" : "light"}`}
        sx={{ maxWidth: "900px", mx: "auto" }}
      >
        <Box className="skills-track">
          {row.map((skill, index) => (
            <Box
              key={index}
              className="skill-item"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                flexShrink: 0,
                cursor: "pointer",
                // Pass skill color as CSS variable for the hover glow
                "--skill-color": skill.color,
              } as React.CSSProperties}
            >
              <Box
                component="img"
                src={skill.image}
                alt={skill.name}
                sx={{
                  objectFit: "contain",
                  width: { lg: "80px", md: "72px", sm: "64px", xs: "56px" },
                  height: { lg: "80px", md: "72px", sm: "64px", xs: "56px" },
                  display: "block",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default SkillsSection;

import {
  Box,
  Button,
  Chip,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useDarkMode } from "../../hooks/useDarkMode";
import { useState } from "react";
import { ContactsModal } from "../Modals/ContactsModal";
import photoDark from "../../assets/ProfilePic/newPhoto.png";
import cv from "../../assets/Portfolio/cvLeo.pdf";
import "./aboutMe.css";

const stats = [
];

const highlights = ["React Native", "TypeScript", "NestJS", "CI/CD", "REST APIs"];

export const AboutMe = () => {
  const { darkMode } = useDarkMode();
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");
  const isSmallMobile = useMediaQuery("(max-width:480px)");

  return (
    <>
      <Box
        id="about"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          px: { xs: 3, md: 6 },
          py: { xs: 8, md: 4 },
        }}
      >
        {/* ── Subtle background blobs ── */}
        <Box className="hero-blob hero-blob--tl" />
        <Box className="hero-blob hero-blob--br" />

        <Stack
          direction={isMobile ? "column" : "row"}
          gap={isMobile ? 6 : 10}
          justifyContent="center"
          alignItems="center"
          sx={{
            maxWidth: "1100px",
            width: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* ── Left: text content ── */}
          <Box
            textAlign={isMobile ? "center" : "left"}
            order={isMobile ? 2 : 1}
            sx={{ maxWidth: "520px", animation: "fadeInUp 0.7s ease-out both" }}
          >
            <Typography
              variant={isMobile ? "h4" : "h3"}
              sx={{
                fontWeight: 800,
                lineHeight: 1.15,
                color: darkMode ? "#E2E8F0" : "#0D1B2A",
                animation: "fadeInUp 0.7s ease-out 0.1s both",
              }}
            >
              Leonardo{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #00B4D8, #0077B6)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Imenes
              </Box>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mt: 1,
                fontWeight: 500,
                color: darkMode ? "#94A3B8" : "#334155",
                fontSize: { xs: "1rem", md: "1.15rem" },
                animation: "fadeInUp 0.7s ease-out 0.2s both",
              }}
            >
              Desenvolvedor de {" "}
              <Box
                component="span"
                sx={{
                  color: darkMode ? "#00B4D8" : "#0077B6",
                  fontWeight: 700,
                }}
              >
                Software
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: 2.5,
                lineHeight: 1.85,
                color: darkMode ? "#64748B" : "#64748B",
                fontSize: "0.95rem",
                animation: "fadeInUp 0.7s ease-out 0.3s both",
              }}
            >
              Desenvolvedor de Software focado na criação de aplicações web e
              mobile modernas, responsivas e escaláveis, com experiência em
              ReactJS, React Native, TypeScript, integração com APIs REST,
              testes automatizados e metodologias ágeis.
            </Typography>

            {/* Tech pills */}
            {/* <Stack
              direction="row"
              flexWrap="wrap"
              gap={1}
              mt={2.5}
              justifyContent={isMobile ? "center" : "flex-start"}
              sx={{ animation: "fadeInUp 0.7s ease-out 0.35s both" }}
            >
              {highlights.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  sx={{
                    background: darkMode
                      ? "rgba(255,255,255,0.05)"
                      : "rgba(0,0,0,0.04)",
                    color: darkMode ? "#94A3B8" : "#334155",
                    border: `1px solid ${
                      darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"
                    }`,
                    fontSize: "0.7rem",
                    fontWeight: 600,
                  }}
                />
              ))}
            </Stack> */}

            {/* Stats */}
            <Stack
              direction="row"
              gap={{ xs: 2, md: 4 }}
              mt={3.5}
              justifyContent={isMobile ? "center" : "flex-start"}
              sx={{ animation: "fadeInUp 0.7s ease-out 0.4s both" }}
            >
              {stats.map((stat, i) => (
                <Box key={i} textAlign="center">
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      background: "linear-gradient(135deg, #00B4D8, #0077B6)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      lineHeight: 1.1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: darkMode ? "#64748B" : "#94A3B8",
                      fontWeight: 600,
                      letterSpacing: "0.2px",
                      fontSize: "0.68rem",
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}

              {/* Dividers between stats */}
            </Stack>

            {/* CTA Buttons */}
            <Stack
              mt={4}
              gap={1.5}
              direction={isMobile ? "column" : "row"}
              justifyContent={isMobile ? "center" : "flex-start"}
              sx={{ animation: "fadeInUp 0.7s ease-out 0.5s both" }}
            >
              <Button
                variant="contained"
                onClick={() => setOpen(true)}
                size="medium"
                sx={{
                  px: 3,
                  py: 1.1,
                  background:
                    "linear-gradient(135deg, #00B4D8 0%, #0077B6 100%)",
                  boxShadow: "0 6px 20px rgba(0,180,216,0.35)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #0077B6 0%, #00B4D8 100%)",
                    boxShadow: "0 10px 28px rgba(0,180,216,0.45)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Entre em contato
              </Button>
              <Button
                variant="outlined"
                href={cv}
                download
                size="medium"
                sx={{
                  px: 3,
                  py: 1.1,
                  borderColor: darkMode
                    ? "rgba(0,180,216,0.4)"
                    : "rgba(0,119,182,0.4)",
                  color: darkMode ? "#00B4D8" : "#0077B6",
                  "&:hover": {
                    borderColor: darkMode ? "#00B4D8" : "#0077B6",
                    background: darkMode
                      ? "rgba(0,180,216,0.08)"
                      : "rgba(0,119,182,0.06)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                📄 Baixar CV
              </Button>
            </Stack>
          </Box>

          {/* ── Right: profile photo ── */}
          <Box
            order={isMobile ? 1 : 2}
            sx={{
              position: "relative",
              flexShrink: 0,
              animation: "fadeInUp 0.8s ease-out 0.2s both",
            }}
          >
            {/* Outer glow ring */}
            <Box
              className="photo-glow"
              sx={
                {
                  "--glow": darkMode
                    ? "rgba(0,180,216,0.18)"
                    : "rgba(0,119,182,0.12)",
                } as React.CSSProperties
              }
            />
            {/* Spinning dashed ring */}
            <Box
              className="photo-ring-spin"
              sx={
                {
                  "--ring-color": darkMode
                    ? "rgba(0,180,216,0.22)"
                    : "rgba(0,119,182,0.18)",
                } as React.CSSProperties
              }
            />
            {/* Static solid ring */}
            <Box
              sx={{
                position: "absolute",
                inset: "-10px",
                borderRadius: "50%",
                border: `2px solid ${
                  darkMode ? "rgba(0,180,216,0.15)" : "rgba(0,119,182,0.12)"
                }`,
                zIndex: 1,
              }}
            />
            {/* Orbiting accent dot */}{" "}
            <Box
              className="orbit-dot orbit-dot--a"
              sx={{ "--dot-color": "#00B4D8" } as React.CSSProperties}
            />
            <Box
              className="orbit-dot orbit-dot--b"
              sx={{ "--dot-color": "#48CAE4" } as React.CSSProperties}
            />
            <Box
              className="orbit-dot orbit-dot--c"
              sx={{ "--dot-color": "#0077B6" } as React.CSSProperties}
            />
            {/* Photo */}
            <Box
              component="img"
              src={ photoDark}
              alt="Foto de perfil de Leonardo Imenes"
              sx={{
                width: { xs: "180px", sm: "220px", md: "260px", lg: "300px" },
                height: { xs: "180px", sm: "220px", md: "260px", lg: "300px" },
                borderRadius: "50%",
                objectFit: "cover",
                position: "relative",
                zIndex: 2,
                backgroundColor: !darkMode ? "#dbecf5" : "#E2E8F0",
                boxShadow: darkMode
                  ? "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,180,216,0.15)"
                  : "0 20px 50px rgba(0,0,0,0.15), 0 0 30px rgba(0,119,182,0.10)",
                transition:
                  "transform 0.5s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease",
                "&:hover": {
                  transform: "scale(1.04)",
                  boxShadow: darkMode
                    ? "0 28px 70px rgba(0,0,0,0.55), 0 0 55px rgba(0,180,216,0.25)"
                    : "0 28px 60px rgba(0,0,0,0.2), 0 0 40px rgba(0,119,182,0.18)",
                },
              }}
            />
          </Box>
        </Stack>
      </Box>

      <ContactsModal open={open} setOpen={setOpen} />
    </>
  );
};

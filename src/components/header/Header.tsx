import { Stack, Typography, Button, useScrollTrigger, Slide, AppBar, Box, Drawer, IconButton, useMediaQuery } from "@mui/material";
import { useDarkMode } from "../../hooks/useDarkMode";
import { MaterialUISwitch } from "../Switch/DarkModeSwitch";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import "./Header.css";

export const Header = () => {
  const { toggleMode, darkMode } = useDarkMode();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");
  const isSmallMobile = useMediaQuery("(max-width:480px)");

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 40 });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const navItems = [
    { label: "Sobre mim", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projetos", id: "projects" },
  ];

  return (
    <Slide appear={false} direction="down" in={!trigger || true}>
      <AppBar
        position="sticky"
        elevation={trigger ? 4 : 0}
        sx={{
          backgroundColor: darkMode
            ? "rgba(13, 27, 42, 0.92)"
            : "rgba(245, 245, 245, 0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: `1px solid ${
            darkMode ? "rgba(0,180,216,0.12)" : "rgba(0,119,182,0.10)"
          }`,
          transition: "all 0.3s ease",
          boxShadow: trigger
            ? darkMode
              ? "0 4px 24px rgba(0,0,0,0.4)"
              : "0 4px 24px rgba(0,0,0,0.08)"
            : "none",
        }}
      >
        <Stack
          height="64px"
          alignItems="center"
          justifyContent="space-between"
          flexDirection="row"
          sx={{ px: { xs: 2, sm: 3, md: 8 } }}
        >
          {/* Dark mode toggle */}
          <MaterialUISwitch
            sx={{ color: "#fff" }}
            onChange={toggleMode}
            checked={darkMode}
          />

          {/* Logo */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              letterSpacing: "-0.5px",
              background: darkMode
                ? "linear-gradient(135deg, #00B4D8 0%, #48CAE4 60%, #ADE8F4 100%)"
                : "linear-gradient(135deg, #0077B6 0%, #00B4D8 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "1rem", sm: "1.3rem", md: "1.6rem" },
              userSelect: "none",
            }}
          >
            
          </Typography>

          {/* Desktop Nav links */}
          {!isMobile && (
            <Stack direction="row" spacing={{ xs: 0.5, sm: 1.5, md: 2 }} alignItems="center">
              {navItems.slice(0, 2).map((item) => (
                <Button
                  key={item.id}
                  variant="text"
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: darkMode ? "#94A3B8" : "#334155",
                    fontSize: { xs: "0.72rem", sm: "0.82rem", md: "0.9rem" },
                    fontWeight: 500,
                    px: { xs: 1, md: 1.5 },
                    minWidth: 0,
                    borderRadius: "8px",
                    "&:hover": {
                      color: darkMode ? "#00B4D8" : "#0077B6",
                      backgroundColor: darkMode
                        ? "rgba(0,180,216,0.08)"
                        : "rgba(0,119,182,0.06)",
                    },
                    transition: "color 0.2s ease, background-color 0.2s ease",
                  }}
                >
                  {item.label}
                </Button>
              ))}

              <Button
                variant="contained"
                onClick={() => scrollToSection("projects")}
                sx={{
                  fontSize: { xs: "0.72rem", sm: "0.82rem", md: "0.9rem" },
                  fontWeight: 700,
                  px: { xs: 1.5, md: 2.5 },
                  py: 0.8,
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #00B4D8 0%, #0077B6 100%)",
                  color: "#fff",
                  boxShadow: "0 4px 14px rgba(0,180,216,0.3)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #0077B6 0%, #00B4D8 100%)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 20px rgba(0,180,216,0.4)",
                  },
                  transition: "all 0.25s ease",
                }}
              >
                Projetos
              </Button>

              {/* Accent dot indicator */}
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#00B4D8",
                  boxShadow: "0 0 8px rgba(0,180,216,0.8)",
                  animation: "pulse-dot 2s ease-in-out infinite",
                  display: { xs: "none", md: "block" },
                }}
              />
            </Stack>
          )}

          {/* Mobile menu button */}
          {isMobile && (
            <IconButton
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{
                color: darkMode ? "#00B4D8" : "#0077B6",
                padding: 1,
                "&:hover": {
                  backgroundColor: darkMode
                    ? "rgba(0,180,216,0.1)"
                    : "rgba(0,119,182,0.08)",
                },
              }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
        </Stack>

        {/* Mobile drawer */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          sx={{
            "& .MuiDrawer-paper": {
              width: { xs: "70vw", sm: "300px" },
              background: darkMode ? "#0D1B2A" : "#FAF8F5",
              borderLeft: `1px solid ${darkMode ? "rgba(0,180,216,0.18)" : "rgba(0,119,182,0.14)"}`,
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              padding: 3,
              gap: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                color: darkMode ? "#E2E8F0" : "#0D1B2A",
                mb: 2,
                background: "linear-gradient(135deg, #00B4D8, #0077B6)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Menu
            </Typography>
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="text"
                onClick={() => scrollToSection(item.id)}
                sx={{
                  justifyContent: "flex-start",
                  color: darkMode ? "#94A3B8" : "#334155",
                  fontSize: "1rem",
                  fontWeight: 600,
                  py: 1.5,
                  px: 2,
                  borderRadius: "12px",
                  "&:hover": {
                    color: darkMode ? "#00B4D8" : "#0077B6",
                    backgroundColor: darkMode
                      ? "rgba(0,180,216,0.08)"
                      : "rgba(0,119,182,0.06)",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Drawer>
      </AppBar>
    </Slide>
  );
};

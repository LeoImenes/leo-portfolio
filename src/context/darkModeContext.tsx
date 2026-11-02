import { Theme, ThemeProvider } from "@emotion/react";
import { Box, createTheme } from "@mui/material";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";

interface DarkModeContextType {
  darkMode: boolean | undefined;
  toggleMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

// Design tokens — single source of truth
export const tokens = {
  dark: {
    bg: "#0D1B2A",          // deep navy — requested
    bgPaper: "#1B2B3B",     // card surface
    bgLight: "#1E3A52",     // subtle section tint
    bgElevated: "#162536",  // slightly raised surfaces
    accent: "#00B4D8",      // vivid cyan
    accentAlt: "#0077B6",   // deep blue
    accentViolet: "#7C3AED",// violet highlight
    text: "#E2E8F0",        // near-white body text
    textMuted: "#94A3B8",   // secondary labels
    textSubtle: "#4A6078",  // placeholder / disabled
    border: "rgba(0, 180, 216, 0.18)",
    borderSubtle: "rgba(255,255,255,0.06)",
    glow: "rgba(0, 180, 216, 0.25)",
  },
  light: {
    bg: "#F0EDE8",          // warm parchment — suave nos olhos
    bgPaper: "#FAF8F5",     // branco quente para cards
    bgLight: "#E8F0F7",     // tint azulado suave para seções
    bgElevated: "#F5F2EE",  // superfícies levemente elevadas
    accent: "#0077B6",
    accentAlt: "#00B4D8",
    accentViolet: "#7C3AED",
    text: "#1A2332",        // quase preto com tom azulado
    textMuted: "#3D5166",   // texto secundário
    textSubtle: "#7A8FA6",  // placeholder
    border: "rgba(0, 119, 182, 0.15)",
    borderSubtle: "rgba(0,0,0,0.05)",
    glow: "rgba(0, 119, 182, 0.12)",
  },
};

export const DarkModeProvider = ({ children }: PropsWithChildren) => {
  const [darkTheme, setDarkTheme] = useState(true);
  const t = darkTheme ? tokens.dark : tokens.light;

  const customTheme = useMemo<Theme>(() => {
    return createTheme({
      palette: {
        mode: darkTheme ? "dark" : "light",
        primary: {
          main: t.bg,
          light: t.bgLight,
          dark: darkTheme ? "#070F1A" : "#DDEEF8",
        },
        secondary: {
          main: t.accent,
          light: t.accentAlt,
          dark: t.accentViolet,
        },
        text: {
          primary: t.text,
          secondary: t.textMuted,
        },
        background: {
          default: t.bg,
          paper: t.bgPaper,
        },
      },
      typography: {
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: "10px",
              fontWeight: 600,
              letterSpacing: "0.3px",
              textTransform: "none",
              transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
            },
          },
          variants: [
            {
              props: { variant: "outlined" },
              style: {
                borderRadius: "10px",
                color: t.accent,
                borderColor: t.accent,
                borderWidth: 2,
                "&:hover": {
                  borderWidth: 2,
                  borderColor: t.accentAlt,
                  color: t.accentAlt,
                  backgroundColor: darkTheme
                    ? "rgba(0,180,216,0.08)"
                    : "rgba(0,119,182,0.06)",
                  transform: "translateY(-2px)",
                  boxShadow: `0 8px 24px ${t.glow}`,
                },
              },
            },
            {
              props: { variant: "contained" },
              style: {
                background: `linear-gradient(135deg, ${t.accent} 0%, ${t.accentAlt} 100%)`,
                color: "#FFFFFF",
                borderRadius: "10px",
                fontWeight: 700,
                boxShadow: `0 4px 14px ${t.glow}`,
                "&:hover": {
                  background: `linear-gradient(135deg, ${t.accentAlt} 0%, ${t.accent} 100%)`,
                  transform: "translateY(-2px)",
                  boxShadow: `0 8px 24px ${t.glow}`,
                },
              },
            },
          ],
        },
        MuiTypography: {
          variants: [
            {
              props: { color: "textSecondary" },
              style: {
                color: t.textMuted,
                fontWeight: 600,
              },
            },
            {
              props: { color: "textPrimary" },
              style: {
                color: t.textSubtle,
                fontSize: "1rem",
              },
            },
            {
              props: { color: "primary" },
              style: {
                color: t.text,
              },
            },
            {
              props: { variant: "h5" },
              style: {
                fontSize: "1.5rem",
              },
            },
          ],
        },
        MuiCard: {
          styleOverrides: {
            root: {
              backgroundImage: "none",
              backgroundColor: t.bgPaper,
              borderRadius: "16px",
              border: `1px solid ${t.border}`,
            },
          },
        },
        MuiChip: {
          styleOverrides: {
            root: {
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "0.75rem",
            },
          },
        },
      },
    });
  }, [darkTheme]);

  const toggleMode = useCallback(() => {
    setDarkTheme((prev) => !prev);
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode: darkTheme, toggleMode }}>
      <ThemeProvider theme={customTheme}>
        <Box
          sx={{
            minHeight: "100vh",
            backgroundColor: "primary.main",
            backgroundImage: darkTheme
              ? "none"
              : "none",
          }}
        >
          {children}
        </Box>
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
};

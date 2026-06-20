import {
  Box,
  Button,
  Chip,
  Modal,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { PortfolioCardProps } from "../../ProjectsCard";
import { useDarkMode } from "../../../hooks/useDarkMode";

type ModalProjectCard = PortfolioCardProps & {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ProjectDetailsModal: React.FC<ModalProjectCard> = ({
  portfolio,
  open,
  setOpen,
}) => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const { darkMode } = useDarkMode();

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
        {/* ── Left: image ── */}
        <Box
          sx={{
            position: "relative",
            flexShrink: 0,
            width: isMobile ? "100%" : "42%",
            minHeight: isMobile ? "200px" : "auto",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={portfolio.image}
            alt={portfolio.name}
            sx={{
              width: "100%",
              height: "100%",
              minHeight: isMobile ? "200px" : "100%",
              objectFit: "cover",
              filter: "brightness(0.5) saturate(0.85)",
              transition: "filter 0.4s ease, transform 0.5s ease",
              display: "block",
              "&:hover": {
                filter: "brightness(0.65) saturate(1)",
                transform: "scale(1.04)",
              },
            }}
          />
          {/* Gradient overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: isMobile
                ? "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.75) 100%)"
                : "linear-gradient(270deg, rgba(13,27,42,0.55) 0%, transparent 60%)",
            }}
          />
          {/* Project name on image (mobile only) */}
          {isMobile && (
            <Typography
              sx={{
                position: "absolute",
                bottom: 16,
                left: 16,
                color: "#fff",
                fontWeight: 800,
                fontSize: "1.25rem",
                textShadow: "0 2px 10px rgba(0,0,0,0.7)",
              }}
            >
              {portfolio.name}
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
              width: 30,
              height: 30,
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
              {portfolio.name}
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
            {portfolio.description}
          </Typography>

          {/* Tech stack box */}
          <Box
            sx={{
              background: bgEl,
              borderRadius: "12px",
              border: `1px solid ${border}`,
              p: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: "0.62rem",
                fontWeight: 700,
                letterSpacing: 1.8,
                textTransform: "uppercase",
                color: darkMode ? "#4A6078" : "#7A8FA6",
                mb: 1,
                display: "block",
              }}
            >
              Tecnologias
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={0.8}>
              {portfolio.languages.map((lang) => (
                <Chip
                  key={lang}
                  label={lang}
                  size="small"
                  sx={{
                    background: chipBg,
                    color: chipColor,
                    border: `1px solid ${chipBorder}`,
                    fontWeight: 600,
                    fontSize: "0.72rem",
                  }}
                />
              ))}
            </Stack>
          </Box>

          {/* CTA */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              py: 1.2,
              background: "linear-gradient(135deg, #00B4D8 0%, #0077B6 100%)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.9rem",
              borderRadius: "12px",
              boxShadow: "0 6px 20px rgba(0,180,216,0.3)",
              "&:hover": {
                background: "linear-gradient(135deg, #0077B6 0%, #00B4D8 100%)",
                boxShadow: "0 10px 28px rgba(0,180,216,0.4)",
                transform: "translateY(-2px)",
              },
              transition: "all 0.25s ease",
            }}
          >
            🔗 Ver no GitHub
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

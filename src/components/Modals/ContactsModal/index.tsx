import { Box, Grid2, Modal, Typography, useMediaQuery } from "@mui/material";
import linkedinRound from "../../../assets/Portfolio/linkedinRound.png";
import whatsapp from "../../../assets/Portfolio/whatsapp.png";
import mail from "../../../assets/Portfolio/mail.png";

type ModalProjectCard = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ContactsModal: React.FC<ModalProjectCard> = ({
  open,
  setOpen,
}) => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { md: "60%", sm: "90%", lg: 900, xs: "90%" },
          bgcolor: "primary.main",
          boxShadow: 20,
          p: 4,
          display: { lg: "flex" },
          flexDirection: "column",
          textAlign: { xs: "center", lg: "initial" },
        }}
      >
        <Typography
          mb={5}
          variant={!isMobile ? "h6" : "h5"}
          color="secondary"
          textAlign={"center"}
        >
          Vamos conversar !{" "}
        </Typography>
        <Typography
          sx={{
            position: "absolute",
            top: 10,
            right: !isMobile ? 20 : 10,
            fontSize: 20,
            cursor: "pointer",
          }}
          color="secondary"
          onClick={() => setOpen(false)}
        >
          X
        </Typography>
        <Grid2
          container
          justifyContent={isMobile ? "center" : "space-evenly"}
          gap={isMobile ? 5 : 10}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={3}
            sx={{ 
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                "& img": {
                  filter: "brightness(1.2)",
                }
              }
            }}
            onClick={() => {
              openInNewTab(
                "https://www.linkedin.com/in/leonardo-panigassi-imenes-871b7a132/"
              );
            }}
          >
            <Box
              component="img"
              src={linkedinRound}
              alt={`linkedinImg`}
              sx={{ 
                objectFit: "contain",
                transition: "all 0.3s ease",
                filter: "brightness(0.9)",
              }}
              width={{ xs: "50px" }}
            />
            <Typography variant={!isMobile ? "h6" : "body2"} color="primary">
              LinkedIn
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={3}
            sx={{ 
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                "& img": {
                  filter: "brightness(1.2)",
                }
              }
            }}
            onClick={() => {
              window.open(
                `https://wa.me/+5519997256706?text=${encodeURI(
                  "Ola Leo, gostaria trocar uma ideia"
                )}`,
                "_blank"
              );
            }}
          >
            <Box
              component="img"
              src={whatsapp}
              alt={`whatsappImg`}
              sx={{ 
                objectFit: "contain",
                transition: "all 0.3s ease",
                filter: "brightness(0.9)",
              }}
              width={{ xs: "50px" }}
            />
            <Typography variant={!isMobile ? "h6" : "body2"} color="primary">
              WhatsApp
            </Typography>
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={3}
            sx={{ 
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                "& img": {
                  filter: "brightness(1.2)",
                }
              }
            }}
          >
            <Box
              component="img"
              src={mail}
              alt={`mailImg`}
              sx={{ 
                objectFit: "contain",
                transition: "all 0.3s ease",
                filter: "brightness(0.9)",
              }}
              width={{ xs: "50px" }}
              onClick={() => {
                window.open(
                  "mailto:leonardoimenes@hotmail.com?subject=Assunto&body=Ola, Gostaria de trocar uma ideia"
                );
              }}
            />
            <Typography variant={!isMobile ? "h6" : "body2"} color="primary">
              Email
            </Typography>
          </Box>
        </Grid2>
        <Box
          display={"flex"}
          alignItems={"center"}
          textAlign={"center"}
          justifyContent={"center"}
          m={5}
          onClick={() => {
            openInNewTab("https://github.com/LeoImenes");
          }}
        >
          <Typography variant={!isMobile ? "h6" : "body2"} color="primary">
            Ou você pode vizualizar alguns projetos no meu{" "}
            <a style={{ textDecoration: "underline", cursor: "pointer" }}>
              GitHub
            </a>
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

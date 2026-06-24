import { Box, Grid2, Typography, useMediaQuery } from "@mui/material";
import { useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";
import "./app.css";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Header } from "./components/header/Header";
import PortfolioCard from "./components/ProjectsCard";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import { Projects } from "./constants/projects";
import { useDarkMode } from "./hooks/useDarkMode";
import { PublicProjects } from "./constants/publicProjects";
import PublicProjectCard from "./components/PublicProjectCard";

function App() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const isSmallMobile = useMediaQuery("(max-width:480px)");
  const { darkMode } = useDarkMode();
  const date = new Date();
  const [scope, animate] = useAnimate();
  const [scopeBox, animateBox] = useAnimate();
  const [showText, setShowText] = useState(false);
  const isInView = useInView(scopeBox, { once: true });

  useEffect(() => {
    const controls = animate([[scope.current, { x: ["-26%", "0%"] }]]);
    controls.speed = 0.5;
    return () => controls.stop();
  }, []);

  useEffect(() => {
    if (isInView) {
      const controls = animateBox([[scopeBox.current, { opacity: [0, 1] }]]);
      controls.speed = 0.15;
      return () => controls.stop();
    }
  }, [isInView]);

  const handleShowText = () => setShowText((prev) => !prev);

  return (
    <Box sx={{ backgroundColor: "primary.main" }}>
      <Header />
      <AboutMe />

      {/* ── Sobre mim ── */}
      <Box
        id="about-text"
        sx={{
          px: { xs: 3, sm: 5, md: 10 },
          pt: { xs: 3, md: 4 },
          pb: { xs: 2, md: 3 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          textAlign={isMobile ? "center" : "start"}
          display="flex"
          flexDirection="column"
          sx={{
            width: "100%",
            maxWidth: "860px",
            position: "relative",
            overflow: "hidden",
            background: darkMode
              ? "linear-gradient(145deg, rgba(22,37,54,0.85) 0%, rgba(13,27,42,0.95) 100%)"
              : "#ffffff3a",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: `1px solid ${
              darkMode ? "rgba(0,180,216,0.18)" : "rgba(0,119,182,0.14)"
            }`,
            borderRadius: "24px",
            p: { xs: 3.5, md: 5 },
            boxShadow: darkMode
              ? "0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)"
              : "0 8px 32px rgba(0,119,182,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background:
                "linear-gradient(90deg, transparent 0%, #00B4D8 50%, transparent 100%)",
              opacity: darkMode ? 0.5 : 0.35,
              borderRadius: "24px 24px 0 0",
            },
          }}
        >
          {/* ── Header: emoji + label ── */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 0.6,
              mb: 3,
              pb: 2.5,
              borderBottom: `1px solid ${
                darkMode ? "rgba(0,180,216,0.1)" : "rgba(0,119,182,0.08)"
              }`,
            }}
          >
            <Box
              sx={{
                fontSize: { xs: "2rem", md: "4rem" },
                lineHeight: 1,
                animation: "floatEmoji 3.5s ease-in-out infinite",
                userSelect: "none",
                filter: "drop-shadow(0 4px 8px rgba(0,180,216,0.25))",
              }}
            >
              👨‍💻
            </Box>
            <Typography
              variant="overline"
              color="secondary"
              sx={{
                letterSpacing: 3.5,
                fontWeight: 700,
                fontSize: "1.3rem",
                mt: 0.3,
              }}
            >
              Quem sou eu
            </Typography>
            <Box
              sx={{
                width: 40,
                height: 2,
                borderRadius: 99,
                background:
                  "linear-gradient(90deg, transparent, #00B4D8, transparent)",
                mt: 0.2,
                opacity: 0.7,
              }}
            />
          </Box>

          {/* ── Text with inline quotes ── */}
          <Box sx={{ px: { xs: 0, md: 1 } }}>
            <Box
              component="span"
              sx={{
                fontSize: { xs: "3.5rem", md: "4.2rem" },
                lineHeight: 0,
                verticalAlign: "-0.5em",
                color: darkMode ? "#00B4D8" : "#0077B6",
                opacity: 0.22,
                fontFamily: "Georgia, serif",
                animation: "floatQuote 5s ease-in-out infinite",
                display: "inline-block",
                mr: 0.8,
                userSelect: "none",
              }}
            >
              &ldquo;
            </Box>

            <Typography
              component="span"
              variant="body1"
              className="aboutMeText"
              ref={scope}
              sx={{
                color: darkMode ? "#e8e8e8" : "#475569",
                lineHeight: 1.9,
                fontSize: { xs: "0.92rem", md: "0.97rem" },
                display: "inline",
                letterSpacing: "0.1px",
              }}
            >
              Sou Desenvolvedor de Software com experiência no desenvolvimento
              de aplicações web e mobile utilizando ReactJS, React Native,
              TypeScript e tecnologias do ecossistema JavaScript. Atualmente
              atuo na criação, manutenção e evolução de produtos digitais,
              participando desde o desenvolvimento de novas funcionalidades até
              a publicação de aplicativos nas lojas da Apple e Google. Tenho
              experiência com testes automatizados, integrações com APIs,
              Firebase, Google Analytics, Crashlytics, CI/CD e desenvolvimento
              de backoffices com Strapi. Busco sempre criar soluções escaláveis,
              performáticas e com foco na experiência do usuário, aplicando boas
              práticas de desenvolvimento, Clean Code e metodologias ágeis. Sou
              formado em Ciências da Computação, técnico em Análise e
              Desenvolvimento de Sistemas e atualmente estou me especializando
              em Engenharia de Software. Além da experiência profissional, gosto
              de explorar novas tecnologias, desenvolver projetos pessoais e
              enfrentar desafios de programação para continuar evoluindo como
              desenvolvedor.
            </Typography>

            <Box
              component="span"
              sx={{
                fontSize: { xs: "3.5rem", md: "4.2rem" },
                lineHeight: 0,
                verticalAlign: "-0.5em",
                color: darkMode ? "#00B4D8" : "#0077B6",
                opacity: 0.22,
                fontFamily: "Georgia, serif",
                animation: "floatQuote 5s ease-in-out infinite",
                animationDelay: "2.5s",
                display: "inline-block",
                ml: 0.8,
                userSelect: "none",
              }}
            >
              &rdquo;
            </Box>
          </Box>

          {isMobile && (
            <Typography
              onClick={handleShowText}
              variant="body2"
              mt={1.5}
              sx={{
                color: darkMode ? "#00B4D8" : "#0077B6",
                textDecoration: "underline",
                cursor: "pointer",
                fontWeight: 600,
                textAlign: "start",
              }}
            >
              {!showText ? "Ler mais..." : "Ler menos..."}
            </Typography>
          )}
        </Box>
      </Box>

      {/* ── Skills ── */}
      <Box sx={{ px: { xs: 2, sm: 4, md: 10 }, pt: { xs: 2, md: 3 }, pb: 0 }}>
        <SkillsSection isMobile={isMobile} isSmallMobile={isSmallMobile} />
      </Box>

      {/* ── Public Projects section ── */}
      <Box
        id="public-projects"
        ref={scopeBox}
        sx={{
          mt: { xs: 3, md: 5 },
          pb: { xs: 6, md: 10 },
          px: { xs: 2, md: 6 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box textAlign="center" mb={5}>
          <Typography
            variant="overline"
            color="secondary"
            sx={{ letterSpacing: 2.5, fontWeight: 700, fontSize: "0.68rem" }}
          >
            Um pouco do meu trabalho
          </Typography>
          <Typography
            variant={!isMobile ? "h3" : "h4"}
            fontWeight={800}
            sx={{ color: darkMode ? "#E2E8F0" : "#0D1B2A", mt: 0.5 }}
          >
            Projetos publicados
          </Typography>
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
          <Typography
            variant="body2"
            sx={{
              mt: 1.5,
              color: darkMode ? "#4A6078" : "#94A3B8",
              maxWidth: "440px",
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Uma seleção de projetos profissionais que mostram minha experiência
            e habilidades como desenvolvedor.
          </Typography>
        </Box>

        <Grid2
          container
          justifyContent="center"
          spacing={{ xs: 2, sm: 3 }}
          sx={{ width: "100%", maxWidth: "1200px" }}
        >
          {PublicProjects.map((project, index) => (
            <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <PublicProjectCard project={project} />
            </Grid2>
          ))}
        </Grid2>
      </Box>

      {/* ── Projects section ── */}
      <Box
        id="projects"
        ref={scopeBox}
        sx={{
          mt: { xs: 3, md: 5 },
          pb: { xs: 6, md: 10 },
          px: { xs: 2, md: 6 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box textAlign="center" mb={5}>
          <Typography
            variant="overline"
            color="secondary"
            sx={{ letterSpacing: 2.5, fontWeight: 700, fontSize: "0.68rem" }}
          >
            O que construí
          </Typography>
          <Typography
            variant={!isMobile ? "h3" : "h4"}
            fontWeight={800}
            sx={{ color: darkMode ? "#E2E8F0" : "#0D1B2A", mt: 0.5 }}
          >
            Projetos Acadêmicos
          </Typography>
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
          <Typography
            variant="body2"
            sx={{
              mt: 1.5,
              color: darkMode ? "#4A6078" : "#94A3B8",
              maxWidth: "440px",
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Uma seleção que mostra alguns experimentos e projetos acadêmicos que
            desenvolvi durante minha jornada de aprendizado.
          </Typography>
        </Box>

        <Grid2
          container
          justifyContent="start"
          sx={{ width: "100%", maxWidth: "1200px" }}
        >
          {Projects.map((project, index) => (
            <PortfolioCard key={index} portfolio={project} />
          ))}
        </Grid2>
      </Box>

      {/* ── Footer ── */}
      <Box
        component="footer"
        sx={{
          textAlign: "center",
          py: 3,
          borderTop: `1px solid ${
            darkMode ? "rgba(0,180,216,0.1)" : "rgba(0,119,182,0.08)"
          }`,
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: darkMode ? "#4A6078" : "#94A3B8", fontSize: "0.8rem" }}
        >
          © {date.getUTCFullYear()} Leonardo Panigassi Imenes — Todos os
          direitos reservados
        </Typography>
      </Box>
    </Box>
  );
}

export default App;

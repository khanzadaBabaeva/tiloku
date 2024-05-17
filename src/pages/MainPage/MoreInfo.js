import React, { useMemo } from "react";
import { Box, Container, Typography } from "@mui/material";

const MoreInfo = () => {
  const blockRefs = useMemo(
    () => [React.createRef(), React.createRef(), React.createRef()],
    []
  );
  const [isVisible, setIsVisible] = React.useState([false, false, false]);

  React.useEffect(() => {
    const observers = blockRefs.map(
      (ref, index) =>
        new IntersectionObserver(
          ([entry]) => {
            setIsVisible((prev) => {
              const newVisible = [...prev];
              newVisible[index] = entry.isIntersecting;
              return newVisible;
            });
          },
          {
            rootMargin: "-35% 0px -25% 0px",
          }
        )
    );

    blockRefs.forEach((ref, index) => {
      const currentRef = ref.current;
      if (currentRef) {
        observers[index].observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observers[index].unobserve(currentRef);
        }
      };
    });
  }, [blockRefs]);
  console.log(blockRefs[0]?.current);
  return (
    <Box position="relative" zIndex={1} py={7} mt={6}>
      <Container maxWidth="md">
        <Box display="flex" py={6} flexDirection="column" gap={5} width="100%">
          <Box
            sx={{
              width: "500px",

              p: 4,
              border: "1px solid",
              backgroundColor: "primary.main",
              borderRadius: 5,
              overflow: "hidden",
              transition: "all 0.5s ease",
              height: "min-content",
              maxHeight: isVisible[0] ? "400px" : "100px",
              marginLeft: isVisible[0] ? "0%" : "calc(100% - 500px)",
              marginRight: isVisible[0] ? "calc(100% - 500px)" : "0%",
            }}
            ref={blockRefs[0]}
          >
            <Typography variant="h4">Видеосабактар</Typography>
            <Typography variant="body1">
              Видео формат минималдуу убакыт аралыгында максималдуу маалыматты
              жеткирүүгө мүмкүндүк берет. Бул окуучулар үчүн ыңгайлуу жана
              түшүнүктүү. Ошентип, алар бир эле учурда мугалимдин эмне кылып
              жатканын көрүп, аны угуп, кошумча шилтемелерди окуй алышат. Эгерде
              ал алаксып же бир нерсени түшүнбөсө, ал жөн гана сабакты артка
              жылдырып, түшүнүксүз учурду кайра карап чыга алат.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "500px",

              p: 4,
              border: "1px solid",
              backgroundColor: "secondary.main",
              borderRadius: 5,
              textAlign: "right",
              marginLeft: !isVisible[1] ? "0%" : "calc(100% - 500px)",
              marginRight: !isVisible[1] ? "calc(100% - 500px)" : "0%",
              overflow: "hidden",
              transition: "all 0.5s ease",
              height: "min-content",
              maxHeight: isVisible[1] ? "400px" : "100px",
            }}
            ref={blockRefs[1]}
          >
            <Typography variant="h4">Көнүгүүлөр</Typography>
            <Typography variant="body1">Маалымат</Typography>
          </Box>
          <Box
            sx={{
              width: "500px",

              p: 4,
              border: "1px solid",
              backgroundColor: "warning.main",
              overflow: "hidden",
              borderRadius: 5,
              transition: "all 0.5s ease",
              height: "min-content",
              maxHeight: isVisible[2] ? "400px" : "100px",
              marginLeft: isVisible[2] ? "0%" : "calc(100% - 500px)",
              marginRight: isVisible[2] ? "calc(100% - 500px)" : "0%",
            }}
            ref={blockRefs[2]}
          >
            <Typography variant="h4">Тесттер</Typography>
            <Typography variant="body1">Маалымат</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MoreInfo;

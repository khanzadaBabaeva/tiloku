import React, { useState, useEffect } from "react";
import { Box, Typography, Container } from "@mui/material";

const AnimatedMenu = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  console.log(activeIndex);

  const items = [
    {
      title: "Видеосабактар",
      descriptionSmall: "Маалымат",
      description:
        "Видео формат минималдуу убакыт аралыгында максималдуу маалыматты жеткирүүгө мүмкүндүк берет. Бул окуучулар үчүн ыңгайлуу жана түшүнүктүү. Ошентип, алар бир эле учурда мугалимдин эмне кылып жатканын көрүп, аны угуп, кошумча шилтемелерди окуй алышат. Эгерде ал алаксып же бир нерсени түшүнбөсө, ал жөн гана сабакты артка жылдырып, түшүнүксүз учурду кайра карап чыга алат.",
      color: "primary.main",
    },
    {
      title: "Көнүгүүлөр",
      descriptionSmall: "Маалымат",
      description:
        "Видео формат минималдуу убакыт аралыгында максималдуу маалыматты жеткирүүгө мүмкүндүк берет. Бул окуучулар үчүн ыңгайлуу жана түшүнүктүү. Ошентип, алар бир эле учурда мугалимдин эмне кылып жатканын көрүп, аны угуп, кошумча шилтемелерди окуй алышат. Эгерде ал алаксып же бир нерсени түшүнбөсө, ал жөн гана сабакты артка жылдырып, түшүнүксүз учурду кайра карап чыга алат.",

      color: "secondary.main",
    },
    {
      title: "Тесттер",
      descriptionSmall: "Маалымат",
      description:
        "Видео формат минималдуу убакыт аралыгында максималдуу маалыматты жеткирүүгө мүмкүндүк берет. Бул окуучулар үчүн ыңгайлуу жана түшүнүктүү. Ошентип, алар бир эле учурда мугалимдин эмне кылып жатканын көрүп, аны угуп, кошумча шилтемелерди окуй алышат. Эгерде ал алаксып же бир нерсени түшүнбөсө, ал жөн гана сабакты артка жылдырып, түшүнүксүз учурду кайра карап чыга алат.",

      color: "warning.main",
    },
  ];

  return (
    <Box position="relative" zIndex={1} py={7} mt={6}>
      <Container maxWidth="lg">
        <Box
          display="flex"
          py={6}
          gap={5}
          width="100%"
          justifyContent="space-between"
        >
          {items.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: "500px",
                p: 4,
                mb: 3,
                borderRadius: 5,
                overflow: "hidden",
                textAlign: "center",
                transition: "all 0.5s ease",
                height: "100%",
                border: "1px solid",
                backgroundColor:
                  activeIndex === index ? item.color : "transparent",
              }}
            >
              <Typography variant="h4">{item.title}</Typography>
              <Typography
                variant="body1"
                sx={{
                  transition: "all 0.5s ease",
                  height: "min-content",
                  display: activeIndex === index ? "none" : "block",
                  opacity: activeIndex === index ? 0 : 1,
                }}
              >
                {item.descriptionSmall}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  transition: "all 0.5s ease",
                  height: "min-content",
                  maxHeight: activeIndex === index ? "500px" : "0px",
                  opacity: activeIndex === index ? 1 : 0,
                }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default AnimatedMenu;

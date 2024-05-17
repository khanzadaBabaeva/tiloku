import React from "react";
import { Link } from "react-router-dom";

import { Box, Container, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "components/Logo";
import BookIconFilled from "assets/images/icons/book-icon-filled";
import AnimatedMenu from "./AnimatedMenu";

const MainPage = () => {
  const theme = useTheme();
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Box position="relative" zIndex={1} sx={{ minHeight: "100vh" }}>
        <Container maxWidth="md">
          <Box
            display="flex"
            py={6}
            minHeight="700px"
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            <Box sx={{ height: "100%", width: "60%", textAlign: "center" }}>
              <Box>
                <Logo fontSize="large" />
              </Box>
              <Typography variant="h4">
                Биздин сайттын максаты – орто мектептерде кыргыз тилин үйрөнүү
                үчүн билим берүү ресурстарына жеткиликтүүлүктү камсыз кылуу. Бул
                окуу китептерин жүктөп алуу, тапшырмаларды жана тесттерди
                аткаруу, видеосабактарды көрүү мүмкүнчүлүгүн камтыйт.
              </Typography>
              <Button
                component={Link}
                to="/class"
                color="primary"
                variant="contained"
                sx={{ mt: 2, textDecoration: "none" }}
              >
                Баштоо
              </Button>
            </Box>
          </Box>
        </Container>
        <Box
          position="absolute"
          zIndex={-1}
          width="35vw"
          height="35vw"
          sx={{ transform: "rotate(-25deg)" }}
          left={-50}
          top={-70}
        >
          <BookIconFilled
            borderColor={theme.palette.primary.main}
            color="transparent"
            style={{ position: "absolute", top: -40, left: 40 }}
          />
        </Box>
        <Box
          position="absolute"
          zIndex={-1}
          width="10vw"
          height="10vw"
          sx={{ transform: "rotate(15deg)" }}
          right="10%"
          bottom="10%"
        >
          <BookIconFilled
            borderColor={theme.palette.primary.main}
            color="transparent"
            style={{ position: "absolute" }}
          />
          <BookIconFilled
            borderColor={"black"}
            color={"#3AB8EB"}
            style={{ position: "absolute", top: -15, left: 15 }}
          />
        </Box>
        <Box
          position="absolute"
          zIndex={-1}
          width="25vw"
          height="25vw"
          sx={{ transform: "rotate(-25deg)" }}
          left="10%"
          bottom="-10%"
        >
          <BookIconFilled
            borderColor={"black"}
            color={theme.palette.warning.main}
            style={{ position: "absolute" }}
          />
          <BookIconFilled
            borderColor={"#3AB8EB"}
            color="transparent"
            style={{ position: "absolute", top: -30, left: -30 }}
          />
        </Box>
        <Box
          position="absolute"
          zIndex={-1}
          width="25vw"
          height="25vw"
          sx={{ transform: "rotate(-25deg)" }}
          right="-3%"
          top="0%"
        >
          <BookIconFilled
            borderColor={"black"}
            color={theme.palette.primary.main}
            style={{ position: "absolute" }}
          />
          <BookIconFilled
            borderColor={theme.palette.warning.main}
            color="transparent"
            style={{ position: "absolute", top: -30, left: 30 }}
          />
        </Box>
      </Box>
      <AnimatedMenu />
    </Box>
  );
};

export default MainPage;

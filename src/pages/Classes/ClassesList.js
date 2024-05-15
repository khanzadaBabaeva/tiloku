import React from "react";
import { Link } from "react-router-dom";

// material-ui
import { Grid, Card, Box, Typography, Button } from "@mui/material";
import classes from "menu-items/classes";
const ClassesList = () => {
  return (
    <Grid container spacing={3}>
      {classes.children.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card sx={{ width: "250px", mx: "auto", height: "100%" }}>
            <Box height="200px">
              {item?.photo ? (
                <img
                  src={require("assets/images/books/" + item?.photo)}
                  alt="book"
                  height="100%"
                  width="100%"
                  style={{ objectFit: "cover", objectPosition: "top right" }}
                />
              ) : (
                <Box
                  height="100%"
                  width="100%"
                  backgroundColor="primary.main"
                  opacity={0.1}
                ></Box>
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                p: 2,
                gap: 1,
                height: "30%",
              }}
            >
              <Box>
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="subtitle2">{item.description}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 1,
                  alignItems: "flex-end",
                }}
              >
                <Button variant="outlined">
                  <Typography
                    variant="body1"
                    color="primary"
                    component="a"
                    href={require("assets/books/" + item?.book)}
                    target="_blank"
                    sx={{ textDecoration: "none" }}
                    download
                  >
                    Көчүрүү
                  </Typography>
                </Button>
                <Button variant="outlined">
                  <Typography
                    component={Link}
                    to={item.url}
                    variant="body1"
                    color="primary"
                    sx={{ textDecoration: "none" }}
                  >
                    Окуу
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ClassesList;

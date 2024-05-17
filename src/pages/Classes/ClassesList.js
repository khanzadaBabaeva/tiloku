import React from "react";
import { Link } from "react-router-dom";

// material-ui
import { Grid, Card, Box, Typography, Button } from "@mui/material";
import classes from "menu-items/classes";
const ClassesList = () => {
  return (
    <Grid container spacing={3}>
      {classes.children.map((item, index) => {
        const current = index % 3;
        let color = "primary.main";
        if (current === 0) color = "primary.main";
        else if (current === 1) color = "secondary.main";
        else color = "warning.main";
        return (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card
              sx={{
                width: "250px",
                mx: "auto",
                height: "100%",
                border: "1px solid",
                borderColor: color,
              }}
            >
              <Box
                height="200px"
                sx={{ borderBottom: "1px solid", borderColor: color }}
              >
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
                    backgroundColor={color}
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
                  <Typography variant="subtitle2">
                    {item.description}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 1,
                    alignItems: "flex-end",
                  }}
                >
                  <Button variant="outlined" color={color.replace(".main", "")}>
                    <Typography
                      variant="body1"
                      color={color}
                      component="a"
                      href={require("assets/books/" + item?.book)}
                      target="_blank"
                      sx={{ textDecoration: "none" }}
                      download
                    >
                      Көчүрүү
                    </Typography>
                  </Button>
                  <Button variant="outlined" color={color.replace(".main", "")}>
                    <Typography
                      component={Link}
                      to={item.url}
                      variant="body1"
                      color={color}
                      sx={{ textDecoration: "none" }}
                    >
                      Окуу
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ClassesList;

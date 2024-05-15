import React from "react";

import { Box } from "@mui/material";

import Book from "pages/Book/index";

const AdditionalBooks = () => {
  return (
    <Box display="flex" justifyContent="center" flexWrap="wrap">
      <Book />
    </Box>
  );
};

export default AdditionalBooks;

// material-ui
import {
  Box,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

// assets
import { SearchOutlined } from "@ant-design/icons";
import { useState, useRef } from "react";
import classes from "menu-items/classes";
import { useSelector } from "react-redux";

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

const Search = () => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const subChapters = useSelector((state) => state.subChapters);
  const [suggestions, setSuggestions] = useState([]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setInput("");
  };
  const handleChange = (e) => {
    setInput(e.target.value);
    setSuggestions(() => [
      ...classes.children.filter(
        (item) =>
          item.title.toLowerCase().includes(e.target.value.toLowerCase()) &&
          item
      ),
    ]);
    setSuggestions((prev) => [
      ...prev,
      ...classes.children
        .flatMap((item) => item.children)
        .concat()
        .filter(
          (item) =>
            item.title.toLowerCase().includes(e.target.value.toLowerCase()) &&
            item
        ),
    ]);
    setSuggestions((prev) => [
      ...prev,
      ...subChapters
        .flatMap((item) => item.children)
        .concat()
        .filter(
          (item) =>
            item.title.toLowerCase().includes(e.target.value.toLowerCase()) &&
            item
        ),
    ]);
  };
  return (
    <Box sx={{ width: "auto", ml: { xs: 0, md: 1 } }} position="relative">
      <FormControl sx={{ width: { xs: "100%", md: 224 } }}>
        <OutlinedInput
          size="small"
          id="header-search"
          value={input}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={() => {
            setTimeout(() => {
              setIsFocused(false);
            }, 200);
          }}
          startAdornment={
            <InputAdornment position="start" sx={{ mr: -0.5 }}>
              <SearchOutlined />
            </InputAdornment>
          }
          aria-describedby="header-search-text"
          inputProps={{
            "aria-label": "weight",
          }}
          placeholder="Ctrl + K"
        />
      </FormControl>
      {suggestions.length > 0 && input && isFocused && (
        <Box position="absolute" left="0" right="0" top="100%">
          <Box
            sx={{ backgroundColor: "secondary.lighter", p: 1 }}
            maxHeight={400}
            overflow="auto"
            onMouseEnter={handleFocus}
            ref={inputRef}
          >
            {suggestions.map((item) => (
              <Typography
                component={Link}
                to={item.url}
                key={item.id}
                sx={{
                  display: "block",
                  textDecoration: "none",
                  color: "black",
                  "&:hover": { color: "primary.main" },
                }}
                onClick={handleBlur}
              >
                {item.title.length > 25
                  ? item.title.slice(0, 25) + "..."
                  : item.title}
              </Typography>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Search;

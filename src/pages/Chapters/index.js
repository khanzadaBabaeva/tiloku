import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Select, Typography, Button, MenuItem } from "@mui/material";
import { openPage } from "store/reducers/actions";

const Chapters = () => {
  const navigate = useNavigate();
  const { chapterId, id } = useParams();
  const dispatch = useDispatch();

  const subChapters =
    useSelector(
      (state) =>
        state.subChapters.find(
          (item) => item.parent === "class" + id + "-" + chapterId
        )?.children
    ) || [];
  const [subChapterId, setSubChapterId] = React.useState(subChapters[0]?.id);

  const handleItemClick = (itemId) => {
    setSubChapterId(itemId);
    const item = subChapters.find((item) => item.id === itemId);
    dispatch(openPage({ openedPage: item?.page }));
    navigate(item?.url);
    console.log(item);
  };

  return (
    <Select
      sx={{ maxWidth: "500px", overflowY: "auto" }}
      p={2}
      onChange={(e) => handleItemClick(e.target.value)}
      value={subChapterId}
    >
      {subChapters.map((item, i) => (
        <MenuItem key={item.id} value={item.id}>
          <Button
            sx={{
              width: "fit-content",
              textAlign: "left",
              textDecoration: "none",
            }}
            onClick={() => handleItemClick(item)}
            size="small"
          >
            <Typography
              textAlign="left"
              textTransform="none"
              color="textPrimary"
              sx={{ textDecoration: "none" }}
            >
              {i + 1}. {item.title}
            </Typography>
          </Button>
        </MenuItem>
      ))}
    </Select>
  );
};

export default Chapters;

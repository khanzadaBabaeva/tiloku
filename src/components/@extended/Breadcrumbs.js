import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import classes from "menu-items/classes";
import { useSelector } from "react-redux";
import { additionalBooks } from "menu-items/additionalBooks";

const Breadcrumbs = () => {
  const { subChapters } = useSelector((state) => state);
  const { id, chapterId, subChapterId } = useParams();
  const classItem = id
    ? [...classes.children, ...additionalBooks.children].find(
        (item) => item.id === id
      )
    : null;
  const title = id ? classItem?.title + "." : null;
  const chapterItem = chapterId
    ? classItem?.children.find((item) => item.id === id + "-" + chapterId)
    : null;
  const chapterTitle = chapterId ? chapterItem?.title + "." : null;

  const subChapterItem = subChapterId
    ? subChapters
        .find((item) => item.parent === id + "-" + chapterId)
        .children.find(
          (item) => item.id === id + "-" + chapterId + "-" + subChapterId
        )
    : null;

  const subChapterTitle = subChapterId ? subChapterItem?.title + "." : null;

  return (
    <Box width="90%" textAlign="center">
      <Typography variant="h5" color="text.primary">
        {title} {chapterTitle} {subChapterTitle}
      </Typography>
    </Box>
  );
};

Breadcrumbs.propTypes = {
  navigation: PropTypes.object,
  title: PropTypes.bool,
};

export default Breadcrumbs;

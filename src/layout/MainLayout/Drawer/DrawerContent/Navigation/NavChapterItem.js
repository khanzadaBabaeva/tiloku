import { forwardRef, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// material-ui
import { useTheme } from "@mui/material/styles";
import { ListItemButton, ListItemText, Typography } from "@mui/material";

// project import
import { activeSubChapter } from "store/reducers/menu";
import { activeVideo, openPage } from "store/reducers/actions";

const NavChapterItem = ({ item, level, index, parentIndex }) => {
  const theme = useTheme();
  const { subChapterId } = useParams();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const { drawerOpen, openSubChapter } = useSelector((state) => state.menu);

  let itemTarget = "_self";
  if (item.target) {
    itemTarget = "_blank";
  }

  let listItemProps = {
    component: forwardRef((props, ref) => (
      <Link ref={ref} {...props} to={item.url} target={itemTarget} />
    )),
  };
  if (item?.external) {
    listItemProps = { component: "a", href: item.url, target: itemTarget };
  }

  const isSelected =
    openSubChapter === item.id || item.id.toString().endsWith(subChapterId);

  // active menu item on page load
  useEffect(() => {
    if (pathname.includes(item.url)) {
      dispatch(activeSubChapter({ openSubChapter: item.id }));
      dispatch(openPage({ openedPage: item?.page }));
      dispatch(activeVideo({ openVideo: false }));
    }
    // eslint-disable-next-line
  }, [pathname]);

  const textColor = "text.primary";
  const iconSelectedColor = "warning.main";
  return (
    <>
      <ListItemButton
        {...listItemProps}
        disabled={item.disabled}
        selected={isSelected}
        sx={{
          zIndex: 1201,
          borderBottom: `1px solid ${theme.palette.divider}`,
          pl: drawerOpen ? `${level * 35}px` : 1.5,
          py: !drawerOpen && level === 1 ? 1.25 : 0,
          ...(drawerOpen && {
            "&:hover": {
              bgcolor: "warning.lighter",
            },
            "&.Mui-selected": {
              bgcolor: "warning.lighter",
              borderRight: `2px solid ${theme.palette.warning.main}`,
              color: iconSelectedColor,
              "&:hover": {
                color: iconSelectedColor,
                bgcolor: "warning.lighter",
              },
            },
          }),
          ...(!drawerOpen && {
            "&:hover": {
              bgcolor: "transparent",
            },
            "&.Mui-selected": {
              "&:hover": {
                bgcolor: "transparent",
              },
              bgcolor: "transparent",
            },
          }),
        }}
      >
        {(drawerOpen || (!drawerOpen && level !== 1)) && (
          <ListItemText
            primary={
              <Typography
                variant="h6"
                sx={{
                  color: isSelected ? iconSelectedColor : textColor,
                  "&::first-letter": { textTransform: "uppercase" },
                  textTransform: "lowercase",
                }}
                whiteSpace="wrap"
              >
                {parentIndex}. {index}. {item.title}
              </Typography>
            }
          />
        )}
      </ListItemButton>
    </>
  );
};

export default NavChapterItem;

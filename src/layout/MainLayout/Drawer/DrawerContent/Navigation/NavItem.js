import PropTypes from "prop-types";
import { forwardRef, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  Chip,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  List,
  Collapse,
} from "@mui/material";

// project import
import { activeItem } from "store/reducers/menu";
import NavClassItem from "./NavClassItem";
import { activeVideo, openBook, openPage } from "store/reducers/actions";

// ==============================|| NAVIGATION - LIST ITEM ||============================== //

const NavItem = ({ item, level }) => {
  const { id } = useParams();
  const [hide, setHide] = useState(id ? true : false);
  const theme = useTheme();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const { drawerOpen, openItem } = useSelector((state) => state.menu);

  let itemTarget = "_self";
  if (item.target) {
    itemTarget = "_blank";
  }

  let listItemProps = {
    component: forwardRef((props, ref) => (
      <Link
        ref={ref}
        {...props}
        to={openItem === item.id ? "/class" : item.url}
        target={itemTarget}
      />
    )),
  };
  if (item?.external) {
    listItemProps = { component: "a", href: item.url, target: itemTarget };
  }

  const itemHandler = (itemId) => {
    dispatch(activeItem({ openItem: itemId === openItem ? null : itemId }));

    dispatch(openBook({ openedBook: item?.book }));
    dispatch(openPage({ openedPage: 1 }));
    dispatch(activeVideo({ openVideo: false }));
  };

  const Icon = item.icon;
  const itemIcon = item.icon ? (
    <Icon style={{ fontSize: drawerOpen ? "1rem" : "1.25rem" }} />
  ) : (
    false
  );

  const isSelected = openItem === item.id;
  // active menu item on page load
  useEffect(() => {
    if (pathname.includes(item.url)) {
      dispatch(activeItem({ openItem: item.id }));
      dispatch(openBook({ openedBook: item?.book }));
    }
    // eslint-disable-next-line
  }, [pathname]);

  useEffect(() => {
    if (id) {
      setHide("hiding");
      setTimeout(() => {
        setHide(true);
      }, 500);
    } else {
      setHide(false);
    }
  }, [id]);

  const textColor = "text.primary";
  const iconSelectedColor = "primary.main";
  return (
    <>
      <ListItemButton
        {...listItemProps}
        disabled={item.disabled}
        onClick={() => itemHandler(item.id)}
        selected={isSelected}
        className={
          "NavClassItem 1 " +
          (hide === "hiding" && !item.id.includes(id) ? "hiding" : "")
        }
        sx={{
          display:
            hide && hide !== "hiding" && !item.id.includes(id)
              ? "none"
              : "inherit",
          zIndex: 1201,
          borderBottom: `1px solid ${theme.palette.divider}`,
          pl: drawerOpen ? `${level * 28}px` : 1.5,
          py: !drawerOpen && level === 1 ? 1.25 : 1,
          ...(drawerOpen && {
            "&:hover": {
              bgcolor: "primary.lighter",
            },
            "&.Mui-selected": {
              bgcolor: "primary.lighter",
              borderRight: `2px solid ${theme.palette.primary.main}`,
              color: iconSelectedColor,
              "&:hover": {
                color: iconSelectedColor,
                bgcolor: "primary.lighter",
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
        {itemIcon && (
          <ListItemIcon
            sx={{
              minWidth: 28,
              color: isSelected ? iconSelectedColor : textColor,
              ...(!drawerOpen && {
                borderRadius: 1.5,
                width: 36,
                height: 36,
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  bgcolor: "secondary.lighter",
                },
              }),
              ...(!drawerOpen &&
                isSelected && {
                  bgcolor: "primary.lighter",
                  "&:hover": {
                    bgcolor: "primary.lighter",
                  },
                }),
            }}
          >
            {itemIcon}
          </ListItemIcon>
        )}
        {(drawerOpen || (!drawerOpen && level !== 1)) && (
          <ListItemText
            primary={
              <Typography
                variant="h6"
                sx={{ color: isSelected ? iconSelectedColor : textColor }}
              >
                {item.title}
              </Typography>
            }
          />
        )}
        {(drawerOpen || (!drawerOpen && level !== 1)) && item.chip && (
          <Chip
            color={item.chip.color}
            variant={item.chip.variant}
            size={item.chip.size}
            label={item.chip.label}
            avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
          />
        )}
      </ListItemButton>
      {item.children && (
        <Collapse in={isSelected} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pt: 0.5 }}>
            {item.children.map((itemClass, i) => (
              <NavClassItem
                key={itemClass.id}
                index={i + 1}
                item={itemClass}
                level={level}
                parentUrl={item?.url}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number,
};

export default NavItem;

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// material-ui
import { ButtonBase, Typography, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

// project import
import { activeItem } from "store/reducers/menu";
import BookIcon from "assets/images/icons/book-icon";

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ sx, to, ...others }) => {
  const { defaultId } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  return (
    <ButtonBase
      disableRipple
      component={Link}
      onClick={() => dispatch(activeItem({ openItem: [defaultId] }))}
      to={to || "/"}
      sx={sx}
    >
      <Box
        width={others.fontSize === "large" ? "50px" : "37px"}
        height="min-content"
        display="flex"
        sx={{ transform: "rotate(-10deg)" }}
      >
        <BookIcon color={sx?.color} />
      </Box>
      <Typography
        variant="h3"
        color="inherit"
        fontFamily="'Unica One'"
        noWrap
        fontSize={others.fontSize === "large" ? "2.5rem" : "1.5rem"}
        sx={{ ml: 2 }}
      >
        {process.env.REACT_APP_NAME}
      </Typography>
    </ButtonBase>
  );
};

LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string,
};

export default LogoSection;

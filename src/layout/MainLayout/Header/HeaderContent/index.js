// material-ui
import { useMediaQuery } from "@mui/material";

// project import
import Search from "./Search";
import MobileSection from "./MobileSection";
import Breadcrumbs from "components/@extended/Breadcrumbs";

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <>
      {!matchesXs && <Search />}
      {<Breadcrumbs />}

      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;

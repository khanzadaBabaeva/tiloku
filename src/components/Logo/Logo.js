// material-ui
import { useTheme } from "@mui/material/styles";

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = ({ width = "50px", color }) => {
  const theme = useTheme();

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        width={width}
        height="auto"
        viewBox="0 0 246.000000 164.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,164.000000) scale(0.100000,-0.100000)"
          fill={color ? color : theme.palette.primary.main}
          stroke="none"
        >
          <path d="M1112 1630 c-89 -16 -172 -49 -318 -125 -383 -199 -620 -378 -701 -531 -55 -103 -65 -162 -70 -432 -6 -288 0 -364 30 -393 60 -56 366 -106 760 -125 l147 -7 0 327 0 326 239 119 c131 66 241 117 245 114 3 -4 6 -204 6 -445 l0 -438 84 0 c47 0 153 5 238 10 316 22 533 58 613 103 39 22 40 24 48 92 14 119 2 560 -17 629 -53 190 -214 348 -558 550 -152 89 -355 184 -443 206 -93 24 -228 33 -303 20z" />
        </g>
      </svg>
    </>
  );
};

export default Logo;

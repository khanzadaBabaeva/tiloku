import React from "react";

const BookIcon = ({ color, ...props }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 82 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M41 13.3077C41 10.0435 42.2967 6.91298 44.6048 4.60484C46.913 2.2967 50.0435 1 53.3077 1H77.9231C78.7391 1 79.5218 1.32418 80.0988 1.90121C80.6758 2.47825 81 3.26087 81 4.07692V53.3077C81 54.1237 80.6758 54.9064 80.0988 55.4834C79.5218 56.0604 78.7391 56.3846 77.9231 56.3846H53.3077C50.0435 56.3846 46.913 57.6813 44.6048 59.9895C42.2967 62.2976 41 65.4281 41 68.6923"
        stroke={color ? color : "#3D3C3C"}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 53.3077C1 54.1237 1.32417 54.9064 1.90121 55.4834C2.47824 56.0604 3.26087 56.3846 4.07692 56.3846H28.6923C31.9565 56.3846 35.087 57.6813 37.3952 59.9895C39.7033 62.2976 41 65.4281 41 68.6923V13.3077C41 10.0435 39.7033 6.91298 37.3952 4.60484C35.087 2.2967 31.9565 1 28.6923 1H4.07692C3.26087 1 2.47824 1.32418 1.90121 1.90121C1.32417 2.47825 1 3.26087 1 4.07692V53.3077Z"
        stroke={color ? color : "#3D3C3C"}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BookIcon;
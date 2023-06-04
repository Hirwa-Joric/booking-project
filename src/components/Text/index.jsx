import React from "react";

const sizeClasses = {
  txtRalewayRomanExtraBold25: "font-extrabold font-raleway",
  txtRalewayRomanSemiBold22: "font-raleway font-semibold",
  txtInterRegular30: "font-inter font-normal",
  txtInterRegular20: "font-inter font-normal",
  txtRobotoRomanBlack20: "font-black font-roboto",
  txtCabinRegular25: "font-cabin font-normal",
  txtCabinRegular15: "font-cabin font-normal",
  txtCabinRegular26: "font-cabin font-normal",
  txtCabinBold30: "font-bold font-cabin",
  txtCabinBold40: "font-bold font-cabin",
  txtIBMPlexSansRegular12: "font-ibmplexsans font-normal",
  txtCabinRegular22: "font-cabin font-normal",
  txtInterRegular17: "font-inter font-normal",
  txtInterRegular17WhiteA70001: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

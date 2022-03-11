import React, { useEffect, useState } from "react";
import "./responsive-screen.css";
import useMediaQuery from "@mui/material/useMediaQuery";

import { MOBILE_RESOLUTION } from "./screen-resolutions/screen-resolutions";

export default function ResponsiveScreen() {
  const mobile = useMediaQuery(`(min-width:${MOBILE_RESOLUTION})`);
  return (
    <div>
      return <span>{`(min-width:600px) matches: ${mobile}`}</span>;
      <div className="hide-mobile">desktop view</div>
      <div className="hide-desktop">mobile view</div>
    </div>
  );
}

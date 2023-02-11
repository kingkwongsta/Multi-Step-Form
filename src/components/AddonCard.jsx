import React from "react";
import { Checkbox } from "@mui/material";

export default function AddonCard({
  title,
  desc,
  monthly,
  yearly,
  billing,
  handleAddon,
  addon,
}) {
  function handleSelection() {
    handleAddon(title);
  }
  const selected = {
    border: "1px solid hsl(243, 100%, 62%)",
    backgroundColor: "hsl(217, 100%, 97%)",
  };
  const unselected = {
    border: "1px solid hsl(229, 24%, 87%)",
    backgroundColor: "transparent",
  };
  return (
    <div
      className="addoncard-container"
      style={addon.includes(title) ? selected : unselected}
      onClick={() => handleSelection()}
    >
      <div className="addoncard-left">
        <Checkbox />
        <div className="addoncard-text">
          <p className="addoncard-title">{title}</p>
          <p className="addoncard-desc">{desc}</p>
        </div>
      </div>
      <div className="addoncard-price">
        {billing ? <span>+${monthly}/mo</span> : <span>+${yearly}/yr</span>}
      </div>
    </div>
  );
}

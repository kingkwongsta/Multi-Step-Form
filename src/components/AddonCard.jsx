import React from "react";
import { Checkbox } from "@mui/material";

export default function AddonCard({
  title,
  desc,
  monthly,
  yearly,
  billing,
  handleAddon,
}) {
  function handleSelection() {
    handleAddon(title);
  }
  return (
    <div className="addoncard-container" onClick={() => handleSelection()}>
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

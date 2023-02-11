import React from "react";
import Button from "@mui/material/Button";
import AddonCard from "./AddonCard";
import addonsData from "../data/addon";

export default function Addons({ handleAddon, billing, addon }) {
  function renderAddons() {
    return addonsData.map((item, index) => {
      return (
        <AddonCard
          key={index}
          title={item.title}
          desc={item.desc}
          monthly={item.monthly}
          yearly={item.yearly}
          billing={billing}
          handleAddon={handleAddon}
          addon={addon}
        />
      );
    });
  }
  return (
    <div className="addons">
      <h2 className="form-title">Pick add-ons</h2>
      <p className="form-subtitle">
        Add-ons help enhance your gaming experience
      </p>
      {renderAddons()}
    </div>
  );
}

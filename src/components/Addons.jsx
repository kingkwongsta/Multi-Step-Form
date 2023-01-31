import React from "react";
import Button from '@mui/material/Button';
import AddonCard from "./AddonCard"

export default function Addons() {
    const addonsData = [{ title: "Online service", desc: "Access to multiplayer games", monthly: "1" },
    { title: "Larger storage", desc: "Extra 1TB of cloud save", monthly: "2" },
    { title: "Customizable Profile", desc: "Custom theme on your profile", monthly: "2" }]

    function renderAddons() {
        return (
            addonsData.map((addon, index) => {
                return <AddonCard
                    key={index}
                    title={addon.title}
                    desc={addon.desc}
                    monthly={addon.monthly}
                />
            })
        )
    }
    return (
        <div className="addons">
            <h2 className="form-title">Pick add-ons</h2>
            <p className="form-subtext">Add-ons help enhance your gaming experience</p>
            {renderAddons()}
        </div>
    )
}
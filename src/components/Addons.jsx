import React from "react";
import Button from '@mui/material/Button';
import AddonCard from "./AddonCard"

export default function Addons({ handleAddon, billing }) {
    const addonsData = [{ title: "Online service", desc: "Access to multiplayer games", monthly: 1, yearly: 10 },
    { title: "Larger storage", desc: "Extra 1TB of cloud save", monthly: 2, yearly: 20 },
    { title: "Customizable Profile", desc: "Custom theme on your profile", monthly: 2, yearly: 20 }]

    function renderAddons() {
        return (
            addonsData.map((item, index) => {
                return <AddonCard
                    key={index}
                    title={item.title}
                    desc={item.desc}
                    monthly={item.monthly}
                    yearly={item.yearly}
                    billing={billing}
                    handleAddon={handleAddon}
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
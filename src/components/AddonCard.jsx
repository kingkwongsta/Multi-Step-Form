import React from "react";

export default function AddonCard({ title, desc, monthly, handleAddon }) {
    function handleSelection() {
        handleAddon(title)
    }
    return (
        <div className="addoncard-container" onClick={() => handleSelection()}>
            <div className="addoncard-text">
                <p className="addoncard-title">{title}</p>
                <p className="addoncard-desc">{desc}</p>
                <div className="addoncard-monthly">+${monthly}/mo</div>
            </div>
        </div>
    )
}
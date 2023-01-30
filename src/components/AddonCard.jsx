import React from "react";

export default function AddonCard({ title, desc, monthly }) {
    return (
        <div className="addoncard-container">
            <div className="addoncard-text">
                <p className="addoncard-title">{title}</p>
                <p className="addoncard-desc">{desc}</p>
                <div className="addoncard-monthly">+${monthly}/mo</div>
            </div>
        </div>
    )
}
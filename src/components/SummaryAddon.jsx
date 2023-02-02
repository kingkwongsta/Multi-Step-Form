import React from "react";

export default function SummaryAddon({ title, billing, monthly, yearly }) {
    return (
        <div className="summary-addon">
            <div className="summary-addon-title">{title}</div>
            <div className="summary-addon-price">{billing ? monthly : yearly}</div>
        </div>
    )
}
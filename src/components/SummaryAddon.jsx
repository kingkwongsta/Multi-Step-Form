import React from "react";

export default function SummaryAddon({ title, monthly, yearly }) {
    return (
        <div className="summary-addon">
            <div className="summary-addon-title">{title}</div>
            <div className="summary-addon-price">{monthly}</div>
        </div>
    )
}
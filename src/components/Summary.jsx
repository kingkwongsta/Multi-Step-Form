import { useState, useEffect } from "react";
import planData from "../data/plan";
import addonsData from "../data/addon";
import SummaryAddon from "./SummaryAddon";

export default function Summary({ addon, plan, billing, handleBilling }) {
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    billing ? setTotalPrice(getMonthly()) : setTotalPrice(getYearly());
  }, [addon, plan, billing]);

  function getMonthly() {
    const planIndex = planData.map((x) => x.name).indexOf(plan);
    let totalMonthly = planData[planIndex].monthly;

    for (let i = 0; i < addonsData.length; i++) {
      if (addon.includes(addonsData[i].title)) {
        totalMonthly += addonsData[i].monthly;
      }
    }
    return totalMonthly;
  }
  function getYearly() {
    const planIndex = planData.map((x) => x.name).indexOf(plan);
    let totalYearly = planData[planIndex].yearly;

    for (let i = 0; i < addonsData.length; i++) {
      if (addon.includes(addonsData[i].title)) {
        totalYearly += addonsData[i].yearly;
      }
    }
    return totalYearly;
  }

  const renderAddons = addon.map((x, key) => {
    const index = addonsData.map((y) => y.title).indexOf(x);
    return (
      <SummaryAddon
        key={key}
        title={x}
        billing={billing}
        monthly={addonsData[index].monthly}
        yearly={addonsData[index].yearly}
      />
    );
  });
  function planMoPrice() {
    const index = planData.map((x) => x.name).indexOf(plan);
    return planData[index].monthly;
  }
  function planYrPrice() {
    const index = planData.map((x) => x.name).indexOf(plan);
    return planData[index].yearly;
  }

  return (
    <div className="summary-section">
      <h2 className="form-title">Finishing up</h2>
      <p className="form-subtitle">
        Double-check everything looks OK before confirming.
      </p>
      <div className="plan-section">
        <div className="summary-card">
          <div className="summary-plan-section">
            <div className="plan-section-and-button">
              <div className="summary-plan-name">
                {plan}{" "}
                {billing ? <span>(Monthly)</span> : <span>(Yearly)</span>}
                <div>
                  <a
                    href="#0"
                    className="summary-change"
                    onClick={handleBilling}
                  >
                    Change
                  </a>
                </div>
              </div>
            </div>
            <div className="summary-plan-price">
              +${billing ? planMoPrice() : planYrPrice()}/
              {billing ? <span>mo</span> : <span>yr</span>}
            </div>
          </div>
          <hr />
          <div className="summary-addon-section">{renderAddons}</div>
        </div>
        <div className="summary-total-price">
          <div className="summary-total-text">
            Total (per {billing ? "month" : "year"})
          </div>
          <div className="summary-total-number">
            +${totalPrice}/{billing ? <span>mo</span> : <span>yr</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

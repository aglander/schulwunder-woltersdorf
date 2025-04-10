import React from "react";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { donationData } from "../data/donationData";

interface DonationWidgetProps {
  primaryColor?: string; // CSS class name for progress indicator
  secondaryColor?: string; // CSS class name for progress background
}

export const DonationWidget: React.FC<DonationWidgetProps> = ({
  primaryColor,
  secondaryColor
}) => {
  // Calculate donation progress percentage
  const progressPercentage =
    donationData.project_donations_goal && donationData.project_donations_amount
      ? Math.min(
          Math.round(
            (donationData.project_donations_amount /
              donationData.project_donations_goal) *
              100
          ),
          100
        )
      : 0;

  // Format amount as currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex flex-col space-y-4">
        <h3 className="font-semibold text-lg">{donationData.item_name}</h3>

        <div className="space-y-2">
          <div className="flex justify-between text-sm mb-1">
            <span>
              {formatCurrency(donationData.project_donations_amount)}
            </span>
            <span>
              {formatCurrency(donationData.project_donations_goal)}
            </span>
          </div>
          <Progress 
            value={progressPercentage} 
            className={secondaryColor}
            data-indicator-class={primaryColor}
          />
          <p className="text-xs text-gray-500 mt-1">
            {progressPercentage}% des Ziels erreicht
          </p>
        </div>

        <div className="pt-2">
          <Link to="/spenden">
            <Button 
              className={`w-full ${primaryColor}`}
            >
              <span>Jetzt spenden</span>
            </Button>
          </Link>
        </div>

        <p className="text-xs text-center text-gray-500">
          Bereits {donationData.project_donations_count} Spende
          {donationData.project_donations_count !== 1 ? "n" : ""}
        </p>
      </div>
    </div>
  );
};

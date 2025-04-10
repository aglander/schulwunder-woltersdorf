
import React, { useState, useEffect } from "react";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectData {
  item_name: string;
  project_donations_goal: number;
  project_donations_amount: number;
  project_donations_count: number;
  form_url: string;
}

export const DonationWidget: React.FC = () => {
  const [projectData, setProjectData] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDonationData = async () => {
      try {
        const response = await fetch(
          "https://secure.fundraisingbox.com/app/projectItemJson?hash=Z%2Ff4DQAHzKQ4J%2ByEUM7POQ%3D%3D"
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch donation data");
        }
        
        const data = await response.json();
        setProjectData(data);
      } catch (err) {
        console.error("Error fetching donation data:", err);
        setError("Konnte Spendendaten nicht laden");
      } finally {
        setLoading(false);
      }
    };

    fetchDonationData();
  }, []);

  // Calculate donation progress percentage
  const progressPercentage = 
    projectData?.project_donations_goal && projectData?.project_donations_amount
      ? Math.min(
          Math.round((projectData.project_donations_amount / projectData.project_donations_goal) * 100),
          100
        )
      : 0;

  // Format amount as currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      {loading ? (
        <div className="flex items-center justify-center h-[240px]">
          <div className="animate-pulse flex flex-col items-center gap-3 w-full">
            <div className="h-6 bg-gray-200 rounded-md w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded-md w-full"></div>
            <div className="h-4 bg-gray-200 rounded-md w-5/6"></div>
            <div className="h-8 bg-gray-200 rounded-md w-full mt-3"></div>
          </div>
        </div>
      ) : error ? (
        <div className="text-center py-6 text-gray-500">{error}</div>
      ) : projectData && (
        <div className="flex flex-col space-y-4">
          <h3 className="font-semibold text-lg">{projectData.item_name}</h3>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm mb-1">
              <span>{formatCurrency(projectData.project_donations_amount)}</span>
              <span>{formatCurrency(projectData.project_donations_goal)}</span>
            </div>
            <Progress value={progressPercentage} />
            <p className="text-xs text-gray-500 mt-1">
              {progressPercentage}% des Ziels erreicht
            </p>
          </div>
          
          <div className="pt-2">
            <Button 
              className="w-full bg-primary hover:bg-primary/90"
              onClick={() => window.open(projectData.form_url, '_blank')}
            >
              <span>Jetzt spenden</span>
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
          
          <p className="text-xs text-center text-gray-500">
            Bereits {projectData.project_donations_count} Spende{projectData.project_donations_count !== 1 ? 'n' : ''}
          </p>
        </div>
      )}
    </div>
  );
};

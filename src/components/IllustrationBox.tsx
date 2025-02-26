
import React from "react";
import { cn } from "@/lib/utils";

interface IllustrationBoxProps {
  title: string;
  illustration: string;
  children: React.ReactNode;
  className?: string;
  illustrationColor?: string;
}

export const IllustrationBox = ({
  title,
  illustration,
  children,
  className,
  illustrationColor = "filter-schulinnovation"
}: IllustrationBoxProps) => {
  return (
    <div className={cn("bg-gray-50 p-8 rounded-lg relative overflow-hidden", className)}>
      <div className="absolute top-4 right-4 w-32 h-32 opacity-20">
        <img 
          src={illustration}
          alt=""
          className={cn("w-full h-full", illustrationColor)}
        />
      </div>
      <div className="relative z-10">
        <h3 className={cn("text-xl font-semibold mb-4", illustrationColor)}>
          {title}
        </h3>
        <div className="space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

import React from 'react';

interface WunderLayoutProps {
    children: React.ReactNode;
}

const WunderLayout: React.FC<WunderLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {children}
        </div>
    );
};

export default WunderLayout;

import React from 'react';
import BottomBar from './BottomBar';

interface WunderLayoutProps {
    children: React.ReactNode;
}

const WunderLayout: React.FC<WunderLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col relative">
            <div className="flex-1">
                {children}
            </div>
            <BottomBar />
        </div>
    );
};

export default WunderLayout;

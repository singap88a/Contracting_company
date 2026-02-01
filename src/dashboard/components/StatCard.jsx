import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = ({ icon: Icon, title, value, change, changeType, gradient }) => {
  const gradientClasses = {
    primary: 'stat-card-primary',
    secondary: 'stat-card-secondary',
    success: 'stat-card-success',
    info: 'stat-card-info'
  };

  return (
    <div className={`${gradientClasses[gradient]} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-white/80 text-sm font-medium mb-2">{title}</p>
          <h3 className="text-3xl font-bold mb-3">{value}</h3>
          
          {change && (
            <div className="flex items-center gap-1">
              {changeType === 'increase' ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              <span className="text-sm font-medium">
                {change}% من الشهر الماضي
              </span>
            </div>
          )}
        </div>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
          <Icon className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;

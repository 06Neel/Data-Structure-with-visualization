import React from 'react';

interface ConceptCardProps {
  title: string;
  children: React.ReactNode;
  icon?: string;
  highlight?: boolean;
  className?: string;
}

export const ConceptCard: React.FC<ConceptCardProps> = ({
  title,
  children,
  icon,
  highlight = false,
  className = '',
}) => {
  return (
    <div className={`concept-card ${highlight ? 'highlight' : ''} ${className}`}>
      {icon && <div className="text-3xl mb-3">{icon}</div>}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <div className="text-gray-300 text-sm leading-relaxed">{children}</div>
    </div>
  );
};

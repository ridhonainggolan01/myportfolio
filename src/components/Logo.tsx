import React from 'react';
import { Palette } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <Palette className="h-8 w-8 text-primary" />
      <span className="font-bold text-xl tracking-tight">Ridho.Design</span>
    </div>
  );
};

export default Logo;
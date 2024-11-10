import { Bus as BusIcon, Users, Clock } from 'lucide-react';
import type { Bus } from '../types';

interface BusCardProps {
  bus: Bus;
  onClick: (bus: Bus) => void;
}

export default function BusCard({ bus, onClick }: BusCardProps) {
  const occupancyPercentage = (bus.occupancy / bus.maxCapacity) * 100;
  
  const getOccupancyColor = (percentage: number) => {
    if (percentage < 50) return 'bg-green-500';
    if (percentage < 80) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div
      onClick={() => onClick(bus)}
      className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <BusIcon className="h-6 w-6 text-indigo-600 mr-2" />
          <h3 className="text-lg font-semibold">Bus {bus.number}</h3>
        </div>
        <span className={`px-2 py-1 rounded-full text-white text-sm ${
          bus.status === 'on-route' ? 'bg-green-500' : 
          bus.status === 'delayed' ? 'bg-yellow-500' : 'bg-red-500'
        }`}>
          {bus.status}
        </span>
      </div>

      <div className="space-y-2">
        <p className="text-gray-600">{bus.route}</p>
        
        <div className="flex items-center text-gray-500">
          <Clock className="h-4 w-4 mr-1" />
          <span>ETA: {bus.eta}</span>
        </div>

        <div className="flex items-center text-gray-500">
          <Users className="h-4 w-4 mr-1" />
          <span>Occupancy:</span>
          <div className="ml-2 flex-1 bg-gray-200 rounded-full h-2">
            <div
              className={`${getOccupancyColor(occupancyPercentage)} h-2 rounded-full`}
              style={{ width: `${occupancyPercentage}%` }}
            />
          </div>
          <span className="ml-2">{bus.occupancy}/{bus.maxCapacity}</span>
        </div>

        <p className="text-sm text-gray-500">
          Next Stop: {bus.nextStop}
        </p>
      </div>
    </div>
  );
}
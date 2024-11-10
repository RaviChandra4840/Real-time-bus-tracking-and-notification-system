import { useState } from 'react';
import BusCard from '../components/BusCard';
import type { Bus } from '../types';

export default function Track() {
  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);

  // Mock data for demonstration
  const buses: Bus[] = [
    {
      id: '1',
      number: '101',
      route: 'Campus Loop',
      currentLocation: { lat: 40.7128, lng: -74.0060 },
      occupancy: 15,
      maxCapacity: 40,
      nextStop: 'Student Center',
      eta: '5 mins',
      status: 'on-route',
    },
    {
      id: '2',
      number: '102',
      route: 'Downtown Express',
      currentLocation: { lat: 40.7128, lng: -74.0060 },
      occupancy: 35,
      maxCapacity: 40,
      nextStop: 'Library',
      eta: '10 mins',
      status: 'delayed',
    },
  ];

  const handleBusClick = (bus: Bus) => {
    setSelectedBus(bus);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Track Buses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {buses.map((bus) => (
          <BusCard
            key={bus.id}
            bus={bus}
            onClick={handleBusClick}
          />
        ))}
      </div>
    </div>
  );
}
import { MapPin } from 'lucide-react';
import type { Route } from '../types';

export default function Routes() {
  // Mock data for demonstration
  const routes: Route[] = [
    {
      id: '1',
      name: 'Campus Loop',
      stops: ['Student Center', 'Library', 'Sports Complex', 'Dining Hall'],
      schedule: [
        { stopName: 'Student Center', time: '8:00 AM' },
        { stopName: 'Library', time: '8:10 AM' },
        { stopName: 'Sports Complex', time: '8:20 AM' },
        { stopName: 'Dining Hall', time: '8:30 AM' },
      ],
    },
    {
      id: '2',
      name: 'Downtown Express',
      stops: ['Main Gate', 'Downtown Station', 'Shopping Mall', 'Main Gate'],
      schedule: [
        { stopName: 'Main Gate', time: '9:00 AM' },
        { stopName: 'Downtown Station', time: '9:15 AM' },
        { stopName: 'Shopping Mall', time: '9:30 AM' },
        { stopName: 'Main Gate', time: '9:45 AM' },
      ],
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Bus Routes</h1>
      <div className="space-y-6">
        {routes.map((route) => (
          <div key={route.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">{route.name}</h2>
            <div className="space-y-4">
              {route.schedule.map((stop, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{stop.stopName}</span>
                      <span className="text-gray-500">{stop.time}</span>
                    </div>
                    {index < route.schedule.length - 1 && (
                      <div className="ml-3 mt-2 mb-2 border-l-2 border-indigo-200 h-6" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
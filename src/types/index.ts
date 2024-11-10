export interface User {
  id: string;
  name: string;
  role: 'student' | 'admin';
  email: string;
}

export interface Bus {
  id: string;
  number: string;
  route: string;
  currentLocation: {
    lat: number;
    lng: number;
  };
  occupancy: number;
  maxCapacity: number;
  nextStop: string;
  eta: string;
  status: 'on-route' | 'delayed' | 'stopped';
}

export interface Route {
  id: string;
  name: string;
  stops: string[];
  schedule: {
    stopName: string;
    time: string;
  }[];
}
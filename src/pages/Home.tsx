import { Bus, MapPin, Bell, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      icon: Bus,
      title: 'Real-Time Tracking',
      description: 'Track college buses in real-time with accurate GPS location updates.'
    },
    {
      icon: MapPin,
      title: 'Route Information',
      description: 'Access detailed bus routes, stops, and estimated arrival times.'
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Get notified when your bus is within 2km of your location.'
    },
    {
      icon: Users,
      title: 'Occupancy Tracking',
      description: 'Check real-time passenger count before boarding.'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-90" />
        <div className="relative px-8 py-16 text-center text-white rounded-2xl" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <h1 className="text-4xl font-bold mb-4">Welcome to BusTracker</h1>
          <p className="text-xl mb-8">Track your college bus in real-time and never miss a ride.</p>
          <Link
            to="/login"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 -mx-4 px-4 py-12 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="space-y-8">
            <div className="flex items-center justify-center space-x-4">
              <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
              <p className="flex-1 text-left">Log in with your student credentials</p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
              <p className="flex-1 text-left">Select your bus route from the available options</p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
              <p className="flex-1 text-left">Track your bus in real-time and receive notifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-8">Join thousands of students who make their commute easier with BusTracker.</p>
        <Link
          to="/login"
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center"
        >
          <Bus className="mr-2 h-5 w-5" />
          Start Tracking Now
        </Link>
      </section>
    </div>
  );
}
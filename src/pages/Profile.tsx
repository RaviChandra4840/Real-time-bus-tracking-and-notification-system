import { User, Mail, Phone, MapPin, Settings } from 'lucide-react';

export default function Profile() {
  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@university.edu',
    phone: '(555) 123-4567',
    studentId: '2024001',
    preferredRoute: 'Campus Loop',
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Profile</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-indigo-600 px-6 py-8">
          <div className="flex items-center">
            <div className="bg-white p-3 rounded-full">
              <User className="h-12 w-12 text-indigo-600" />
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-bold text-white">{userProfile.name}</h2>
              <p className="text-indigo-100">Student ID: {userProfile.studentId}</p>
            </div>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-gray-400" />
              <span className="ml-3 text-gray-600">{userProfile.email}</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-gray-400" />
              <span className="ml-3 text-gray-600">{userProfile.phone}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-gray-400" />
              <span className="ml-3 text-gray-600">Preferred Route: {userProfile.preferredRoute}</span>
            </div>
          </div>

          <div className="border-t pt-6">
            <button className="flex items-center text-indigo-600 hover:text-indigo-500">
              <Settings className="h-5 w-5" />
              <span className="ml-2">Edit Profile Settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
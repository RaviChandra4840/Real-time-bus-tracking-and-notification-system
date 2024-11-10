import { Bell, BellOff } from 'lucide-react';
import { useState } from 'react';

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      title: 'Bus 101 Approaching',
      message: 'Bus 101 is within 2km of your location',
      time: '5 minutes ago',
      read: false,
    },
    {
      id: '2',
      title: 'Route Change Alert',
      message: 'Campus Loop route has been modified due to construction',
      time: '1 hour ago',
      read: true,
    },
  ]);

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Notifications</h1>
      <div className="space-y-4">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`bg-white rounded-lg shadow-md p-4 ${
                !notification.read ? 'border-l-4 border-indigo-600' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start">
                  <Bell className={`h-5 w-5 ${
                    notification.read ? 'text-gray-400' : 'text-indigo-600'
                  } mt-1`} />
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">{notification.title}</h3>
                    <p className="text-gray-600">{notification.message}</p>
                    <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
                  </div>
                </div>
                {!notification.read && (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="text-sm text-indigo-600 hover:text-indigo-500"
                  >
                    Mark as read
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <BellOff className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900">No notifications</h3>
            <p className="text-gray-500">You're all caught up!</p>
          </div>
        )}
      </div>
    </div>
  );
}
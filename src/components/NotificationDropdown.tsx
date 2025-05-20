import React from 'react';

export default function NotificationDropdown() {
  return (
    <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 z-50">
      <div className="p-4">
        <p className="text-sm">🔔 New message from support team.</p>
        <p className="text-sm">📝 Feedback request pending.</p>
      </div>
    </div>
  );
}
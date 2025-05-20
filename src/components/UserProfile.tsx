import React from 'react';

export default function UserProfile() {
  return (
    <div className="p-4 text-sm">
      <h2 className="text-lg font-semibold mb-2">User Profile</h2>
      <div className="space-y-2">
        <div><strong>Name:</strong> Jane Doe</div>
        <div><strong>Email:</strong> jane@example.com</div>
        <div><strong>Role:</strong> Admin</div>
      </div>
    </div>
  );
}

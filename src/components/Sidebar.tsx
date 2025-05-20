'use client';
import { useState } from 'react';
import { Home, MessageSquare, Users, Settings } from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
  const [active, setActive] = useState('home');

  const menu = [
    { name: 'home', icon: <Home />, label: 'Home' },
    { name: 'chat', icon: <MessageSquare />, label: 'Chat' },
    { name: 'contacts', icon: <Users />, label: 'Contacts' },
    { name: 'settings', icon: <Settings />, label: 'Settings' },
  ];

  return (
    <div className="h-screen w-20 bg-gray-900 text-white flex flex-col items-center py-4 space-y-6">
      {menu.map((item) => (
        <button
          key={item.name}
          onClick={() => setActive(item.name)}
          className={`p-3 rounded-lg hover:bg-gray-700 ${
            active === item.name ? 'bg-gray-700' : ''
          }`}
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;

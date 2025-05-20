'use client';
import React from 'react';

const Topbar = () => {
  return (
    <div className="w-full h-16 bg-white dark:bg-gray-800 shadow flex items-center px-4 justify-between">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">BeyondChats</h1>
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 rounded border dark:bg-gray-700 dark:text-white"
        />
        <div className="w-8 h-8 bg-gray-400 rounded-full" />
      </div>
    </div>
  );
};

export default Topbar;


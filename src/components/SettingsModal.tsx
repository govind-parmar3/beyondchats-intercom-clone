import React from 'react';

export default function SettingsModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl w-96 shadow-xl">
        <h3 className="text-xl font-semibold mb-4">Settings</h3>
        <label className="block mb-2">
          <span className="text-sm">Enable Notifications</span>
          <input type="checkbox" className="ml-2" />
        </label>
        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 bg-gray-700 text-white rounded" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-60 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 shadow-lg flex flex-col">
      <div className="flex items-center justify-center h-16 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">BeyondChats</h1>
      </div>
      <nav className="flex flex-col mt-4 px-2 space-y-1">
        <a href="#" className="px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800">
          Dashboard
        </a>
        <a href="#" className="px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800">
          Chats
        </a>
        <a href="#" className="px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800">
          Contacts
        </a>
        <a href="#" className="px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800">
          Settings
        </a>
      </nav>
      <div className="mt-auto px-4 py-6 border-t border-gray-200 dark:border-gray-700">
        <button
          id="dark-toggle"
          className="w-full py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none"
        >
          Toggle Dark Mode
        </button>
      </div>
    </aside>
  );
}
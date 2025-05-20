const mockChats = [
  {
    id: 1,
    name: "Ravi Sharma",
    message: "Hi, I need help with my order",
    time: "2m ago",
  },
  {
    id: 2,
    name: "Anjali Patel",
    message: "Thanks for the update!",
    time: "10m ago",
  },
  {
    id: 3,
    name: "Suresh Gupta",
    message: "Can I change my email?",
    time: "1h ago",
  },
];

export default function ChatList() {
  return (
    <aside className="w-80 h-[calc(100vh-4rem)] fixed left-60 top-16 bg-gray-50 dark:bg-gray-900 border-r overflow-y-auto hidden md:block">
      <h2 className="text-lg font-semibold px-4 py-3">Recent Chats</h2>
      <ul>
        {mockChats.map((chat) => (
          <li
            key={chat.id}
            className="px-4 py-3 border-b cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <div className="font-medium text-gray-900 dark:text-gray-100">{chat.name}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 truncate">{chat.message}</div>
            <div className="text-xs text-gray-500 dark:text-gray-500">{chat.time}</div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
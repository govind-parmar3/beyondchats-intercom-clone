import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import ChatList from '../components/ChatList';

export default function Home() {
  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <Sidebar />
      <Topbar />
      <ChatList />

      {/* Main chat area */}
      <main className="ml-80 pt-16 p-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Select a chat to start messaging</h1>
          {/* Chat messages and input area would go here */}
          <p className="text-gray-700 dark:text-gray-300">This area will show conversation details.</p>
        </div>
      </main>
    </div>
  );
}
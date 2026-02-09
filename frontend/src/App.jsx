import ChatBot from './components/ChatBot';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
    <NavBar />
    <ChatBot />
    </div>
  );
}

export default App;
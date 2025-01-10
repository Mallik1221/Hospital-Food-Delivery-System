import './App.css'
import {Button} from 'antd';

function App() {

  return (
    <>
     <div className="min-h-screen bg-gray-100 flex items-center justify-center text-center">
      <div className="p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Hospital Food Delivery System</h1>
        <Button type="primary" className="mb-4">
          Ant Design Button
        </Button>
        <p className="text-gray-700">This project uses both Tailwind CSS and Ant Design!</p>
      </div>
    </div>
    </>
  )
}

export default App

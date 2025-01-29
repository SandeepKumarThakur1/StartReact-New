import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("#333");
  
  return (
    <>
    <main className="min-h-screen" style={{backgroundColor: bgColor}} >
      <div className="bg-gray-100 p-2 w-[80%] mx-auto fixed bottom-10 left-0 right-0 rounded-2xl">
        <div className="flex gap-5 justify-center items-center w-[100%]">
        <span onClick={() => setBgColor("purple")} className="text-white text-sm font-semibold cursor-pointer bg-purple-700 px-4 py-2 rounded-3xl active:bg-cyan-600">Purple</span>
        <span onClick={() => setBgColor("green")} className="text-white text-sm font-semibold cursor-pointer bg-green-600 px-4 py-2 rounded-3xl active:bg-cyan-600">Green</span>
        <span onClick={() => setBgColor("blue")} className="text-white text-sm font-semibold cursor-pointer bg-blue-600 px-4 py-2 rounded-3xl active:bg-cyan-600">Blue</span>
        </div>
      </div>
      </main>
    </>
  )
}

export default App

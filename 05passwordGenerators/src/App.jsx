import { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const passwordRef = useRef(null);
  
  const passwordGenerator = useCallback(()=>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let sym = "!@#$%^&*()_+{}[]:<>?~";
    let pass = "";

    if(numberAllowed === true) str += num;
    if(symbolAllowed === true) str += sym;

    for(let i = 0; i < length; i++) {
      let randomPassword = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(randomPassword)
    }
    setPassword(pass)

  },[length, numberAllowed, symbolAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(password);
    alert("Copied to clipboard")
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, symbolAllowed, passwordGenerator])

  return (
    <>
      <main className="h-screen flex justify-center items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">Password Generator</h1>
          <div className="bg-gray-600 p-4 rounded-lg mt-5 w-[500px]">
            <div className="flex justify-between items-center">
              <input
                type="text" 
                placeholder="Generated Password"
                className="p-2 bg-white text-black focus:outline-none px-3 w-[70%]"
                value={password}
                style={{ borderRadius: "5px 0 0 5px" }}
                readOnly
              />
              <button
                className="p-2 text-white cursor-pointer bg-blue-800 active:bg-green-700 w-[30%]"
                style={{ borderRadius: "0 5px 5px 0" }}
                onClick={copyPasswordToClipboard}
              >
                Copy Password
              </button>
            </div>
            <div className="flex gap-5 items-center pt-4">
              <div className="flex items-center gap-2">
                <input type="range" min={6} max={50} 
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                />
                <label className="text-white" htmlFor="length">Length ({length})</label>
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" id="numbers" 
                  checked={numberAllowed}
                  onChange={() => setNumberAllowed((prev) => !prev)}
                />
                <label className="text-white" htmlFor="numbers">Numbers</label>
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" id="symbols"
                  checked={symbolAllowed}
                  onChange={() => setSymbolAllowed((prev) => !prev)}
                />
                <label className="text-white" htmlFor="symbols">Symbols</label>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;

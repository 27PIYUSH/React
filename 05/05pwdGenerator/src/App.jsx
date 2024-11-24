import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [len, setLen] = useState(8);
  const [numsAllowed, setNums] = useState(false);
  const [charAllowed, setChar] = useState(false);
  const [pwd, setPwd] = useState("");

  // useRef hook
  const pwdRef = useRef(null);

  // useCallback hook
  const pwdGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numsAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-{}[]~";

    for (let i = 1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPwd(pass);
  }, [len, numsAllowed, charAllowed, setPwd]);

  /*Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
    Multiplying it by str.length gives a number between 0 and str.length - 1.
    Adding + 1 pushes this to between 1 and str.length.
    Math.floor() rounds it down to the nearest integer.
  */
  const copyPwdToClipboard = useCallback(() => {
    pwdRef.current?.select();
    // pwdRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(pwd);
  }, [pwd]);

  // useEffect hook
  useEffect(() => {
    pwdGenerator();
  }, [len, numsAllowed, charAllowed, pwdGenerator]);

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-3 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-4xl text-center my-2 mb-3 font-semibold">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={pwd}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={pwdRef}
          />
          <button
            className="text-white bg-blue-500 hover:bg-blue-600 shrink-0 px-3"
            onClick={copyPwdToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex gap-x-5 text-lg">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={len}
              className="cursor-pointer"
              onChange={(e) => {
                setLen(e.target.value);
              }}
            />
            <label> Length: {len}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numsAllowed}
              id="inputNum"
              className="cursor-pointer"
              onChange={() => {
                setNums((prev) => !prev);
              }}
            />
            <label htmlFor="inputNum">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="inputChar"
              className="cursor-pointer"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label htmlFor="inputChar">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

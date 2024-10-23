import "./App.css";

function App() {
  const changeBgColor = (e) => {
    let bgChange = document.getElementById("bg-change");
    bgChange.style.backgroundColor = e.target.value;
  };

  const myColor = () => {
    let myBgColor = document.getElementById("myColor").value;
    let bgChange = document.getElementById('bg-change')
    bgChange.style.backgroundColor = myBgColor
  };

  const clrCodeChanger = () =>{
    let clrCode = document.getElementById('clr-code').value
    let bgChange = document.getElementById('bg-change')
    bgChange.style.backgroundColor = clrCode
    
  }

  return (
    <>
      <div
        id="bg-change"
        className="bg-slate-900 h-lvh w-full flex flex-col justify-center items-center"
      >
        <h1 className="text-center pt-20 text-3xl text-slate-100">
          Background Changer Application
        </h1>
        <div id="clrSelect" className="">
          <h3 className="text-slate-200 text-center text-md pt-20 pb-5">Click on Any Suggested Colors or Pick any Color</h3>
          <button
            onClick={changeBgColor}
            value={"red"}
            className="ml-5 border px-5 py-2 text-white rounded-sm hover:bg-red-600 hover:scale-95"
          >
            RED
          </button>
          <button
            onClick={changeBgColor}
            value={"blue"}
            className="ml-5 border px-5 py-2 text-white rounded-sm hover:bg-blue-600 hover:scale-95"
          >
            BLUE
          </button>
          <button
            onClick={changeBgColor}
            value={"green"}
            className="ml-5 border px-5 py-2 text-white rounded-sm hover:bg-green-600 hover:scale-95"
          >
            GREEN
          </button>
          <button
            onClick={changeBgColor}
            value={"yellow"}
            className="ml-5 border px-5 py-2 text-white rounded-sm hover:bg-yellow-600 hover:scale-95"
          >
            YELLOW
          </button>
        </div>

        <div className="flex flex-col justify-center items-center gap-5 mt-16">
          <h1 className="text-slate-100">Pick Your Color :</h1>
          <input type="color" id="myColor" />
          <button onClick={myColor} className="text-white border px-3 py-2">
            Change Background
          </button>
        </div>
        <div className="mt-5 flex gap-6">
          <input required id="clr-code" className="w-72 py-1 text-center text-slate-100 rounded bg-slate-800" type="text" placeholder="Enter your color code in HEX" />
          <input onClick={clrCodeChanger} type="submit" className="text-slate-100 py-2 rounded bg-slate-600 px-2" />
        </div>
      </div>
    </>
  );
}

export default App;

import _DSC3004 from "./assets/media/_DSC3004.JPG";

function App() {
  return (
    <>
      <div className="relative flex items-center justify-center h-screen overflow-hidden">
        <img
          // className="absolute w-auto min-w-full min-h-full max-w-none"
          className="absolute opacity-90"
          style={{ zIndex: -20 }}
          src={_DSC3004}
          alt="Bg"
        />
        <div className="relative p-5 text-2xl text-white bg-purple-300 rounded-xl">
          Event Park
        </div>
      </div>
      <div> Hello World</div>
    </>
  );
}

export default App;

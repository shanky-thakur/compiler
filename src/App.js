import Navbar from "./Components/Navbar";
import Editor from "./Components/Editor";
import Listmenu from "./Components/Listmenu";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-950 to-slate-800">
        <Navbar />
        <Listmenu/>
        <Editor />
      </div>
    </>
  );
}

export default App;

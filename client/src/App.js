import Header from "./components/Header";
import Calculate from "./components/Calculate";
import Result from "./components/Result";
function App() {
  return (
    <div className="App flex justify-center pt-4 pb-2 border-solid border-4 rounded">
       <div className="app-container w-3/4 min-h-full">
          <Header />
          <div className="content flex w-full h-full">
             <Calculate />
             <Result />
          </div>
       </div>
    </div>
  );
}

export default App;

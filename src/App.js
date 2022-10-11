import "./App.scss";
import Header from "./components/Hedaer/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div classNAme="App">
      <Navbar />
      <Header />
      <Main />
    </div>
  );
};

export default App;

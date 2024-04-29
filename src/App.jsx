import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./Components/MyNav";
import WelcomeAlert from "./Components/WelcomeAlert";
import BookList from "./Components/BookList";
import MyFooter from "./Components/MyFooter";
import fantasy from "./data/fantasy.json";

function App() {
  return (
    <div className="App">
      <MyNav brandName="EpiBooks" />
      <WelcomeAlert />
      <BookList books={fantasy} />
      <MyFooter />
    </div>
  );
}

export default App;

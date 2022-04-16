import "./styles.css";
import MovieList from "./MovieList";
import Nav from "./Nav";
import { MovieProvider } from "./MovieContext";

export default function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav name="Fang-Wen" />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

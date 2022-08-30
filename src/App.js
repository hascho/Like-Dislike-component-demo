import { LikeDislikeButtons } from "./components/button/like-dislike-buttons";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <LikeDislikeButtons initialLikes={100} initialDislikes={25} />
    </div>
  );
}

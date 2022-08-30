import { Button } from "./button";
import { useLikeDislike } from "../../hooks/useLikeDislike";

export const LikeDislikeButtons = (props) => {
  const { initialLikes, initialDislikes } = props;
  const {
    activeButton,
    likes,
    dislikes,
    handleLikeClick,
    handleDislikeClick
  } = useLikeDislike(initialLikes, initialDislikes);

  return (
    <>
      <Button
        highlight={activeButton === "like"}
        text="Like"
        count={likes}
        onClick={handleLikeClick}
      />
      <Button
        highlight={activeButton === "dislike"}
        text="Dislike"
        count={dislikes}
        onClick={handleDislikeClick}
      />
    </>
  );
};

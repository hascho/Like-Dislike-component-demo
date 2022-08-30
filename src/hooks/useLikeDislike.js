import { useState } from "react";

export const useLikeDislike = (initialLikes, initialDislikes) => {
  const [{ activeButton, likes, dislikes }, setState] = useState({
    activeButton: "",
    likes: initialLikes,
    dislikes: initialDislikes
  });

  const reset = (likesOrDislikes) => {
    const obj = {
      likes: initialLikes,
      dislikes: initialDislikes
    };
    setState((prev) => ({
      ...prev,
      activeButton: "",
      [likesOrDislikes]: obj[likesOrDislikes]
    }));
  };

  const handleLikeClick = () => {
    if (activeButton === "") {
      setState((prev) => ({
        ...prev,
        activeButton: "like",
        likes: prev.likes + 1
      }));
    } else if (activeButton === "like") {
      reset("likes");
    } else if (activeButton === "dislike") {
      setState((prev) => ({
        ...prev,
        activeButton: "like",
        dislikes: initialDislikes,
        likes: prev.likes + 1
      }));
    }
  };

  const handleDislikeClick = () => {
    if (activeButton === "") {
      setState((prev) => ({
        ...prev,
        activeButton: "dislike",
        dislikes: prev.dislikes + 1
      }));
    } else if (activeButton === "dislike") {
      reset("dislikes");
    } else if (activeButton === "like") {
      setState((prev) => ({
        ...prev,
        activeButton: "dislike",
        likes: initialLikes,
        dislikes: prev.dislikes + 1
      }));
    }
  };

  return {
    activeButton,
    likes,
    dislikes,
    handleLikeClick,
    handleDislikeClick
  };
};

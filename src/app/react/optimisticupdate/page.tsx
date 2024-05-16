"use client";

import { useState } from "react";

const OptimisticUpdate = () => {
  const [like, setLike] = useState<boolean>(false);
  const [icon, setIcon] = useState<string>("🩶");

  const onClickLikeButton = async () => {
    const prev = icon;
    like ? setIcon("🩶") : setIcon("🩷");

    await fetch("http://localhost:5000/lik", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isLike: like,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        setLike(json.isLike);
      })
      .catch((err) => {
        alert("좋아요 처리에 문제가 발생했어요. 😥");
        setIcon(prev);
      });
  };

  return (
    <div className="flex w-5/12 justify-end">
      <button
        onClick={onClickLikeButton}
        className="w-16 h-16 p-4 m-4 text-xl rounded-full bg-gray-100"
      >
        {icon}
      </button>
    </div>
  );
};

export default OptimisticUpdate;

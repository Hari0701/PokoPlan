import React from "react";

export default function Card(props) {
  const card = () => {
    let btn = document.getElementById("card");
    btn.addEventListener(
      "click",
      function () {
        console.log("hello");
      },
      { once: true }
    );
  };

  return (
    <div
      key={props.value}
      onClick={card}
      id="card"
      className="block h-30 w-70 cursor-pointer p-6 bg-white m-4 border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h1 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.value}
      </h1>
    </div>
  );
}

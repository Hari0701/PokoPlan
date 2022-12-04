import React from "react";
import Card from "./Card";
export default function CardView() {
  const fibonacci = [
    "1",
    "2",
    "3",
    "5",
    "8",
    "13",
    "21",
    "34",
    "55",
    "89",
    "144",
  ];
  return (
    <div className="flex flex-wrap ">
      {fibonacci.map((fibo) => (
        <Card value={fibo} />
      ))}
    </div>
  );
}

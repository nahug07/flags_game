import React from "react";
import "./Card.css";

export default function Card(title: string) {
  return (
    <li className="link-card">
      <h2>{title}</h2>
    </li>
  );
}

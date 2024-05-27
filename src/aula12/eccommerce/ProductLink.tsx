import React from "react";
import { Link } from "react-router-dom";

export default function ProductLink({ name, id }) {
  return (
    <div className="cursor-pointer">
      <Link to={`/item/${id}`}>{name}</Link>
    </div>
  );
}

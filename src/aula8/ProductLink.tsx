import React from "react";
import { Link } from "react-router-dom";

export default function ProductLink({ title, id }) {
  return (
    <div className="cursor-pointer">
      <Link to={`/item/${id}`}>{title}</Link>
    </div>
  );
}

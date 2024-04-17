import React from "react";

export const Row = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.grade1}</td>
      <td>{props.grade2}</td>
      <td>{props.grade3}</td>
      <td>{props.grade4}</td>
      <td>{props.avg}</td>
    </tr>
  );
};

export default Row;

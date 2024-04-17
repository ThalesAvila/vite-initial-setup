import Row from "./Row";

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <td>Nome</td>
          <td>Nota 1</td>
          <td>Nota 2</td>
          <td>Nota 3</td>
          <td>Nota 4</td>
          <td>Média</td>
        </tr>
      </thead>
      <tbody>
        <Row
          name="Caio"
          grade1={7}
          grade2={8}
          grade3={6}
          grade4={6}
          avg={6.75}
        />
        <Row
          name="Diana"
          grade1={9}
          grade2={8}
          grade3={8}
          grade4={4}
          avg={7.25}
        />
        <Row
          name="Erick"
          grade1={8}
          grade2={7}
          grade3={7}
          grade4={10}
          avg={8}
        />
      </tbody>
    </table>
  );
};

export default Table;

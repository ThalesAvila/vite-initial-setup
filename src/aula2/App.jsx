const Row = (props) => {
  return React.createElement("tr", {}, [
    React.createElement("td", {}, props.name),
    React.createElement("td", {}, props.grade1),
    React.createElement("td", {}, props.grade2),
    React.createElement("td", {}, props.grade3),
    React.createElement("td", {}, props.grade4),
    React.createElement("td", {}, props.avg),
  ]);
};

const Table = () => {
  return React.createElement("table", {}, [
    React.createElement("thead", {}, [
      React.createElement("td", {}, "Nome"),
      React.createElement("td", {}, "Nota 1"),
      React.createElement("td", {}, "Nota 2"),
      React.createElement("td", {}, "Nota 3"),
      React.createElement("td", {}, "Nota 4"),
      React.createElement("td", {}, "Média"),
    ]),
    React.createElement("tbody", {}, [
      React.createElement(Row, {
        name: "Caio",
        grade1: 7,
        grade2: 8,
        grade3: 6,
        grade4: 6,
        avg: 6.75,
      }),
      React.createElement(Row, {
        name: "Diana",
        grade1: 9,
        grade2: 8,
        grade3: 8,
        grade4: 4,
        avg: 7.25,
      }),
      React.createElement(Row, {
        name: "Erick",
        grade1: 8,
        grade2: 7,
        grade3: 7,
        grade4: 10,
        avg: 8,
      }),
    ]),
  ]);
};

const App = () => {
  return React.createElement("div", {}, React.createElement(Table));
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

import { useState } from "react";
import "./exemplo-promise";

function Aluno({ aluno }) {
  return (
    aluno && (
      <div>
        Nome:
        {aluno?.nome || "Não disponível"}
        Nota final:
        {aluno?.notaFinal || "Não disponível"}
      </div>
    )
  );
}

export default function ExemploMap() {
  const carreiras = [
    "Web Developer",
    "Designer UI/UX",
    "Backend Developer",
    "Engenheiro de Dados",
    "Analista de Dados",
  ];
  return (
    <>
      <h2 className="text-lg font-semibold">
        Essas são as carreiras disponíveis
      </h2>
      <ul>
        {carreiras.map((carreira) => {
          return <li key={carreira}>{carreira}</li>;
        })}
      </ul>
    </>
  );
}

// export default function Exemplo() {
//   const [submenu, setSubmenu] = useState(null);

//   const subMenuHandler = (currentSubmenu) => {
//     submenu === currentSubmenu ? setSubmenu(null) : setSubmenu(currentSubmenu);
//   };

//   return (
//     <div>
//       {/* <Aluno aluno={{ nome: "Thiago", notaFinal: 10 }} /> */}
//       {/* <Aluno aluno={{}} /> */}
//       <div>
//         <button
//           onClick={() => {
//             subMenuHandler("categoria");
//           }}
//           style={{ padding: 10, margin: 10, backgroundColor: "#CCC" }}
//         >
//           Categoria
//         </button>
//         <button
//           onClick={() => {
//             subMenuHandler("promocao");
//           }}
//           style={{ padding: 10, margin: 10, backgroundColor: "#CCC" }}
//         >
//           Promoção
//         </button>
//         <button
//           onClick={() => {
//             subMenuHandler("sapatos");
//           }}
//           style={{ padding: 10, margin: 10, backgroundColor: "#CCC" }}
//         >
//           Sapatos
//         </button>
//       </div>
//       {submenu === "categoria" && <div>Submenu Categoria</div>}
//       {submenu === "promocao" && <div>Submenu Promoção</div>}
//       {submenu === "sapatos" && <div>Submenu Sapatos</div>}
//     </div>
//   );
// }

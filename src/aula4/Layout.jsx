export default function Layout(prop) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <header style={{ width: "100%", backgroundColor: "green", height: 200 }}>
        Header
      </header>
      <aside style={{ width: "20%", backgroundColor: "red", height: 400 }}>
        <ul>
          <li>Home</li>
          <li>Contato</li>
          <li>Produtos</li>
        </ul>
      </aside>
      <main style={{ width: "80%", backgroundColor: "orange", height: 400 }}>
        {prop.children}
      </main>
    </div>
  );
}

// Ex5 — Navbar responsiva

// Crie uma barra de navegação horizontal com 3 links.

// - Em telas grandes, os links devem aparecer em linha.
// - Em telas pequenas, os links devem aparecer empilhados.

export default function Ex5() {
  return (
    <div className="my-8">
      <h1 className="text-2xl font-bold mb-4">Ex5 - Navbar Responsiva</h1>
      {/* Resolva aqui */}

      {/*Navbar*/}
      <nav
        className="w-full"
        role="navigation"
        aria-label="Navegação principal"
      >
        <ul className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
          {/* 1 titulo */}
          <li>
            <a
              href="#inicio"
              className="rounded-lg px-3 py-2 text-sm font-medium text-blue-700 hover:bg-pink-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
            >
              Início
            </a>
          </li>

          {/* 2 titulo */}
          <li>
            <a
              href="#servicos"
              className="rounded-lg px-3 py-2 text-sm font-medium text-blue-700 hover:bg-pink-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
            >
              Painel
            </a>
          </li>

          {/* 3 Titulo */}
          <li>
            <a
              href="#contato"
              className="rounded-lg px-3 py-2 text-sm font-medium text-blue-700 hover:bg-pink-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
            >
              Dash
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

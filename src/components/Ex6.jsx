// Ex6 — Layout com Grid

// Crie um layout com cabeçalho, conteúdo principal e rodapé usando `grid`:

// - O Layout deve ter 20rem de altura total.
// - Cabeçalho ocupa 100% largura, 80px altura.
// - Conteúdo central ocupa o restante da tela.
// - Rodapé fixo embaixo (80px).

export default function Ex6() {
  return (
    <div className="my-8">
      <h1 className="text-2xl font-bold mb-4">Ex6 - Layout com Grid</h1>
      {/* Resolva aqui */}

      {/* Container do layout em grid */}
      <section
        className="grid h-80 w-full grid-rows-[80px_1fr_80px] overflow-hidden rounded-xl border border-gray-200"
        aria-label="Layout em grid com cabeçalho, conteúdo e rodapé"
      >
        {/* Cabeçalho*/}
        <header className="flex items-center justify-center bg-gray-100 text-sm font-medium text-gray-800">
          Cabeçalho
        </header>

        {/* Conteúdo*/}
        <main className="overflow-auto bg-white p-4 text-gray-700">
          Conteúdo principal
          <p className="mt-2 text-sm text-gray-500">
            Fica aqui o conteudo que deve ser feito ....
          </p>
        </main>

        {/* Rodapé */}
        <footer className="flex items-center justify-center bg-gray-100 text-sm text-gray-700">
          Rodapé
        </footer>
      </section>
    </div>
  );
}

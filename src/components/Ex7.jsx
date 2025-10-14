// Ex7 — Dashboard simples com Grid (2 pontos)

// Considerando o layout abaixo, estilize com Tailwind:

// - O cabeçalho ocupa largura total (com título e botão “Logout” alinhados em extremidades).
// - O conteúdo é dividido em 2 colunas no desktop e 1 coluna no mobile.
// - Cada card deve ter borda, sombra e padding

export default function Ex7() {
  return (
    <div className="my-8">
      <h1 className="text-2xl font-bold mb-4">Ex7 - Dashboard Simples</h1>
      <div className="mx-auto w-full max-w-5xl">
        {/* Cabeçalho*/}
        <header
          className="mb-6 flex items-center justify-between rounded-xl border border-gray-200 bg-white/80 p-4 shadow-sm backdrop-blur"
          role="banner"
        >
          <h2 className="text-lg font-semibold text-gray-900">Meu Dashboard</h2>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 active:translate-y-px"
            aria-label="Sair da conta"
          >
            Sair
          </button>
        </header>

        {/* Grid de conteúdo*/}
        <main
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          role="main"
          aria-label="Conteúdo do dashboard"
        >
          {/*Card 1*/}
          <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-gray-900">Card 1</h3>
            <p className="mt-1 text-sm text-gray-600">
              Conteúdo do card 1.
            </p>
          </section>

          {/*Card 2*/}
          <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-gray-900">Card 2</h3>
            <p className="mt-1 text-sm text-gray-600">
              Conteúdo do card 2.
            </p>
          </section>

          {/* Card 3 */}
          <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-gray-900">Card 3</h3>
            <p className="mt-1 text-sm text-gray-600">
              Conteúdo do card 3.
            </p>
          </section>

          {/* Card 4 */}
          <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-gray-900">Card 4</h3>
            <p className="mt-1 text-sm text-gray-600">
              Conteúdo do card 4.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

// Ex4 — Card responsivo

// Crie um card com título, texto e botão. O card deve ter largura fixa em telas grandes (24rem) e ocupar `100%` em dispositivos móveis.

export default function Ex4() {
  return (
    <div className="my-8">
      <h1 className="text-2xl font-bold mb-4">Ex4 - Card Responsivo</h1>
      {/* Resolva aqui */}

      <div className="flex justify-center">
        {/* Card*/}
        <article
          className="w-full md:w-96 rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur transition"
          aria-label=""
        >
          {/* Título do card */}
          <h2 className="text-lg font-semibold text-gray-900">Card CP2 bonito</h2>

          {/* Texto/descrição do card */}
          <p className="mt-2 text-sm text-gray-600">
            Card totalmente resposivo 
          </p>

          {/* Ação do card */}
          <div className="mt-4">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg bg-pink-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:pink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 active:translate-y-px"
              aria-label="Saiba mais sobre o card"
            >
              Saiba mais
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}

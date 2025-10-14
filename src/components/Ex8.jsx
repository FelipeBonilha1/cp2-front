// Ex8 — Card de produto com hover e ícone animado (2 pontos)

// Implemente os efeitos solicitados no card abaixo:

// - Ao passar o mouse sobre o card, ele deve levantar levemente e aumentar a sombra.

// - O ícone no topo deve ter uma animação contínua de balanço usando @keyframes.

import { FaShoppingCart } from "react-icons/fa";

export default function Ex8() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Ex8 - Card de Produto</h1>
      <section className="mb-12 flex items-center justify-center">
        {/* Card com efeito de levantar no hover*/}
        <div
          className="group w-64 rounded-xl border border-gray-200 bg-white p-6 shadow-md transition
                     hover:-translate-y-1 hover:shadow-lg
                     focus-within:-translate-y-1 focus-within:shadow-lg
                     transform-gpu"
          role="article"
          aria-label=""
        >
          <div className="mb-4 flex justify-center text-4xl text-blue-600">
            <FaShoppingCart className="animate-[swing_1.25s_ease-in-out_infinite] motion-reduce:animate-none" />
          </div>

          {/* Título e descrição */}
          <h3 className="mb-2 text-lg font-semibold text-gray-900">Produto em Promoção</h3>
          <p className="mb-4 text-gray-600">Aproveite 20% de desconto!</p>

          {/*Botão*/}
          <button
            className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white
                       transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 active:translate-y-px"
            aria-label="Comprar produto em promoção"
          >
            Comprar
          </button>
        </div>
      </section>

      {/* Keyframes */}
      <style>{`
        @keyframes swing {
          0%   { transform: rotate(0deg); }
          20%  { transform: rotate(8deg); }
          40%  { transform: rotate(-8deg); }
          60%  { transform: rotate(6deg); }
          80%  { transform: rotate(-6deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </>
  );
}

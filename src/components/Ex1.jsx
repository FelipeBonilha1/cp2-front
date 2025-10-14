//Ex1 — Botão estilizado com Tailwind 

//Crie um botão centralizado com a cor azul, texto branco, padding, bordas arredondadas e efeito hover para escurecer a cor.
export default function Ex1() {
  return (
    <div className="my-8 flex justify-center items-center flex-col">
      <h1 className="text-2xl font-bold mb-4">Ex1 - Botão Estilizado</h1>

      {/* Botão estilizado */}
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
        Clique aqui
      </button>
    </div>
  );
}

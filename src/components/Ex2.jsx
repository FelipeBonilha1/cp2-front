//Ex2 — Flexbox básico 
//Crie um container com flex que alinhe três quadrados coloridos (50x50px) lado a lado e centralizados horizontalmente.

export default function Ex2() {
  return (
    <div className="my-8">
      <h1 className="text-2xl font-bold mb-4">Ex2 - Flexbox Básico</h1>
      <div
        className="flex justify-center gap-4"
        role="group"
        aria-label="Três quadrados coloridos alinhados"
      >
        <div className="size-[50px] rounded-md bg-purple-500" />
        <div className="size-[50px] rounded-md bg-green-500" />
        <div className="size-[50px] rounded-md bg-yellow-500" />
      </div>
    </div>
  );
}

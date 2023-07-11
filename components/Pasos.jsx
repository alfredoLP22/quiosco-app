import { useRouter } from "next/router";

const pasos = [
  { paso: 1, nombre: "Menu", url: "/" },
  { paso: 2, nombre: "Resumen", url: "/resumen" },
  { paso: 3, nombre: "Datos y total", url: "/total" },
];

function Pasos() {
  const router = useRouter();
  const calcularProgreso = () => {
    // return (paso / 3) * 100;
    const valor = {
      '/': 2,
      '/resumen': 50,
      '/total': 100,
    };

    return valor[router.pathname];
  };
  return (
    <>
      <div className="flex justify-between mb-5">
        {pasos.map((paso) => (
          <button
            onClick={() => {
              router.push(paso.url);              
            }}
            className="text-2xl font-bold px-2"
            key={paso.paso}
          >
            {paso.nombre}
          </button>
        ))}
      </div>

      <div className="bg-gray-100 mb-10">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"
          style={{ width: `${calcularProgreso()}%` }}
        ></div>
      </div>
    </>
  );
}

export default Pasos;

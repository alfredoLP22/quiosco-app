import { useEffect, useCallback } from "react";
import useQuiosco from "@/hooks/useQuiosco";
import Layout from "@/layout/Layout";
import { formatearMoneda } from "@/helpers";

export default function Total() {
  const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco();

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === '';
  }, [pedido, nombre]);

  useEffect(() => {
    comprobarPedido();
  }, [pedido, comprobarPedido]);

  
  return (
    <Layout pagina="Datos y total">
      <h1 className="text-4xl font-black">Total y confirmar pedido</h1>
      <p className="text-2xl my-10">Revisa tu pedido a continuacion</p>
      <form onSubmit={colocarOrden}>
        <div>
          <label
            className="block uppercase text-slate-800 font-bold text-xl"
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
          />
        </div>

        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar: {""} <span className="font-bold">{formatearMoneda(total)}</span>
          </p>
        </div>

        <div className="mt-5">
          <input
            disabled={comprobarPedido()}
            type="submit"
            value="Confirmar pedido"
            className={`${comprobarPedido() ? 'bg-indigo-200': 'bg-indigo-600 hover:bg-indigo-800'} w-full lg:w-auto px-5 py-2 rounded font-bold text-white uppercase text-center`}
          />
        </div>
      </form>
    </Layout>
  );
}

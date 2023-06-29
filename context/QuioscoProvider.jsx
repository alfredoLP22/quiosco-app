import { useState, useEffect, createContext } from "react";
import axios from "axios";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [producto, setProducto] = useState({});
  const [modal,setModal] = useState(false);
  const [pedido, setPedido] = useState([]);

  const obtenerCategorias = async () => {
    const { data } = await axios("/api/categorias");
    setCategorias(data);
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  useEffect(() => {
    setCategoriaActual(categorias[0]);
  }, [categorias]);

  const handleCategoriaActual = (id) => {
    const categoria = categorias.filter((c) => c.id === id);
    setCategoriaActual(categoria[0]);
  };

  const handleSetProducto = (producto) => {
    setProducto(producto);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  }
  const handleSetPedido = ({categoriaId, imagen, ...producto}) => {
    setPedido([...pedido,producto]);
  }

  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleCategoriaActual,
        handleSetProducto,
        producto,
        handleChangeModal,
        modal,
        handleSetPedido
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };
export default QuioscoContext;

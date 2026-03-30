import React, { useEffect, useState } from "react";
import "./styles/global.css";
import { getProductos, getVentas } from "./services/api";

import ProductoForm from "./components/crearProductoForm";
import VentaForm from "./components/ventaForm";
import TablaProductos from "./components/listarProducto";
import ListarVentas from "./components/listarVentas";

function App() {

  const [productos, setProductos] = useState([]);
  const [ventas, setVentas] = useState([]);
  const [mensaje, setMensaje] = useState("");

  const cargarProductos = async () => {
    const data = await getProductos();
    setProductos(data);
  };

  const cargarVentas = async () => {
    const data = await getVentas();
    setVentas(data);
  };

  const refrescarTodo = () => {
    cargarProductos();
    cargarVentas();
  };

  useEffect(() => {
    refrescarTodo();
  }, []);

  return (
    <div>
      <h1>PoliMarket</h1>
      {mensaje && <div className="alert">{mensaje}</div>}

      <div className="container">
        <ProductoForm refrescar={refrescarTodo} />
        <TablaProductos productos={productos} />
        <VentaForm productos={productos} refrescar={refrescarTodo}/>
        <ListarVentas ventas={ventas} />
      </div>
    </div>
  );
}

export default App;
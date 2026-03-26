import React, { useEffect, useState } from "react";
import "./styles/global.css";
import { getProductos } from "./services/api";

import ProductoForm from "./components/crearProductoForm";
import VentaForm from "./components/ventaForm";
import TablaProductos from "./components/listarProducto";

function App() {

  const [productos, setProductos] = useState([]);
  const [mensaje, setMensaje] = useState("");

  const cargarProductos = async () => {
    const data = await getProductos();
    setProductos(data);
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <div>
      <h1>PoliMarket</h1>
      {mensaje && <div className="alert">{mensaje}</div>}

      <div className="container">
        <TablaProductos productos={productos} />
        <ProductoForm refrescar={cargarProductos} />
        <VentaForm productos={productos} refrescar={cargarProductos} />
      </div>
    </div>
  );
}

export default App;
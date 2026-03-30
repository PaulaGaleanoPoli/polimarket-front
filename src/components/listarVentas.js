import React, { useState } from "react";
import { getVentaById } from "../services/api";

function ListarVentas({ ventas }) {

  const [ventaSeleccionada, setVentaSeleccionada] = useState("");
  const [resultado, setResultado] = useState(null);

  // 🔥 buscar por ID seleccionado
  const buscar = async () => {

    if (!ventaSeleccionada) {
      setResultado(null);
      return;
    }

    try {
      const data = await getVentaById(ventaSeleccionada);
      setResultado([data]); // lo volvemos array para tabla
    } catch {
      setResultado([]);
    }
  };

  // 🔥 limpiar filtro
  const limpiar = () => {
    setVentaSeleccionada("");
    setResultado(null);
  };

  const dataMostrar = resultado !== null ? resultado : ventas;

  return (
    <div className="card">
      <h3>Historial de Ventas</h3>

      {/* 🔥 SELECT DE VENTAS */}
      <select
        value={ventaSeleccionada}
        onChange={e => setVentaSeleccionada(e.target.value)}
      >
        <option value="">Seleccionar venta</option>

        {ventas.map(v => (
          <option key={v.id} value={v.id}>
            Venta #{v.id}
          </option>
        ))}
      </select>

      <button onClick={buscar}>
        Buscar
      </button>

      <button onClick={limpiar} style={{marginTop: "5px"}}>
        Ver todas
      </button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {dataMostrar.length === 0 ? (
            <tr>
              <td colSpan="3" className="empty">
                No hay registros
              </td>
            </tr>
          ) : (
            dataMostrar.map(v => (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.fecha}</td>
                <td>${v.total}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ListarVentas;
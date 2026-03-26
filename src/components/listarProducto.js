import React from "react";

function TablaProductos({ productos }) {

  return (
    <div className="card">
      <h3>Inventario</h3>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {productos.length === 0 ? (
            <tr>
              <td colSpan="2" className="empty">
                No hay registros
              </td>
            </tr>
          ) : (
            productos.map(p => (
              <tr key={p.id}>
                <td>{p.nombre}</td>
                <td>{p.stock}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TablaProductos;
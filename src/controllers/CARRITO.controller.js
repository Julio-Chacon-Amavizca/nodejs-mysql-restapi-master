import { pool } from "../db.js";



export const getCARRITOS = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM CARRITO");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getCARRITO = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM CARRITO WHERE idCarrito = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "CARRITO not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteCARRITO = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM ORDEN WHERE idPedidos = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "CARRITO not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createCARRITO = async (req, res) => {
    try {
      const { idPedidos,idProducto,nomProducto,precioUnitario,cantidad,monto } = req.body;
      const [rows] = await pool.query(
        "INSERT INTO ORDEN (idPedidos,idProducto,nomProducto,precioUnitario,cantidad,monto) VALUES ( ?, ?, ?, ?, ?, ? )",
        [ idPedidos,idProducto,nomProducto,precioUnitario,cantidad,monto ]
      );
      res.status(201).json({ id: rows.insertId, idPedidos,idProducto,nomProducto,precioUnitario,cantidad,monto});
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };
  


export const updateCARRITO = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, salary } = req.body;

    const [result] = await pool.query(
      "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "CARRITO not found" });

    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

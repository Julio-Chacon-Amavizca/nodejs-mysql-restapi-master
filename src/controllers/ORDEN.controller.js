import { pool } from "../db.js";

export const getORDENS = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM ORDEN");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getORDEN = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM ORDEN WHERE idPedidos = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteORDEN = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM ORDEN WHERE idPedidos = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createORDEN = async (req, res) => {
    try {
      const { idPedidos,idProducto,nomProducto,precioUnitario,cantidad,monto } = req.body;
      const [rows] = await pool.query(
        "INSERT INTO ORDEN (idPedidos,idProducto,nomProducto,precioUnitario,cantidad,monto) VALUES (?, ?, ?, ?, ?, ? )",
        [name, salary]
      );
      res.status(201).json({ id: rows.insertId, idPedidos,idProducto,nomProducto,precioUnitario,cantidad,monto});
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };
  


export const updateORDEN = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, salary } = req.body;

    const [result] = await pool.query(
      "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Employee not found" });

    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

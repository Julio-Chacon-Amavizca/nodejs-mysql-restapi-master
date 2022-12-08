import { pool } from "../db.js";

export const getENVIOS = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM ENVIO");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getENVIO = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM ENVIO WHERE idEnvio = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "ENVIO not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteENVIO = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM ENVIO WHERE idEnvio = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "ENVIO not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createENVIO = async (req, res) => {
  try {
    const { idCliente, idPedido,fecha,estatus } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO ENVIOS (idCliente,idPedido,fecha,estatus) VALUES (?, ?, ?, ?)",
      [idCliente, idPedido,fecha,estatus]
    );
    res.status(201).json({ id: rows.insertId, idCliente, idPedido,fecha, estatus });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};


export const updateENVIO = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, salary } = req.body;

    const [result] = await pool.query(
      "UPDATE ENVIO SET nombre = IFNULL(?, nombre), email = IFNULL(?, email), contraseña  = IFNULL(?,contraseña), telefono = IFNULL(?,telefono), rfc= IFNULL(?,rfc) WHERE id = ?",
      [name, salary, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "ENVIO not found" });

    const [rows] = await pool.query("SELECT * FROM ENVIO WHERE idEnvio = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
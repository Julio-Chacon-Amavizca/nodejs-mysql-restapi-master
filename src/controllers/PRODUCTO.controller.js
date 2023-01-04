import { pool } from "../db.js";

export const getPruductos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM PRODUCTO");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getPruducto = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM PRODUCTO WHERE idProducto = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "pruducto not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deletePruducto = async (req, res) => {
  try {
    const { idPruducto } = req.params;
    const [rows] = await pool.query("DELETE FROM CLIENTE WHERE idPruducto = ?", [idPruducto]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "pruducto not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createPruducto = async (req, res) => {
  try {
    const { nombre, email,contraseña,telefono,rfc } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO CLIENTE (nombre,email,contraseña,telefono,rfc) VALUES (?, ?, ?, ?, ?)",
      [nombre, email,contraseña,telefono,rfc]
    );
    res.status(201).json({ id: rows.insertId, nombre, email,contraseña, telefono, rfc });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const updatePruducto = async (req, res) => {
  try {
    const { idEnvio } = req.params;
    const { nombre, email,contraseña,telefono,rfc } = req.body;

    const [result] = await pool.query(
      "UPDATE CLIENTE SET nombre = IFNULL(?, nombre), email = IFNULL(?, email), contraseña  = IFNULL(?,contraseña), telefono = IFNULL(?,telefono), rfc= IFNULL(?,rfc) WHERE idEnvio = ?",
      [nombre, email,contraseña, telefono,rfc,idEnvio]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "pruducto not found" });

    const [rows] = await pool.query("SELECT * FROM pruducto WHERE idProducto = ?", [
      idEnvio,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

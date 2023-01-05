import { pool } from "../db.js";

export const getENVIOS = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM ENVIOS");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getENVIO = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM ENVIOS WHERE idEnvio = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "ENVIOS not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteENVIO = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM ENVIOS WHERE idEnvio = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "ENVIOS not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createENVIO = async (req, res) => {
  try {
    const { edoEntr, NoGuia,NoVta, fecha } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO ENVIOS (edoEntr,NoGuia,NoVta,fecha) VALUES ( ?, ?, ?, ?)",
      [ edoEntr, NoGuia,NoVta,fecha]
    );
    res.status(201).json({ id: rows.insertId,edoEntr, NoGuia,NoVta,fecha });
  } catch (error) {
    return res.status(500).json({ message: "WEON goes wrong" });
  }
};


export const updateENVIO = async (req, res) => {
  try {
    const { id } = req.params;
    const { edoEntr,NoGuia,NoVta,fecha } = req.body;

    const [result] = await pool.query(
      "UPDATE ENVIO SET NoGuia = IFNULL(?, NoGuia),edoEntr= IFNULL(?, edoEntr), NoVta = IFNULL(?, NoVta), fecha  = IFNULL(?,fecha) WHERE id = ?",
      [NoGuia,NoVta,fecha, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "ENVIOS not found" });

    const [rows] = await pool.query("SELECT * FROM ENVIOS WHERE idEnvio = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
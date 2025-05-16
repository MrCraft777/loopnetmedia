const express = require("express");
const app = express();
app.use(express.json());

const codes = {};

app.post("/api/request-code", (req, res) => {
  const name = req.body.name;
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  codes[name] = code;

  console.log(`Sende Code ${code} an ${name}`);

  res.json({ success: true, message: "Code wurde im Spiel gesendet!" });
});

app.post("/api/verify-code", (req, res) => {
  const { name, code } = req.body;
  if (codes[name] && codes[name] === code) {
    delete codes[name];
    return res.json({ success: true, message: "Verifiziert! Belohnung im Spiel verfügbar." });
  }
  res.json({ success: false, message: "Code ungültig oder abgelaufen." });
});

app.listen(3000, () => console.log("Webserver läuft auf Port 3000"));

import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let productos = [
  { id: 1, nombre: 'Teclado mecánico', descripcion: 'Switches rojos', votos: 0 },
  { id: 2, nombre: 'Mouse inalámbrico', descripcion: 'Sensor 16000 DPI', votos: 0 }
];

app.get('/productos', (req, res) => res.json(productos));

app.post('/productos', (req, res) => {
  const { nombre, descripcion } = req.body;
  if (!nombre) return res.status(400).json({ ok: false, error: 'Falta el nombre' });
  const nuevo = { id: Date.now(), nombre, descripcion: descripcion ?? '', votos: 0 };
  productos.push(nuevo);
  res.status(201).json({ ok: true, producto: nuevo });
});

app.listen(3000, () => console.log('API en http://localhost:3000'));

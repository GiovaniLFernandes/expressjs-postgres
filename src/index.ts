import express from "express";
import pg from "pg";
import { CustomerController } from "./controller/customer";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json())
app.use(express.text())

const customer = new CustomerController()
app.get('/', (req, res, next) => {
  return res.send('O tcc dos noia')
})
app.post('/api/hl7', customer.saveHl7)
app.post('/api/fhir', customer.saveFhir)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

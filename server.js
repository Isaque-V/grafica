const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("aplays.db");

app.post("/comprar", (req, res) => {

    const {
        email,
        telefone,
        cep,
        endereco,
        numero,
        pagamento
    } = req.body;

    db.run(
        `
        INSERT INTO compras
        (
            email,
            telefone,
            cep,
            endereco,
            numero,
            pagamento
        )
        VALUES (?, ?, ?, ?, ?, ?)
        `,
        [
            email,
            telefone,
            cep,
            endereco,
            numero,
            pagamento
        ],
        (erro) => {

            if (erro) {
                return res.status(500).json({
                    mensagem: "Erro ao salvar compra"
                });
            }

            res.json({
                mensagem: "Compra registrada com sucesso!"
            });
        }
    );
});

app.listen(3001, () => {
    console.log("Servidor rodando");
});
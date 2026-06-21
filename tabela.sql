CREATE TABLE compras (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT,
    telefone TEXT,
    cep TEXT,
    endereco TEXT,
    numero TEXT,
    pagamento TEXT,
    data_compra DATETIME DEFAULT CURRENT_TIMESTAMP
);
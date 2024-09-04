const database = "BD3-NoSQL-AtlasMongoDB11"

const studentColl= "bd3-nosql-atv1"

use(database)

const studentIdentifier = {cpf: "277.871.620-31"}

const studentUpdate = {$set: {nome: "Gabriel Alves", cpf: "177.871.620-31", rg: "32.395.164-9"}}

db[studentColl].updateOne(
    studentIdentifier,
    studentUpdate
)


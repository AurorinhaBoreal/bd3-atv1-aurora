const database = "BD3-NoSQL-AtlasMongoDB11"

const studentColl= "bd3-nosql-atv1"

use(database)

const studentIdentifier = {cpf: "277.871.620-31"}

db[studentColl].deleteOne({
    cpf: "914.265.040-20"
})

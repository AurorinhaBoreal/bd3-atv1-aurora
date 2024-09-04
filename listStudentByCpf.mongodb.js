const database = "BD3-NoSQL-AtlasMongoDB11"

const studentColl= "bd3-nosql-atv1"

use(database)

const studentCPF = "277.871.620-31"

db[studentColl].find(
    {cpf: studentCPF},
    {cod_aluno: 0}
)


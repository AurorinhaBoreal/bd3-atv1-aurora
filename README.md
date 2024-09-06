# Atividade de BD III

Esse repositório consiste em uma atividade relacionada a MongoDB

O objetivo da atividade era realizar algumas operações básicas dentro do banco NoSQL. Para isso foi criado um arquivo de inserção JSON com as informações dos alunos.

Abaixo um exemplo do mesmo:

```
{
  "cod_aluno": 1,
  "nome": "Carlos Pereira",
  "cpf": "677.528.820-46",
  "rg": "12.185.917-4",
  "email": "carlinhos@gmail.com",
  "data_nasc": "12/02/1990",
  "telefone_aluno": "(19) 98142-5634",
  "telefone_responsavel": "(11) 98564-2794"
}
```

As operações são (seguidas de onde podem ser encontradas):

- A. Inserir 10 Alunos -> [Arquivo - insertTenStudents](insertTenStudents.mongodb.js)
- B. Listar todos os Alunos -> [Arquivo - listStudents](listStudents.mongodb.js)
- C. Listar aluno pelo CPF e excluir o campo de código -> [Arquivo - listStudentByCpf](listStudentByCpf.mongodb.js)
- D. Alterar o nome, cpf e rg de um Aluno -> [Arquivo - updateStudent](updateStudent.mongodb.js)
- E. Excluir um aluno -> [Arquivo - deleteSpecificStudent](deleteSpecificStudent.mongodb.js)

*OBS: Como essas operações são realizadas diretamente no banco, após a realização de algumas delas, é necessário a deleção e inserção dos dados base para realiza-las novamente

## Licença

Este projeto é licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

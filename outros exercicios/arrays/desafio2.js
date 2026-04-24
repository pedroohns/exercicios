//utilize filter para mostrar calcular os alunos aprovados
//utilize map para mostrar o nome dos aprovados
//utilize reduce para calcular a media dos alunos 
const alunos = [
    { nome: "Ana", nota: 9 },
    { nome: "Bruno", nota: 6 },
    { nome: "Carla", nota: 8 },
    { nome: "Diego", nota: 4 },
    { nome: "Eduarda", nota: 7 }
];
const aprovados = alunos.filter(aluno => aluno.nota >= 7);
console.log(aprovados);
const nomeAprovados = aprovados.map(aluno => aluno.nome);
console.log(nomeAprovados);

const soma = alunos.reduce((acumulador, aluno) => {
    return acumulador + aluno.nota;
}, 0);
const media = soma / alunos.length;
console.log(media);
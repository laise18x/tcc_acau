const disciplinas = [
  "Lógica de Programação",
  "Fundamentos de Tecnologia da Informação",
  "Comunicação Oral e Escrita",
  "Fundamentos de Web Design",
  "Informática Aplicada",
  "Inovação e Empreendedorismo",
  "Programação WEB",
  "Desenvolvimento de Sistemas I",
  "Interface Humano Máquina",
  "Modelagem de Sistemas",
  "Metolodogia da Pesquisa",
  "Gestão de Projetos",
  "Desenvolvimento de Sistemas para Dispositivos Móveis",
  "Desenvolvimento de Sistemas II",
  "Banco de Dados",
  "Testes de Sistemas",
  "Trabalho de Conclusão de Curso"
];

let bootstrapModal;
function createModal(disciplina, container) {
  if (!bootstrapModal) {
    const modalTemplate = document.createElement("span");
    modalTemplate.innerHTML = `
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary btnDisciplina" data-bs-toggle="modal">
</button>
  `;
    const modalFlow = modalTemplate.children.item(0);
    const btnDisciplina = modalTemplate.querySelector(".btnDisciplina");
    btnDisciplina.textContent = disciplina;
    container.appendChild(modalFlow);
  }
}
const app = document.getElementById("containerModal");
const container = document.createElement("div");
container.setAttribute("class", "container px-0");
app.appendChild(container);

disciplinas.forEach((disciplina) => {
  createModal(disciplina,container)
});

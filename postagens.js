let bootstrapModal;
function mountReportModalHTML() {
  if (!bootstrapModal) {
    const modalTemplate = document.createElement("span");
    modalTemplate.innerHTML = `
      <div class="modal fade show" id="myModal" role="dialog">
        <link rel="stylesheet" type="text/css" href="modal-denuncia.css" />
        <div class="modal-dialog">
          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-bs-dismiss="modal">&times;</button>
              <h4>Denunciar</h4>
            </div>

            <div class="modal-body" style="padding:40px 50px;">
              <!--Texto no corpo do modal -->
              <p>Informe a razão da denúncia:</p>
              <input type="text" class="textoDenuncia" id="denuncia">
              <small><span id="cont">140</span> caracteres restantes</small>
              
              <br><br>

              <p>A postagem viola: </p>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  A postagem fere os direitos humanos.
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  A postagem usa palavras de baixo calão.
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  A postagem ofende colegas, professores ou a instituição de ensino.
                </label>
              </div>

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  A postagem faz anúncios.
                </label>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-concluir" data-bs-dismiss="modal">Concluir</button>
            </div>
          </div>
        </div>
      </div>
    `;
    const modal = modalTemplate.children.item(0);

    modal.querySelector("#denuncia").addEventListener('input', function(event) {
      const limite       = 140;
      const textoAtual   = event.target.value;
      const tamanhoTexto = textoAtual.length;

      if (tamanhoTexto > limite) {
        event.target.value = textoAtual.substring(0, limite);
      }
      else {
        const resto = limite - tamanhoTexto;
        modal.querySelector('#cont').innerHTML = resto;
      }
    });

    document.body.appendChild(modal);
    bootstrapModal = new bootstrap.Modal(modal);
  }

  bootstrapModal.show();
}

function mountPostHTML(post, container) {
  const movie = post;

  const card = document.createElement("div");
  card.setAttribute("class", "row content py-2 my-3");

  const postAuthor = document.createElement("p");
  postAuthor.setAttribute("class", "author");
  postAuthor.textContent = movie.director;

  const postTitle = document.createElement("h3");
  postTitle.setAttribute("class", "title");
  postTitle.textContent = movie.title;

  const postContent = document.createElement("p");
  postContent.setAttribute("class", "postContent");
  movie.description = movie.description.substring(0, 300); // Limitamos para 300 chars
  postContent.textContent = `${movie.description}...`; // Concatenamos com reticências

  const colName = document.createElement("div");
  colName.setAttribute("class", "col-2");

  const colContent = document.createElement("div");
  colContent.setAttribute("class", "col position-relative");

  const dropright = document.createElement("div");
  dropright.setAttribute(
    "class",
    "btn-group dropend position-absolute end-0 top-0"
  );

  const kebabBtn = document.createElement("button");
  kebabBtn.setAttribute("type", "button");
  kebabBtn.setAttribute("class", "btn ");
  kebabBtn.setAttribute("data-bs-toggle", "dropdown");
  kebabBtn.setAttribute("aria-expanded", "false");

  const kebabIcon = document.createElement("i");
  kebabIcon.setAttribute("class", "fa-solid fa-ellipsis-vertical fa-lg");

  const kebabMenu = document.createElement("ul");
  kebabMenu.setAttribute("class", "dropdown-menu");

  const listItemEdit = document.createElement("li");
  const btnEdit = document.createElement("button");
  btnEdit.setAttribute("class", "dropdown-item");
  btnEdit.setAttribute("type", "button");
  btnEdit.textContent = "Editar";

  const listItemDelete = document.createElement("li");
  const btnDelete = document.createElement("button");
  btnDelete.setAttribute("class", "dropdown-item");
  btnDelete.setAttribute("type", "button");
  btnDelete.textContent = "Excluir";

  const listItemReport = document.createElement("li");
  const btnReport = document.createElement("button");
  btnReport.setAttribute("class", "dropdown-item");
  btnReport.setAttribute("type", "button");
  btnReport.textContent = "Denunciar";
  btnReport.addEventListener("click", (event) => {
    event.preventDefault();
    mountReportModalHTML();
  });

  // Damos Append dos cartões para o elemento contêiner
  container.appendChild(card);

  kebabBtn.appendChild(kebabIcon);
  dropright.appendChild(kebabBtn);

  if (movie.director == "Hayao Miyazaki") {
    listItemEdit.appendChild(btnEdit);
    listItemDelete.appendChild(btnDelete);
    kebabMenu.appendChild(listItemEdit);
    kebabMenu.appendChild(listItemDelete);
  } else {
    listItemReport.appendChild(btnReport);
    kebabMenu.appendChild(listItemReport);
  }

  dropright.appendChild(kebabMenu);
  colName.appendChild(postAuthor);
  colContent.appendChild(postTitle);
  colContent.appendChild(dropright);
  colContent.appendChild(postContent);
  card.appendChild(colName);
  card.appendChild(colContent);
}

const app = document.getElementById("postagens");

const container = document.createElement("div");
container.setAttribute("class", "container px-0");

app.appendChild(container);

fetch("https://ghibliapi.herokuapp.com/films")
  .then((response) => response.json())
  .then((posts) => posts.forEach((post) => mountPostHTML(post, container)))
  .catch((err) => {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = `Essa não! Não está funcionando!`;
    app.appendChild(errorMessage);
  });

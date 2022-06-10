

export function mountPost(post, container){
  console.log('mountPost');
  const movie = post;
  const postTemplate = document.createElement("span");
  postTemplate.innerHTML = `
  <div class="row content py-2 my-3">
    <div class="col-2">
      <p class="author">
      </p>
    </div>
    <div class="col position-relative">
      <h3 class="title">
      </h3>
      <div class="btn-group dropend position-absolute end-0 top-0">
        <button
          type="button"
          class="btn "
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fa-solid fa-ellipsis-vertical fa-lg"></i>
        </button>
        <ul class="dropdown-menu">
        </ul>
      </div>
      <p class="postContent">
      </p>
    </div>
  </div>;
  `;
  const card = postTemplate.children.item(0);

  card.querySelector(".author").textContent = movie.director;
  card.querySelector(".title").textContent = movie.title;
  card.querySelector(".postContent").textContent = `${movie.description}...`;

  const listItemEdit = card.createElement("li");
  const btnEdit = card.createElement("button");
  btnEdit.setAttribute("class", "dropdown-item");
  btnEdit.setAttribute("type", "button");
  btnEdit.textContent = "Editar";

  const listItemDelete = card.createElement("li");
  const btnDelete = card.createElement("button");
  btnDelete.setAttribute("class", "dropdown-item");
  btnDelete.setAttribute("type", "button");
  btnDelete.textContent = "Excluir";

  const listItemReport = card.createElement("li");
  const btnReport = card.createElement("button");
  btnReport.setAttribute("class", "dropdown-item");
  btnReport.setAttribute("type", "button");
  btnReport.textContent = "Denunciar";
  btnReport.addEventListener("click", (event) => {
    event.preventDefault();
    mountReportModalHTML();
  });
  kebabMenu = card.querySelector(".dropdown-menu");

  if (movie.director == "Hayao Miyazaki") {
    listItemEdit.appendChild(btnEdit);
    listItemDelete.appendChild(btnDelete);
    kebabMenu.appendChild(listItemEdit);
    kebabMenu.appendChild(listItemDelete);
  } else {
    listItemReport.appendChild(btnReport);
    kebabMenu.appendChild(listItemReport);
  }
  //const card = card.querySelector(".content");
  container.appendChild(card);
  console.log(container)
}

export function mountReportModalHTML() {
  if (!bootstrapModal) {
    console.log('modal denuncia')
    const modalTemplate = document.createElement("span");
    modalTemplate.innerHTML = `
      <div class="modal fade show" id="myModal" role="dialog">
        <link rel="stylesheet" type="text/css" href="modal-denuncia.css" />
        <div class="modal-dialog">
          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Denunciar</h4>
              <button type="button" class="close btn btn-close" data-bs-dismiss="modal"></button>
              
            </div>

            <div class="modal-body" style="padding:40px 50px;">
              <!--Texto no corpo do modal -->
              <p>Informe a razão da denúncia:</p>
              <textarea type="text" class="textoDenuncia form-control" id="denuncia" rows="4"></textarea>
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
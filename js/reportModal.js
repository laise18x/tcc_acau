let bootstrapModal;
export function mountReportModalHTML() {
  if (!bootstrapModal) {
    const modalTemplate = document.createElement("span");
    modalTemplate.innerHTML = `
      <div class="modal fade show" id="myModal" role="dialog">
        <link rel="stylesheet" type="text/css" href="css/modal-denuncia.css" />
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
    const modalReport = modalTemplate.children.item(0);

    modalReport
      .querySelector("#denuncia")
      .addEventListener("input", function (event) {
        const limite = 140;
        const textoAtual = event.target.value;
        const tamanhoTexto = textoAtual.length;

        if (tamanhoTexto > limite) {
          event.target.value = textoAtual.substring(0, limite);
        } else {
          const resto = limite - tamanhoTexto;
          modalReport.querySelector("#cont").innerHTML = resto;
        }
      });

    document.body.appendChild(modalReport);
    bootstrapModal = new bootstrap.Modal(modalReport);
  }

  bootstrapModal.show();
}
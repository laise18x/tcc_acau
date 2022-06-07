fetch("https://ghibliapi.herokuapp.com/films")
  .then((response) => response.json())
  .then((data) => {
    
    data.forEach(movie => {
      
      const card = document.createElement('div');
      card.setAttribute('class', 'row content py-2 my-3');
    
      const postAuthor = document.createElement('p');
      postAuthor.setAttribute('class', 'author')
      postAuthor.textContent = movie.director;
      
      const postTitle = document.createElement('h3');
      postTitle.setAttribute('class', 'title')
      postTitle.textContent = movie.title;
    
      const postContent = document.createElement('p');
      postContent.setAttribute('class', 'postContent')
      movie.description = movie.description.substring(0, 300); // Limitamos para 300 chars
      postContent.textContent = `${movie.description}...`; // Concatenamos com reticências
      
      const colName = document.createElement('div');
      colName.setAttribute('class', 'col-2');

      const colContent = document.createElement('div');
      colContent.setAttribute('class', 'col position-relative');

      const dropright = document.createElement('div');
      dropright.setAttribute('class', 'btn-group dropend position-absolute end-0 top-0');

      const kebabBtn = document.createElement('button');
      kebabBtn.setAttribute('type', 'button');
      kebabBtn.setAttribute('class', 'btn ');
      kebabBtn.setAttribute('data-bs-toggle', 'dropdown');
      kebabBtn.setAttribute('aria-expanded', 'false');

      const kebabIcon = document.createElement('i');
      kebabIcon.setAttribute('class', 'fa-solid fa-ellipsis-vertical fa-lg');

      const kebabMenu = document.createElement('ul');
      kebabMenu.setAttribute('class', 'dropdown-menu')

      const listItemEdit = document.createElement('li');
      const btnEdit = document.createElement('button');
      btnEdit.setAttribute('class', 'dropdown-item');
      btnEdit.setAttribute('type', 'button');
      btnEdit.textContent = 'Editar';
      
      const listItemDelete = document.createElement('li');
      const btnDelete = document.createElement('button');
      btnDelete.setAttribute('class', 'dropdown-item');
      btnDelete.setAttribute('type', 'button');
      btnDelete.textContent = 'Excluir';

      const listItemReport = document.createElement('li');
      const btnReport = document.createElement('button');
      btnReport.setAttribute('class', 'dropdown-item');
      btnReport.setAttribute('type', 'button');
      btnReport.textContent = 'Denunciar';

      // Damos Append dos cartões para o elemento contêiner
      container.appendChild(card);
    
      kebabBtn.appendChild(kebabIcon);
      dropright.appendChild(kebabBtn);
      
      if(movie.director == 'Hayao Miyazaki'){
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
      
    })
  })
  .catch(err => {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = `Essa não! Não está funcionando!`
    app.appendChild(errorMessage);
  });

const app = document.getElementById("postagens");

const container = document.createElement("div");
container.setAttribute("class", "container px-0");

app.appendChild(container);

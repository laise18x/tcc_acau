fetch("https://ghibliapi.herokuapp.com/films")
  .then((response) => response.json())
  .then((data) => {
    //Aqui iremos trabalhar com o JSON
    data.forEach(movie => {
      // Criamos uma div com a classe card
      const card = document.createElement('div');
      card.setAttribute('class', 'row content py-2 my-3');
    
      // Criamos um h1 e setamos o seu textContent para o titulo do filme
      const postAuthor = document.createElement('p');
      postAuthor.setAttribute('class', 'author')
      postAuthor.textContent = movie.director;
      
      const postTitle = document.createElement('p');
      postTitle.setAttribute('class', 'title')
      postTitle.textContent = movie.title;
    
      // Criamos um elemento p e setamos o seu textContent para a descrição do filme
      const postContent = document.createElement('p');
      postContent.setAttribute('class', 'postContent')
      movie.description = movie.description.substring(0, 300); // Limitamos para 300 chars
      postContent.textContent = `${movie.description}...`; // Concatenamos com reticências
      
      const colName = document.createElement('div');
      colName.setAttribute('class', 'col-2');

      const colContent = document.createElement('div');
      colContent.setAttribute('class', 'col');

      // Damos Append dos cartões para o elemento contêiner
      container.appendChild(card);
    
      // Cada cartão terá seu h1 e p
      colName.appendChild(postAuthor);
      colContent.appendChild(postTitle);
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

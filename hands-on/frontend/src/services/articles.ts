interface IArticle {
    imageUrl: {
        value: string,
        createdAt: string
    },
    title: string,
    abstract: string,
    body: string
}
export function fetchAndShowArticles() {
    fetch('http://localhost:4201/articles')
        .then( (response) => {
            return response.json()
        })
        .then( (articles) => {
            const card = <any>document.querySelector('.card')

            articles.forEact ( (article: IArticle) => {
                card.innerHTML += `<img src="${article.imageUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${article.title}</h5>
                  <p class="card-text">${article.abstract}</p>
                  <p class="card->${article.body}</p>
                </div>`
            })
        })
        .catch(error => console.log(error.message))
}
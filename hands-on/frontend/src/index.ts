fetch("http://localhost:4201/articles")
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})
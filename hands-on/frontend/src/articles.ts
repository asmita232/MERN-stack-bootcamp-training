fetch( `http://localhost:4201/articles` )
    .then(function( response ) {
        return response.json();
    })
    .then(function( articles ) {
        console.log( articles );
        
    //     const tbody = <HTMLElement> document.querySelector( 'tbody' );
        
    //     // go through workshops array and form HTML within tbody
    //     articles.forEach(function( article : any ) {
    //         tbody.innerHTML += `<tr>
    //             <td>
    //                 <img src="${articles.imageUrl}" style="width: 200px;" />
    //             </td>
    //             <td>${article.name}</td>
    //             <td>${article.location.city}</td>
    //         </tr>`;
    //     });
    })
    .catch(function( error ) {
        console.log( error.message );
    });
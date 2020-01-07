document.querySelector(".get-jokes").addEventListener("click",getJokes);

function getJokes(event) {
    const number = document.querySelector('input[type="number"]').value;
    console.log(number);

    fetch(`http://api.icndb.com/jokes/random/${number}`).then(function(response) { 
    return response.json();
    })
    .then(function(data){
        let output = "";
        data.value.forEach(joke => {
            output+= `<li>${joke.joke}</li>`;
        });

        document.querySelector('.jokes').innerHTML = output;
    });

    event.preventDefault();
}
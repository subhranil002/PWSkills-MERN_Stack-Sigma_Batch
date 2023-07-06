fetch("http://type.fit/api/quotes")
    .then((response) => {
        return response.json();
    })
    .then((value) => {
        console.log(value);
    });

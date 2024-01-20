function createMovieCard(data) {
    // Create main movie container
    const movieContainer = document.createElement("div");
    movieContainer.className =
        "flex flex-col items-center justify-center gap-2 w-[20%] bg-[#2e2f65] py-7 rounded-2xl movieCard";

    // Create image element
    const poster = document.createElement("img");
    poster.className = "w-[225px] h-[225px] rounded-sm";
    poster.src = data.Poster;
    poster.alt = "Movie Poster";

    // Create title
    const movieName = document.createElement("h1");
    movieName.className = "text-lg font-serif text-white";
    movieName.textContent = data.Title;

    // Create watch button
    const watchBtn = document.createElement("button");
    watchBtn.className = "bg-[#ff004f] w-[85%] p-2 rounded-xl text-white";
    watchBtn.textContent = "Watch Now";

    // Append items to main movie container
    movieContainer.appendChild(poster);
    movieContainer.appendChild(movieName);
    movieContainer.appendChild(watchBtn);

    // Append movie card to #movies
    document.getElementById("movies").appendChild(movieContainer);
}

function handleError(message) {
    document.getElementById("starter").textContent = message;
}

async function searchMovie() {
    const search = document.getElementById("search").value;
    document.getElementById("movies").innerHTML = "";

    if (search.length < 3) {
        document.getElementById("starter").textContent = "Movie not found!";
    } else {
        const response = await fetch(
            `https://omdbapi.com/?apikey=[your-apiKey]&s=${search}`
        );
        const movieList = await response.json();

        if (movieList.Response == "True") {
            document.getElementById("starter").textContent = "";
            movieList.Search.forEach((movie) => {
                createMovieCard(movie);
            });
        } else {
            handleError(movieList.Error);
        }
    }
}

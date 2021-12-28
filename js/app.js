const button = document.getElementById("button");
const joke = document.getElementById("joke");

const getDadJokes = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios("https://icanhazdadjoke.com/", config);
        return res.data.joke;
    }
    catch(err) {
        const errText = `ERROR!!! Please refresh the page. ${err}`
        return errText;
    }
};

const nextJoke = async () => {
    const joketext = await getDadJokes();
    joke.innerText = joketext;
};

button.addEventListener("click", nextJoke);
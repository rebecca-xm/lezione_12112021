import { render } from "./render.js";
import { getData, saveData } from "./data.js";


const connectionAlert = () => {
    const isOnLine = window.navigator.onLine;
    const connection = document.querySelector("#connection");
    connection.innerHTML = isOnLine ? "online" : "offline";
};

document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("online", connectionAlert);
    window.addEventListener("offline", connectionAlert);

    const API = "https://jsonplaceholder.typicode.com/todos";

    fetch(API)
        .then(response => response.json())
        .then((data) => data.filter((item, index) => index < 20))       // item va passato per forza anche se non lo uso
        .then((data) => saveData(data))                                 // perché la funzione filter accetta due parametri
        .then(() => {
            render(getData())                                           // è una funzione da invocare
        });
});
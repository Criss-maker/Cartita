const messages = [
    "Oiii mi Brendita ^^, hoy es el Día de la Mujer y quiero dedicarte estas palabras, no solo porque el calendario lo marque, sino porque cada día en el que existes es motivo suficiente para celebrarte 💖",
    "Eres una mujer increíble. No por lo que haces, no por lo que planeas lograr, sino por lo que eres en esencia. Por la forma en que piensas, por la manera en que sientes, por la luz que llevas dentro incluso en los días en que no la ves 💖",
    "Tienes una mente única, capaz de cuestionarlo todo, de ver más allá de lo evidente. No te conformas con respuestas vacías ni con caminos fáciles. Eres fuego y pensamiento, emoción y razón, todo en una combinación perfecta que te hace diferente de cualquier otra persona 💖",
    "Tienes un corazón enorme :3, uno que sueña con ayudar, con aliviar, con ser ese refugio para quienes más lo necesitan. No cualquiera siente así. No cualquiera tiene esa nobleza, esa fuerza para cargar con tanto sin dejar de querer dar más 💖",
    "Me encanta escucharte, saber lo que pasa por tu mente, perderme en nuestras conversaciones, porque contigo el tiempo nunca es desperdiciado. La distancia puede existir, sí, pero nunca ha sido un obstáculo real para todo lo que compartimos. Si algo me ha quedado claro, es que lo que se construye con sinceridad y cariño no se mide en kilómetros ^^ 💖",
    "Hoy quiero que recuerdes que eres valiosa. No porque el mundo lo diga, no porque alguien más lo valide, sino porque lo eres por ti misma. Porque el simple hecho de ser tú ya es suficiente razón para admirarte :3333 💖"
];

let index = 0;
const messageElement = document.getElementById("message");
const button = document.getElementById("revealButton");
const gifElement = document.getElementById("gif");

button.addEventListener("click", () => {
    if (index < messages.length) {
        messageElement.textContent = messages[index];
        index++;
    } else {
        button.style.display = "none"; // Oculta el botón al final
        messageElement.textContent = "Espero poder darte tus regalitos por tu día pronto ^^ mereces que te amen y yo te amo mucho, y otra vez, Feliz dia mi amorrrrrr 💖  TE AMO :3  💖";
        gifElement.src = "final.gif"; // Cambia el GIF al final
    }
});
document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("revealButton");
    let audio = document.getElementById("backgroundMusic");

    button.addEventListener("click", function () {
        audio.play(); // Reproduce la música al hacer clic
    });
});

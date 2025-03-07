const toggleButton = document.getElementById("toggleDarkMode");
const body = document.body;

// Verificar si hay un tema guardado en localStorage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
}

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Guardar la preferencia en localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

let progress = 0;
function updateProgress() {
    if (progress < 75) {
        progress += 1;
        let progressBar = document.getElementById("progress");
        progressBar.style.width = progress + "%";
        progressBar.textContent = progress + "%";
        setTimeout(updateProgress, 20); // Ajusta la velocidad de carga
    }
    }
    let progreso1 =0;
    function updateProgress1() {
    if (progreso1 < 45) {
        progreso1 += 1;
        let progressBar = document.getElementById("progreso1");
        progressBar.style.width = progreso1 + "%";
        progressBar.textContent = progreso1 + "%";
        setTimeout(updateProgress1, 20); // Ajusta la velocidad de carga
    }
    }

    let progreso2 =0;
    function updateProgress2() {
    if (progreso2 < 60) {
        progreso2 += 1;
        let progressBar = document.getElementById("progreso2");
        progressBar.style.width = progreso2 + "%";
        progressBar.textContent = progreso2 + "%";
        setTimeout(updateProgress2, 20); // Ajusta la velocidad de carga
    }
    }

    let progreso3 =0;
    function updateProgress3() {
    if (progreso3 < 85) {
        progreso3 += 1;
        let progressBar = document.getElementById("progreso3");
        progressBar.style.width = progreso3 + "%";
        progressBar.textContent = progreso3 + "%";
        setTimeout(updateProgress3, 20); // Ajusta la velocidad de carga
    }
    }

    let progreso4 =0;
    function updateProgress4() {
    if (progreso4 < 40) {
        progreso4 += 1;
        let progressBar = document.getElementById("progreso4");
        progressBar.style.width = progreso4 + "%";
        progressBar.textContent = progreso4 + "%";
        setTimeout(updateProgress4, 20); // Ajusta la velocidad de carga
    }
    }

    let progreso5 =0;
    function updateProgress5() {
    if (progreso5 < 50) {
        progreso5 += 1;
        let progressBar = document.getElementById("progreso5");
        progressBar.style.width = progreso5 + "%";
        progressBar.textContent = progreso5 + "%";
        setTimeout(updateProgress5, 20); // Ajusta la velocidad de carga
    }
    }

updateProgress(); // Iniciar la carga automática
updateProgress1(); // Iniciar la carga automática
updateProgress2(); // Iniciar la carga automática
updateProgress3(); // Iniciar la carga automática
updateProgress4(); // Iniciar la carga automática
updateProgress5(); // Iniciar la carga automática

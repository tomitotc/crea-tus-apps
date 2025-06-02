function startGame() {
  const gameDiv = document.getElementById('game');
  gameDiv.innerHTML = `
    <h2>Elige el tipo de app</h2>
    <button onclick="chooseApp('Juego')">Juego</button>
    <button onclick="chooseApp('Red Social')">Red Social</button>
    <button onclick="chooseApp('Utilidad')">Utilidad</button>
  `;
}

let selectedApp = "";

function chooseApp(type) {
  selectedApp = type;
  const gameDiv = document.getElementById('game');
  gameDiv.innerHTML = `
    <h2>¿A qué público va dirigida?</h2>
    <button onclick="chooseAudience('Niños')">Niños</button>
    <button onclick="chooseAudience('Jóvenes')">Jóvenes</button>
    <button onclick="chooseAudience('Adultos')">Adultos</button>
  `;
}

let selectedAudience = "";

function chooseAudience(audience) {
  selectedAudience = audience;
  const gameDiv = document.getElementById('game');
  gameDiv.innerHTML = `
    <h2>Desarrollando ${selectedApp} para ${selectedAudience}...</h2>
    <p>Invirtiendo tiempo y recursos...</p>
    <button onclick="launchApp()">Lanzar App</button>
  `;
}

function launchApp() {
  const successChance = Math.random();
  let message = "";

  if (successChance > 0.5) {
    message = `🎉 ¡Tu app fue un éxito entre los ${selectedAudience}!`;
  } else {
    message = `😓 Tu app no tuvo mucho éxito... intenta una estrategia distinta.`;
  }

  const gameDiv = document.getElementById('game');
  gameDiv.innerHTML = `
    <h2>Resultado</h2>
    <p>${message}</p>
    <button onclick="startGame()">Crear otra app</button>
  `;
}
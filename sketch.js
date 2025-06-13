let screenClicked = false;
let trees = []; // Array para armazenar as posições das árvores

function setup() {
    createCanvas(windowWidth * 0.8, windowHeight * 0.8); // Cria um canvas que ocupa 80% da largura e altura da janela
    textAlign(CENTER, CENTER);
    textSize(15);
}

function draw() {
    background(220, 240, 255); // Cor do céu

    if (!screenClicked) {
        fill(0); // Cor do texto preta
        text("Clique para plantar as árvores pois, é crucial para a manutenção da vida no planeta e para a saúde do meio ambiente!", width / 2, height / 2);
    } else {
        // Desenha o chão
        fill(100, 150, 70); // Cor do chão (verde)
        rect(0, height - 50, width, 50); // Chão na parte inferior da tela

        // Desenha todas as árvores no array
        for (let i = 0; i < trees.length; i++) {
            drawSimpleTree(trees[i].x, trees[i].y);
        }
    }
}

function mousePressed() {
    if (!screenClicked) {
        screenClicked = true;
    } else {
        // Adiciona uma nova árvore na posição do clique
        trees.push({ x: mouseX, y: mouseY });
    }
}

// Função para desenhar uma árvore simples
function drawSimpleTree(x, y) {
    // Tronco
    fill(139, 69, 19); // Marrom
    rect(x - 10, y, 20, 50); // Tronco da árvore

    // Folhagem
    fill(34, 139, 34); // Verde floresta
    ellipse(x, y, 60, 80); // Formato da folhagem
}

function windowResized() {
    resizeCanvas(windowWidth * 0.8, windowHeight * 0.8);
}
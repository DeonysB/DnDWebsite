function generateCard() {
    const canvas = document.getElementById('cardCanvas');
    const ctx = canvas.getContext('2d');

    const name = document.getElementById('npcName').value || "Unknown Hero";
    const role = document.getElementById('npcRole').value || "Role Unknown";
    const description = document.getElementById('npcDescription').value || "No description provided.";
    const ability = document.getElementById('npcAbility').value || "No ability provided.";


    ctx.clearRect(0, 0, canvas.width, canvas.height);


    ctx.fillStyle = "#f9f9f9";
    ctx.fillRect(0, 0, canvas.width, canvas.height);



    ctx.fillStyle = "#333";
    ctx.font = "bold 20px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText(name, canvas.width / 2, 30);

 
    ctx.font = "italic 16px Arial";
    ctx.fillText(role, canvas.width / 2, 60);


    ctx.font = "14px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const descriptionY = canvas.height / 2 - 40;
    wrapText(ctx, description, canvas.width / 2, descriptionY, canvas.width - 40, 20);

    ctx.font = "bold 16px Arial";
  
    ctx.fillText("Special Ability:", canvas.width / 2, canvas.height - 100);
    ctx.font = "14px Arial";
    ctx.fillStyle = "#333";
    ctx.fillText(ability, canvas.width / 2, canvas.height - 70);


    document.getElementById('downloadCard').style.display = "block";
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    const lines = [];
    for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = context.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            lines.push(line);
            line = words[n] + ' ';
        } else {
            line = testLine;
        }
    }
    lines.push(line);

    y -= (lines.length - 1) * lineHeight / 2;

    for (let i = 0; i < lines.length; i++) {
        context.fillText(lines[i], x, y);
        y += lineHeight;
    }
}

function downloadCard() {
    const canvas = document.getElementById('cardCanvas');
    const link = document.createElement('a');
    link.download = 'adventure_card.png';
    link.href = canvas.toDataURL();
    link.click();
}

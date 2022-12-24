function appendToBody(element) {
    document.body.appendChild(element);
}

var sectionStart = 1;
var sectionEnd = 10;

function createButton(exerciseNumber) {
    var button = document.createElement('button');
    button.textContent = `Exercício ${exerciseNumber}`;

    var anchor = document.createElement('a');
    anchor.href = `./exercises/${sectionStart}-${sectionEnd}/${exerciseNumber}/index.html`;

    anchor.appendChild(button);
    appendToBody(anchor);
}

function createSectionTitle() {
    var h2 = document.createElement('h2');
    h2.textContent = `${sectionStart} ao ${sectionEnd}`;
    appendToBody(h2);
}

for (let i = 0; i < 100; i++) {
    if (i % 10 === 0) {
        if (i !== 0) {
            sectionStart = i + 1;
            sectionEnd = i + 10;
        }
        createSectionTitle(sectionStart, sectionEnd);
    }
    createButton(i + 1, sectionStart, sectionEnd);
}
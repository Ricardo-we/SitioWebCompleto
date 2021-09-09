var labels = ["Parent Mail Id", "Mother Name", "Father Name", "Parmanent Add."];
var img = "../static/img/template04/lock.png";
var values = ["parentboth84@gmail.com", "Monica Larson", "Bernard Taylor", "Karol Bagh, Delhi"];
var big_container = document.getElementById('container_elements');
var elements = ``;

for (let i = 0; i < labels.length; i++){
    elements+= `
    <div class="big_container">
        <span>${labels[i]}</span>
        <input type="text" value="${values[i]}">
        <img src="${img}" alt="lock">
    </div>
    `;
}

big_container.innerHTML+=elements;

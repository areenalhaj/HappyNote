<!-- text-decoration: line-through; for done

scores, emojies according to scores

colors change

width and height max (fixed) and fit with content-->

<!-- js old task code: -->

<!-- // for (var c = 0; c <= 30; c++) {
// document.getElementById("loop-ul").insertAdjacentHTML('beforeend', `<li>10*${c}=${10 * c}</li><br>`)
// } -->

document.getElementById("print-del-vowels-btn").addEventListener('click', function () {
var word = document.getElementById("addname-input").value;
document.getElementById("addname-input").value = "";
document.getElementById("del-vowels-p").innerHTML = "";
for (var letter of word)
if (!"aeoui".includes(letter.toLowerCase()))
document.getElementById("del-vowels-p").innerHTML += `${letter}</br>`;
})

<!-- html content for the last code: -->

<button class="btns texts" type="button" id="print-del-vowels-btn">print</button>

<div>
    <p class="texts">Print & Delete Vowel Letters (a, e, i, o, u):</p>
    <p class="texts" id="del-vowels-p"></p>
</div>

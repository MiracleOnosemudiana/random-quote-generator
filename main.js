let quoteContents = document.querySelector('.quoteContents');
let generateButton = document.querySelector('.button');
let resetButton = document.querySelector('.reset');

// document.onload = resetButton.style.display = 'none';
// let index = 20;
// function generateQuote() {
//     quotes = fetch("https://type.fit/api/quotes").then
//         (res => res.json()).then(items => {
//             console.log(items)
//             let html = '';
//             html += `
//             <div class="quoteContents">
//                 <p class="quote"><q>${items[index].text}</q></p>
//                 <p style="font-family: cursive; "><b> ~ ${items[index].author} ~ </b></p>
//             </div>
//             `
//             // items.forEach(item => {
//             //     html += `
//             //    <div class="quoteContents">
//             //        <p class="quote"><q>${item}</q></p>
//             //        <p style="font-family: cursive; "><b> ~ ${item} ~ </b></p>
//             //    </div>
//             //    `
//             // })

//             quoteContents.innerHTML = html;
//         });
//     generateButton.style.display = 'none'
//     resetButton.style.display = 'inline'
// }

// document.onload(resetButton.style.display = 'none')
// document.onload(generateButton.style.display = 'inline')

// generateButton.addEventListener('click', generateQuote)

// function resetQuote() {
//     generateButton.style.display = 'inline'
//     resetButton.style.display = 'none'
// }
// resetButton.addEventListener('click', resetQuote)


function generateQuote() {

    quotes = fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(items => {
            console.log(items)
            let html = '';
                html += `
               <div class="quoteContents">
                   <p class="quote"><q>${items.content}</q></p>
                   <p style="font-family: cursive; "><b> ~ ${items.author} ~ </b></p>
               </div>
               `
            quoteContents.innerHTML = html;
        });
    generateButton.style.display = 'inline'
}

generateButton.addEventListener('click', generateQuote)



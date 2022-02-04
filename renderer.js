
const sign = document.querySelectorAll(".butt");

// for (const button in sign) {
//     button.onclick = () => {
//         const div = document.createElement("div");
//         div.setAttribute('style', 'background-color:red, width:100px, height:100px');
//         div.innerHTML = '<span>Hello, World!</span>';
//         document.querySelector('body').appendChild(div);
//     }
// }

sign.forEach((button) => {
    button.onclick = () => {
        const divs = document.querySelectorAll(".outer");
        divs.forEach((div) => {
            div.setAttribute('style', 'background-color: red');
        });
    }
})
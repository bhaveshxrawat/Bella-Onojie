// const mediaQuery = window.matchMedia("(max-width:678px)"); // define the media query
// const header = document.querySelector("header"); // select the header element
// const hamBtn = document.createElement("button"); // create a button element
// hamBtn.setAttribute('id', 'ham-Btn'); // set the id of the button to "ham-Btn"
// mediaQuery.onchange = () => { // listen for changes to the media query
//   if (mediaQuery.matches) { // if the media query matches
//     header.appendChild(hamBtn); // append the button to the header element
//   } else if (header.contains(hamBtn)) { // if the media query does not match and the header element contains the button
//     hamBtn.remove(); // remove the button from the header element
//   }
// };
const hamBtn = document.getElementById('ham-Btn')
const hiddenNav = document.querySelector('.hidden_nav')
hamBtn.onclick = () => {
  hiddenNav.classList.toggle('active')
}
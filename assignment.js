// function backgroundmode(){
//     const bool = document.getElementById("toggle").checked;
//     if (bool) {
//         document.body.classList.add('dark-mode');
//     } else {
//         document.body.classList.remove('dark-mode');
//     }
// }
// window.onload = backgroundmode()
window.onload = function() {
    const toggle = document.getElementById('toggle');
    toggle.checked = false; // This will uncheck the checkbox

    toggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode');
    });
}
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
} 
document.addEventListener("DOMContentLoaded", (event) => {
    openTab(event, "Aboutme")
})
const circles = document.querySelectorAll('.circle');
const anchor = document.getElementById('anchor')
const rekt = anchor.getBoundingClientRect();
const anchorx = rekt.left + rekt.width/2;
const anchory = rekt.top + rekt.height/2;
document.addEventListener('mousemove', (e) => {
  const mousex = e.clientX;
  const mousey = e.clientY;
  const angle = angle(mousex, mousey, anchorx, anchory);
  circles.forEach(circle => {
    circle.style.transform = `rotate(${90 + angle}deg)`;
  })
})
function angle(cx, cy, ex, ey){
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy/dx);
  const deg = rad*180/Math.PI;
  return deg;
}
function downloadResume() {
  var element = document.createElement('a');
  element.setAttribute('href', 'there was an attempt at making a resume.pdf'); 
  element.setAttribute('download', 'there was an attempt at making a resume.pdf');
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
document.getElementById('downloadButton').addEventListener('click', downloadResume);
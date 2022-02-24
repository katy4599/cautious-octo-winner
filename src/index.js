function main() {
  // Get the "my-box" div from the document
  // When someone clicks on the element then change the background color
  // to red.
  const myBox = document.getElementById('my-box');
    //myBox.onclick = 'red'
  

  myBox.addEventListener('click', event => {
    myBox.style.backgroundColor = 'red';
  })
}



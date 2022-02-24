  
function main() {
  // Get the "my-box" div from the document
  // When someone clicks on the element then change the background color
  // to red.
  const myBox = document.getElementById('my-box');
    //myBox.onclick = 'red'
  

  myBox.addEventListener('click', event => {
      
    if (myBox.style.backgroundColor == 'red') {
        myBox.style.backgroundColor = 'black';
    }
    else {
      myBox.style.backgroundColor = 'red';
    }
  })
}



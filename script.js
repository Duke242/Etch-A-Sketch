const container = document.querySelector('.container');

let blackButtonPressed = false 
let randomButtonPressed = false 
let eraseButtonPressed = false 


for (i = 0; i < 256; i++) { 
    const div = document.createElement("div");
    container.appendChild(div);
    div.classList.add('new');  
    div.addEventListener('mouseenter', () => {if (blackButtonPressed === true) {
        div.style.backgroundColor = "black" 
    } else if (eraseButtonPressed === true){ 
        div.style.backgroundColor = "white"
    } else if (randomButtonPressed === true) { div.style.backgroundColor = randomColor()}
    else {return}
    })} 
        

      const blackButton = document.querySelector('#blackButton')
      const randomButton = document.querySelector('#randomButton')
      const eraseButton = document.querySelector('#eraseButton')

      blackButton.addEventListener('click', () => { 
        blackButtonPressed = true 
        randomButtonPressed = false 
        eraseButtonPressed = false
      });

      eraseButton.addEventListener('click', () => { 
        blackButtonPressed = false
        randomButtonPressed = false 
        eraseButtonPressed = true
      });

      randomButton.addEventListener('click', () => { 
        blackButtonPressed = false
        randomButtonPressed = true
        eraseButtonPressed = false
      });


      function randomColor() {
        rc = "#";
        for (i = 0; i < 6; i++) {
          rc += Math.floor(Math.random() * 16).toString(16);
        }
        return rc;
      }

    
    
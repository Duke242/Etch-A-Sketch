const container = document.querySelector('.container');

for (i = 0; i < 256; i++) { 
    const div = document.createElement("div");
    container.appendChild(div);
    div.classList.add('new');  
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = randomColor();
      });


      function randomColor() {
        rc = "#";
        for (i = 0; i < 6; i++) {
          rc += Math.floor(Math.random() * 16).toString(16);
        }
        return rc;
      }
    }
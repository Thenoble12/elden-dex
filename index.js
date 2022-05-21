    const init = () => {
        const searchForm = document.getElementById('eldenForm');
      
        searchForm.addEventListener('submit', (event) => {
          event.preventDefault();
          const searched = event.target.search.value;
      
          console.log(event.target)
          console.log(searched);
      
          fetch(`https://eldenring.fanapis.com/api/creatures?name=${searched}`)
          .then(response => response.json())
          .then(object => { 
              console.log(object)
              object.data.forEach(e => {
                const img = document.createElement('div');
                img.innerHTML = `
                        <p>${e.name}</p>
                        <div></div>
                        <img src=${e.image}
                        <div></div>
                        <p>${e.description}</p>
                        <div></div>
                        <div></div>`
                // let img = document.createElement('img');
                // let p = document.createElement('p');
                // img.src = e.image
                // p.innerHTML = `<p> NAME: ${e.name} </p>`
                document.querySelector(".gallery").appendChild(img);
              })
                              
          });
        });

      }
      
      document.addEventListener('DOMContentLoaded', init);
      

    const init = () => {
        const searchForm = document.getElementById('eldenForm');
        const selected = document.getElementById('category');
        const search = document.getElementById('search')

        let searchCategory = '';

        window.addEventListener('DOMContentLoaded', (event) => {
            console.log('DOM fully loaded and parsed');
        });

        
        selected.addEventListener('change', (event) => {
            event.preventDefault();
            searchCategory = event.target.value;
            //search.placeholder = `Search for a ${searchCategory}`
            document.querySelector("input").setAttribute('placeholder', `Search for ${searchCategory}`)
            console.log("CHECK#1 " + searchCategory)

            fetch(`https://eldenring.fanapis.com/api/${searchCategory}?limit=500`)
          .then(response => response.json())
          .then(object => { 
              console.log(object)
              object.data.forEach(e => {
                const div = document.createElement('div');
                div.innerHTML = `
                        <h4>${e.name}</h4>
                        <img src=${e.image}>
                        <details>
                            <summary>Details</summary>
                            <p>${e.description}</p>
                        </details>`
                // let img = document.createElement('img');
                // let p = document.createElement('p');
                // img.src = e.image
                // p.innerHTML = `<p> NAME: ${e.name} </p>`
                document.querySelector(".gallery").appendChild(div);
              })                              
          })
          .catch(error => {
            alert("Error!");
            let p = document.createElement('p');
            p.innerHTML = `ERROR: ${error.message}`
            document.body.appendChild(p);
          })     
        })


      
        searchForm.addEventListener('submit', (event) => {
          event.preventDefault();
          const searched = event.target.search.value;
      
          console.log(event.target)
          console.log(searched);
          console.log("CHECK#2 " + searchCategory)
      
          fetch(`https://eldenring.fanapis.com/api/${searchCategory}?name=${searched}`)
          .then(response => response.json())
          .then(object => { 
              console.log(object)
              object.data.forEach(e => {
                const div = document.createElement('div');
                div.innerHTML = `
                        <h4>${e.name}</h4>
                        <img src=${e.image}>
                        <details>
                            <summary>Details</summary>
                            <p>${e.description}</p>
                        </details>`
                // let img = document.createElement('img');
                // let p = document.createElement('p');
                // img.src = e.image
                // p.innerHTML = `<p> NAME: ${e.name} </p>`
                document.querySelector(".gallery").appendChild(div);
              })                              
          })
          .catch(error => {
            alert("Error!");
            let p = document.createElement('p');
            p.innerHTML = `ERROR: ${error.message}`
            document.body.appendChild(p);
          })          
        });
      }
      
      document.addEventListener('DOMContentLoaded', init);
      

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
      document.querySelector("input").setAttribute('placeholder', `Search for ${searchCategory}`)
      console.log("CHECK#1 " + searchCategory)
     
      if (searchCategory){
          document.getElementsByTagName("button")[0].removeAttribute("disabled")
      }
  })



  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searched = event.target.search.value;
    const path = !searched ? `${searchCategory}?limit=500` : `${searchCategory}?name=${searched}`
         
    fetch(`https://eldenring.fanapis.com/api/${path}`)
    .then(response => response.json())
    .then(object => { 
        document.querySelector(".gallery").replaceChildren();
        console.log(object)
        console.log(`https://eldenring.fanapis.com/api/${path}`)
        let sortArray = object.data       
        sortArray.sort((a, b) => a.name.localeCompare(b.name))
        sortArray.forEach(e => { 
          const div = document.createElement('div');
          div.innerHTML = `
                  <h4>${e.name}</h4>
                  <img src=${e.image}>
                  <details>
                      <summary>Details</summary>
                      <p>${e.description}</p>
                  </details>`
          document.querySelector(".gallery").appendChild(div);
        })                              
    })
    .catch(error => {
      alert("Error!");
      let p = document.createElement('p');      
      document.body.appendChild(p);
    })          
  });
}

document.addEventListener('DOMContentLoaded', init);

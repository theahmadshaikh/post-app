const container = document.querySelector(".container");
const title = document.querySelector(".title");
const btn = document.querySelector("#btn");

//Making http request
const url="https://jsonplaceholder.typicode.com/posts";
// fetch(url).then((resonse)=>{
//     resonse.json().then((data)=>{
//         console.log(data);
//     }).catch(error=>console.log(error));
// }).catch((error)=>console.log(error))


const fetchPost = async ()=>{
    let data="";
    let output="";
    try{
   const response = await fetch(url);
    data = await response.json();
    }
    catch(error)
    {
        console.log(error);
    }
    data.forEach(element => {
        const {title:title,body:body} = element;
         output += `<div class="card">
        <div class="card-title">
          <h2>${title}</h2>
        </div>
        <div class="card-body">
          <p>
           ${body};
          </p>
        </div>
      </div>

      `;
    });
    container.innerHTML=output;
}
btn.addEventListener('click',fetchPost);
// fetchPost();
 function card( title, cName , views , months , duration ){
     let container = document.querySelector(".container");
      let html = `<div class="card">
            <div id="image">
    <img src="https://i.ytimg.com/vi/oxO1Z5L5S4c/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAHOHXiFumx_p8gBTWgmY2TPdP7Rg" width="200" alt="image">
    <span id="duration">${duration}</span>
</div>
<div id="content">
    <h3 id="title">${title}</h3>
    <span id="cName">${cName}</span>
   
    <span id="views">${views}</span>
    <span>*</span>
    <span id="months">${months}</span>
</div>
        </div>
     ` 
 container.innerHTML += html ;
 }
  function addCard(){
    let title = prompt("Enter title");
 let cName = prompt("Enter Channel Name");
 let views = prompt("Enter views");
 let months = prompt("Enter months old");
 let duration = prompt("Enter duration of video");
 card(title , cName , views , months , duration);
  }
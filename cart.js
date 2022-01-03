let data = JSON.parse(localStorage.getItem("items"));
console.log(data);

function appenddata(data){
    data.map(function(ele,index){
        
        let div = document.createElement("div");
        div.setAttribute("class", "photo");

        let img = document.createElement("img");
        img.src = ele.strMealThumb;

        
        let name = document.createElement("h4");
        name.innerText = ele.strMeal

        let button = document.createElement("button");
        button.innerText = "Remove";
        button.addEventListener("click",function(){
            // console.log(index)
            removeItem(index);
        })

        div.append(img,name,button);

        document.querySelector(".product").append(div)
    })



}
appenddata(data)


function removeItem(index){
     data = JSON.parse(localStorage.getItem("items"));
    data.splice(index, 1);
    console.log(index)
    appenddata(data)
}
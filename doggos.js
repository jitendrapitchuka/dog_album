const BREEDS_URL="https://dog.ceo/api/breeds/image/random";

function addDoggo(){
fetch(BREEDS_URL)

.then(function(response){
return response.json()
})
.then(function(data){
    const img=document.createElement("img")
    img.src=data.message;
    img.alt="cute dog"
    img.style.width=100;
    img.style.height=100;
    


document.querySelector(".doggos").appendChild(img);

})
}
//console.log("jitenr")


document.querySelector(".add-doggo").addEventListener("click",addDoggo);

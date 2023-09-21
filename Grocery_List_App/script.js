/* POPUP FORM ADAPTED FROM W3SCHOOLS START*/
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    createFoodItem();
  document.getElementById("myForm").style.display = "none";
}

/* POPUP FORM ADAPTED FROM W3SCHOOLS END*/

var foodInput = document.querySelector(".foodinput");
var quantityInput = document.querySelector(".quantityinput");
var unitInput = document.querySelector(".unitinput");
var submit = document.querySelector(".btncancel"); 

var list = document.querySelector(".foodList"); 

submit.addEventListener("click", addFoodfunc);

function addFoodfunc(event){
    event.preventDefault();
    
  }



var counter = 0;

function createFoodItem() {
    if (foodInput.value == "") {
        alert("Please complete form.");
    }
    
    else if (unitInput.value == "") {
        alert("Please complete form.");
    }
    
    else if (quantityInput.value == "") {
        alert("Please complete form.");
    }
    
    else {
        counter++;
        let foodItem = `<h4 class="foodItemTitle">${foodInput.value}</h4>
            <h4 class="foodItemNum">${quantityInput.value}</h4>
            <h4 class="foodItemServing">${unitInput.value}</h4>
            <a href="#" class="foodItemDelete">
            <i class="far fa-times-circle"></i></a>`;
    
    let parent = document.createElement('div');
    parent.classList.add("foodItem");
    parent.innerHTML = foodItem;
    
    list.appendChild(parent);
    
    foodInput.value = "";
    quantityInput.value = "";
    unitInput.value = "";
    
    /* CODE WRITTEN BY IXD TUTOR JJ BASTIDA START*/
        
    document.getElementsByClassName("foodItemDelete")[counter-1].addEventListener("click",function(){
        console.log(this); this.parentElement.parentElement.removeChild(this.parentElement);
        counter--;
    })
        /* CODE WRITTEN BY IXD TUTOR JJ BASTIDA END*/
    }
}


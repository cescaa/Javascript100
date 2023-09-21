var calculate = document.getElementById("calculate");

function  spinOreo() {
    var  oreo1 = document.getElementById("oreo1");
    var  oreo2 = document.getElementById("oreo2");
        
    oreo1.style.transform = `rotate(360deg)`;
    oreo2.style.transform = `rotate(-360deg)`;
    
};

calculate.addEventListener("click", spinOreo);

function calculateWeight() {
    var result = document.getElementById("result");
    var weight = document.getElementById("weight").value;
    var answer;

    
if (weight == 0) {
	answer = `And none for Gretchen Weiners, bye.`;
} else if (weight <= 0.0261) {
    answer = `You weigh about 1 oreo.`;
} else {
	answer = `You weigh ${(weight * 453.6 / 11.3).toFixed(1)} oreos. Yum!`;
}; 
    
    result.innerHTML = answer;
    
        };
        
        calculate.addEventListener("click", calculateWeight);


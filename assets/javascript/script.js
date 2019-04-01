
var wins = 0;

var losses = 0;

var counter = 0;

var targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);

// var numberOptions = [Math.floor(Math.random() * 12 + 1), Math.floor(Math.random() * 12 + 1), Math.floor(Math.random() * 12 + 1), Math.floor(Math.random() * 12 + 1)];


$("#wins").text(wins);
$("#losses").text(losses);



$("#number-to-guess").text(targetNumber);



$("#total-score").text(counter);




  crystal();
  function crystal()
   { numberOptions = [Math.floor(Math.random() * 12 + 1), Math.floor(Math.random() * 12 + 1), Math.floor(Math.random() * 12 + 1), Math.floor(Math.random() * 12 + 1)];
    console.log(numberOptions);
    for (var i = 0; i < numberOptions.length; i++) {
      var imageCrystal = $("<img>");
      imageCrystal.addClass("crystal-image");
      imageCrystal.attr('src', "http://pngimg.com/uploads/ruby/ruby_PNG2.png");
      imageCrystal.attr("data-crystalvalue", numberOptions[i]);
      $("#crystals").append(imageCrystal);
      
    }
   }
 


$(".crystal-image").on("click", function () {


  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);

  counter += crystalValue;



  updatescore();

  function updatescore() {
    document.getElementById("total-score").innerHTML = counter;

  }


  function reset() {
    
    numberOptions = [Math.floor(Math.random() * 12 + 1), Math.floor(Math.random() * 12 + 1), Math.floor(Math.random() * 12 + 1), Math.floor(Math.random() * 12 + 1)];
    console.log(numberOptions);
    
    targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);

    $("#number-to-guess").text(targetNumber);
      
    counter = 0;
    
  }

  


  ("New score: " + counter)



  if (counter === targetNumber) {
    alert("You Win!! Press OK to play again!");
    wins++;
    $("#wins").text(wins);
    $("#total-score").text(0);
    reset();

  }

  else if (counter > targetNumber) {
    
    alert("You Lose!! Press OK to play again!");
    losses++;
    $("#losses").text(losses);
    $("#total-score").text(0);
    reset();
  } 

  
});





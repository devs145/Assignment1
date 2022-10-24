var app = new Framework7({
  // App root element
  el: '#app',
  // ... other parameters
});
var mainView = app.views.create('.view-main')

// water level thresholds
  var waterlevel = 20;
  var nowater = 0;
  var drowning = 40;
// nutrient level thresholds
  var food = 30;
  var nofood = 0;
  var overfeed = 40;

  var neardeath = false;
  var trimmed = false;


function dryout() {
  waterlevel--;
  console.log(waterlevel);
  checkhealth();
  var watertimer = setTimeout(dryout,500);
}

dryout();

function starving() {
  food--;
  //console.log(food);
  checkhealth();
  var foodtimer = setTimeout(starving,500);

}
starving();

function checkhealth() {
  if (waterlevel <= nowater || waterlevel >= drowning || food <= nofood) {
    neardeath = true;
    console.log("Help!");
    $("#plant path").css("fill", "chocolate");
  }
  if(neardeath && waterlevel > nowater && food > nofood && trimmed) {
    $("#plant path").css("fill", "#568b62");
    neardeath = false;
    setTimeout(function() {
      $("#trim").fadeIn();
      trimmed = false;
    }, 5000)
  }
}

$("#water-me").on("click", function() {
  waterlevel += 20;
  $("#water").fadeIn().delay(3000).fadeOut();

})

$("#feed-me").on("click", function() {
  food += 20;
  $("#food").fadeIn().delay(3000).fadeOut();

})

$("#trim-me").on("click", function() {
  trimmed = true;
  $("#scissors").fadeIn().delay(3000).fadeOut();
  $("#trim").fadeOut();

})

// By default: 
//-plant starts healthy
// dry out over time 
// deplete in nutrients over time



// Interactions:
// - Water it, replenish the plant
// -feed it, nutrients for the plant
// -trim it

// Care:
// too much water, plant near death stage
// too much fertilizer, plant near death
// if plant falls into a near death state, you can only heal it by trimming it



var FRIEND_NAME = ["Bennifer", "Brangelina", "TomKat", "Kimye", "Voltron"];
var WEAPON_NAME = [
  "knife",
  "pool stick",
  "rubix cube",
  "old spoon",
  "broken record",
  "illegal rubber band gun",
  "ball of yarn",
  "old shoe",
  "back of my hand",
  "rusty gun",
  "replica lightsaber",
  "swimmy noodle",
  "stack of books",
  "guitar string",
  "modified yo-yo",
  "civil war reenactment props",
  "highlander sword",
  "toy gun",
  "titanium spork",
];
var LOCATION_NAME = [
  "old wood shed",
  "abandoned mine shaft",
  "cockpit",
  "dumpster behind TJ Maxx",
  "Old Navy Dressing Room",
  "port-o-potty",
  "office supply closet",
  "murder dungeon",
  "mancave",
  "trunk of my car",
];

div1 = $("<div><div/>");
$("body").append(div1);

// function kindaRandom(i) {
//   //returning anonymous func inside of another func is closure
//   return function () {
//     alert(
//       `I accuse ${FRIEND_NAME[i % FRIEND_NAME.length]} with the 
//       ${WEAPON_NAME[i % WEAPON_NAME.length]} 
//       in the ${LOCATION_NAME[i % LOCATION_NAME.length]}`
//     );
//   };
// }

for (var i = 0; i < 100; i++) {
  //var accusations = $(`<h3 id=${i}> Accusation ${i + 1} </h3>`)
  var accusations = $("<h3 id=" + i + "> Accusation " + (i + 1) + "</h3>");
  div1.append(accusations);
  //  console.log(i);

// accusations.click(kindaRandom(i))

  accusations.click(function () {
    var newI = $(event.target).attr("id");
    console.log(i);

    //   console.log(accusations.this)

    var whichLocation = newI % 10;
    var whichFriend = newI % 5;
    var whichWeapon = newI % 20;
    alert(
      "I accuse " +
        FRIEND_NAME[whichFriend] +
        " with the " +
        WEAPON_NAME[whichWeapon] +
        " in the " +
        LOCATION_NAME[whichLocation] +
        "!"
    );
  });
}

// for (var arguments = 100; arguments < array.length; arguments++) {

// }
// div1.append(h3'{Accusation $}*100');

// var
// for (var index = 0; index < all.length; index++) {

// }
// console.log()
// $('h3').click (function (){
// })

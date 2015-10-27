var leagueTableArr = [
	{ 
		team: "Southampton",
		points: 0
	},
	{ 
		team: "Arsenal",
		points: 0
	},
	{ 
		team: "Manchester Utd",
		points: 0
	},
	{ 
		team: "Manchester City",
		points: 0
	},
	{ 
		team: "Aston Villa",
		points: 0
	},
	{ 
		team: "West Brom",
		points: 0
	},
	{ 
		team: "Chelsea",
		points: 0
	},
	{ 
		team: "Liverpool",
		points: 0
	},
	{ 
		team: "Fulham",
		points: 0
	},
	{ 
		team: "Everton",
		points: 0
	}
];

var sortDesc = function (a, b) {
  if (a.points < b.points) {
    return 1;
  }
  if (a.points > b.points) {
    return -1;
  }
  // a must be equal to b
  return 0;
}

var sortAsc = function (a, b) {
  if (a.points > b.points) {
    return 1;
  }
  if (a.points < b.points) {
    return -1;
  }
  // a must be equal to b
  return 0;
}

var premTable = document.querySelector(".premTable"),
	table = document.createElement("table"),
	thTeam = document.createElement("th"),
	thPoints = document.createElement("th"),
	button = document.querySelector(".js-btn");
	premTable.appendChild(table);
	table.appendChild(thTeam).innerHTML = "Team";
	table.appendChild(thPoints).innerHTML = "Points";


leagueTableArr.forEach(function(val,key,arr){
arr[key].points += (Math.floor((Math.random() * 3) * 20));
});

leagueTableArr.sort(sortDesc)

console.log(leagueTableArr);

button.addEventListener("click", function(){

table.remove();
var newtable = document.createElement("table"),
	thTeam = document.createElement("th"),
	thPoints = document.createElement("th"),
	numbers = [],
	button = document.querySelector(".js-btn");
	premTable.appendChild(newtable);
	newtable.appendChild(thTeam).innerHTML = "Team";
	newtable.appendChild(thPoints).innerHTML = "Points";

// for(i = 0; i < teams.length; i++){
// 	var tr = document.createElement("tr"),
// 		tdTeam = document.createElement("td"),
// 		tdPoints = document.createElement("td"),
// 		randomNumber = Math.floor(Math.random() * teams.length);
		

// 		numbers.push(randomNumber);
// 		if(numbers[i-1] === randomNumber){
// 			randomNumber = Math.floor(Math.random() * teams.length);
// 		}

// 	newtable.appendChild(tr);
// 	tr.appendChild(tdTeam).innerHTML = teams[i];
// 	tr.appendChild(tdPoints).innerHTML = randomNumber;
// }

});


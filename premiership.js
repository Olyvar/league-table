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

var button = document.querySelector(".js-btn"),
	tableContainer = document.querySelector(".premTable");

// sort descending function
var sortDesc = function (a, b) {
  if (a.points < b.points) {
    return 1;
  }
  if (a.points > b.points) {
    return -1;
  }
  return 0;
}

// sort ascending function
var sortAsc = function (a, b) {
  if (a.points > b.points) {
    return 1;
  }
  if (a.points < b.points) {
    return -1;
  }
  return 0;
}



button.addEventListener("click", function(){

	leagueTableArr.forEach(function(val,key,arr){
		arr[key].points = 0;
		arr[key].points += ( Math.floor((Math.random() * 3) * 20) );
	});

	leagueTableArr.sort(sortDesc);

	var existingTable = document.getElementsByTagName("table")[0];

	if(tableContainer.contains( existingTable ) ){
		existingTable.remove();
	}

	var table = document.createElement("table");
		
	tableContainer.appendChild(table);

	var tableHtml = "";
		
	leagueTableArr.map(function(item, index, array){
		tableHtml += "<tr>";
		tableHtml += "<td>" + item.team + "</td>" + "<td>" + item.points + "</td>";
		tableHtml += "</tr>";
	});

	table.innerHTML = tableHtml;

	var theFirstChild = table.firstChild,
		thTeam = document.createElement("th"),
		thPoints = document.createElement("th");

	table.insertBefore(thTeam, theFirstChild).innerHTML = "Teams";
	table.insertBefore(thPoints, theFirstChild).innerHTML = "Points";

});




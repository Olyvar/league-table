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


var button 			= document.querySelector(".js-btn");
	
// sort descending function
var sortDesc = function (a, b) {
  return b.points - a.points;
}

// sort ascending function
var sortAsc = function (a, b) {
  return a.points - b.points;
}

button.addEventListener("click", function(){

//---------------------  Simulating 20 Games of Football for each team, and assigning points based on random possibilites ---------------------//

// ForEach loop that loops over every object in the array
	leagueTableArr.forEach(function(val,index,arr){
		
		// Reset the points to 0 each time button is clicked
		arr[index].points = 0;
		
		// Recursive function that simulates 20 games of football (passing in 20 as the value for count)
		(function simulateGames(count){

			arr[index].points += Math.floor(Math.random() * 5); // Round down number between 0.01 and 3.99, giving us any value between 0 and 3
			if(count == 0){
				// Break out of the function once the 20 games have been 'played'
				return;
			}
			// Call itself - 1
			simulateGames(count - 1);
		}(20));

	});

	// Call Sort function on the array, sorting the points descending
	leagueTableArr.sort(sortDesc);



	//--------------------- Assembling the HTML table ---------------------//

	// div that will contain the league table
	var tableContainer = document.querySelector(".premTable");

	// Variable to get the first 'table' element on the DOM
	var existingTable = document.getElementsByTagName("table")[0];
	// If it exists, remove it
	if(tableContainer.contains( existingTable ) ){
		existingTable.remove();
	}

	// Create the tab;e and append it to the div container
	var table = document.createElement("table");
	
	tableContainer.appendChild(table);


	var tableHtml = "";
	
	// Map across objects and retrieve the team name and points, creating the table and adding it to the newly created table	
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




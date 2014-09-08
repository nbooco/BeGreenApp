var myProgress = {
	"total": 0,
	"totalAir": 0,
	"distinctAir": 0,
	"totalCommunity": 0,
	"distinctCommunity": 0,
	"totalDocument": 0,
	"distinctDocument": 0,
	"totalDrainage": 0,
	"distinctDrainage": 0,
	"totalFoodAndYard": 0,
	"distinctFoodAndYard": 0,
	"totalPower": 0,
	"distinctPower": 0,
	"totalRecycling": 0,
	"distinctRecycling": 0,
	"totalReuse": 0,
	"distinctReuse": 0,
	"totalSolidWaste": 0,
	"distinctSolidWaste": 0,
	"totalTransportation": 0,
	"distinctTransportation": 0,
	"totalWater": 0,
	"distinctWater": 0,
	"totalWebTool": 0,
	"distinctWebTool": 0,
	"badges": {},
	"trophies": {},
	"ribbons": {},
	"stickers": {}
};

$(document).ready(function() {
	console.log(localStorage["userProgress"]);
	//console.dir(JSON.stringify(localStorage));
	if (!localStorage.hasOwnProperty("userProgress")) {
		localStorage.setItem("userProgress", JSON.stringify(myProgress));
	};
	//console.dir(localStorage);
})





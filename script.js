function showComparison() {
	
	//Get arrays of values
	let list1 = $("#List1").val().split(",").map(element => element.trim());
	let list2 = $("#List2").val().split(",").map(element => element.trim());
	
	//Remove any duplicate values from each list
	for (let i = list1.length - 1; i > -1; i--) {
		if (list1.indexOf(list1[i]) != list1.lastIndexOf(list1[i]) || list1[i].length === 0) {
			list1.splice(i, 1);
		}
	}
	for (let i = list2.length - 1; i > -1; i--) {
		if (list2.indexOf(list2[i]) != list2.lastIndexOf(list2[i]) || list2[i].length === 0) {
			list2.splice(i, 1);
		}
	}
	
	let unique1 = list1.filter(element => !list2.includes(element)).join(", ") || "List 1 does not have any unique values.";
	let unique2 = list2.filter(element => !list1.includes(element)).join(", ") || "List 2 does not have any unique values.";
	let common = list1.filter(element => list2.includes(element)).join(", ") || "Lists do not have values in common.";
	
	$("#unique1").text(unique1);
	$("#unique2").text(unique2);
	$("#common").text(common);
	
	$("#results").show();
}
$(document).ready(function() {
	$("#get-results").on('click', showComparison);
});
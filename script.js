//your JS code here. If required.
const colorSelect = document.getElementById("colorSelect");

const removeButton = document.querySelector('input[type="button"]');

removeButton.addEventListener("click", function() {
	if (colorSelect.selectedIndex !== -1 && colorSelect.options.length > 0) {
		colorSelect.remove(colorSelect.selectedIndex);
	}
})
/*
    You are to use arrow functions for this task.

    Every second, change the background color of <span> according to the elements in `colours` array. The display of color should repeat from the top.

    Hint:
    - Look for interval setting functions.
    - You should use DOM Manipulation to update the style of <div> element.

    Code Challenge:
    - Provide a checkbox "stop". When it is checked, the colour change will not repeat and end at the last element.
*/


const colours = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
];

const spanEl = document.createElement('span')
const colorValue = colours.map(color => color.value)

let colorIndex = 0
let intervalID = null

function changeColors() {
    spanEl.style.backgroundColor = colorValue[colorIndex]
    spanEl.innerText = `Color Change Interval`
    const colorEl = document.getElementById('target')
    colorEl.appendChild(spanEl)

    colorIndex = (colorIndex + 1) % colorValue.length
    console.log(colorIndex)
}

intervalID = setInterval(changeColors, 1000)



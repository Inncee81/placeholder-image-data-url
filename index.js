// module.exports exports the function getContests as a promise and exposes it as a module.
// we can import an exported module by using require().
module.exports = async function getDataURL(width, height, text, color) {
    
    const {createCanvas} = require('canvas') // import the createCanvas function from the canvas module

    var canvas = createCanvas(parseInt(width), parseInt(height)); // Generate a canvas with the given width and height.

    canvas.width = width; // Set the canvas width to the given width.
    canvas.height = height; // Set the canvas height to the given height.
    var ctx = canvas.getContext("2d"); // Get the 2d context of the canvas.
    ctx.fillStyle = color; // Set the fill style to the given color.
    ctx.fillRect(0, 0, width, height); // Fill the entire canvas with the given color.
    ctx.fillStyle = "black"; // Set the fill style to black.
    ctx.font = "bold 20px Arial"; // Set the font style to bold and size to 20px.
    ctx.textAlign = "center"; // Set the text alignment to center.
    ctx.fillText(text, width / 2, height / 2); // Fill the canvas with the given text.

    var img = canvas.toDataURL("image/png"); // Convert the canvas to a data URL.

    return img; // Return the data URL.

};
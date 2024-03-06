$(document).ready(function () {
    $("h2").addClass("underline"); // underlines all <h2> elements
    $("ul").addClass("border");
});

/**
 * Any code with the curly brackets above won't load until the DOM
 *  is fully loaded and the htnl is rendered. */

/** using .css to create inline styles is not good practice. 
 * Instead create a class that can be added to any element you want to */
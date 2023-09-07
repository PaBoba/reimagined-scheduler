// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let saveBtn9 = $('#hour-9').children('.btn');
let saveBtn10 = $('#hour-10').children('.btn');
let saveBtn11 = $('#hour-11').children('.btn');
let saveData9 = $('#hour-9').children('.description');
let saveData10 = $('#hour-10').children('.description');
let saveData11 = $('#hour-11').children('.description');

saveBtn9.on('click', function () {
  // alert('Save');
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  console.log(saveData9.val());
  
  if (saveData9.val() == "") {
    alert('Textbox cannot be empty');
  }

  else (saveData9.val() !== ""); {
    localStorage.setItem("todo@9", saveData9.val());
  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
saveBtn10.on('click', function () {

  console.log(saveData10.val());

  if (saveData10.val() == "") {
    alert('Textbox cannot be empty');
  }

  else (saveData10.val() !== ""); {
    localStorage.setItem("todo@10", saveData10.val());
  }
});
saveBtn11.on('click', function () {
  console.log(saveData11.val());

  if (saveData11.val() == "") {
    alert('Textbox cannot be empty');
  }

  else (saveData11.val() !== ""); {
    localStorage.setItem("todo@11", saveData11.val());
  }
});

// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
const $department = $("#department");
const $notesText = $("#note-input");
const $notesBtn = $("#note-btn");
const $completedBtn = $("#completed-btn");
let $singleTicketId = "";

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    console.log("example", example);

    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/submit/api/tickets",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "/api/tickets",
      type: "GET"
    });
  },
  updateExample: function(notes) {
    return $.ajax({
      url: "/ticket/api/tickets",
      type: "PUT",
      data: notes
    })
  },
  updateCompleted: function(completed) {
      console.log('updateCompleted', completed);
    return $.ajax({
      url: "/ticket/api/updated",
      type: "PUT",
      data: completed
    })
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/tickets/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/ticket/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

        var $button2 = $("<button>").attr("id=", example.id)
        .addClass("btn btn-success float-right success")
        .text(" done ");

      $li.append($button, $button2);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    department: $department.val().trim(),
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter a title and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $department.val("");
  $exampleText.val("");
  $exampleDescription.val("");
};

// handleCompletedBtnClick is called when the "completed" button is clicked
// Change the Ticket's data value of completed to false to true
// -------------------------- NOT COMPLETE -----------------------------------
const handleCompletedBtn = (event) => {
        console.log("event.target", event.target.id)
        let idToUpdate = event.target.id;
        console.log("idToUpdate", idToUpdate);
    
        let completed = {
            id: idToUpdate,
            completed: true
        }
      console.log("completed", completed);

        API.updateCompleted(completed).then(() => {
            console.log("then");
          refreshExamples();
        });
    }

// handleNoteSubmit is called when the notes button is clicked.
// Change the ticket's notes value to the input of $notesText
// ----------------------------------- NOT COMPLETE --------------------------------
const handleNoteSubmit = function(event) {
  event.preventDefault();

  $singleTicketId = $notesText.attr("data-id");

  var notes = {
    id: $singleTicketId,
    notes: $notesText.val().trim()
  };

  API.updateExample(notes).then(function() {
    console.log(notes);
    
    $notesText.val("");
  })
};
// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
$exampleList.on("click", ".success", handleCompletedBtn);
$notesBtn.on("click", handleNoteSubmit);
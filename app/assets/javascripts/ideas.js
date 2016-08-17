$(document).ready(function(){
  $.ajax({
    url: '/api/v1/ideas',
    method: "GET",
    dataType: "JSON",
    success: function(ideas){
      $(ideas).each(function(index, idea){
        $(".ideas-list").append(
          "<div class='idea-full' id=" + idea.id
          + "><div class='idea-body'>"
          + "<div id='title' contenteditable='true'>" + idea.title + "</div>"
          + "<div id='body' contenteditable='true'>" + idea.body + "</div>"
          + "<div class='idea-features'>"
          + idea.quality
          + "<button data-id=" + idea.id + " class='btn btn-success delete-idea' type='button'>Delete</button>"
          + "</div></div>"
          // ideaFormatting(idea)
        )
      })
    },
    error: function(errorResponse){
      console.log(errorResponse)
    }
  })

  // function ideaFormatting(idea){
  //   "<div class='idea-full' id=" + idea.id
  //   + "><div class='idea-body'>"
  //   + "<div id='title'>" + idea.title + "</div>"
  //   + "<div id='body'>" + idea.body + "</div>"
  //   + "<div class='idea-features'>"
  //   + idea.quality
  //   + "<button data-id=" + idea.id + " class='btn btn-success delete-idea' type='button'>Delete</button>"
  //   + "</div></div>"
  // };

  $("#save-idea").on('click', function(){
    var ideaTitle = $(".create-title").val();
    var ideaBody  = $(".create-body").val();
    var ideaData  = {idea: {title: ideaTitle, body: ideaBody}};
    $.ajax({
      url: "/api/v1/ideas",
      method: "POST",
      dataType: "JSON",
      data: ideaData,
      success: function(idea){
        $(".ideas-list").prepend(
          "<div class='idea-full' id=" + idea.id
          + "><div class='idea-body'>"
          + "<div id='title' contenteditable='true'>" + idea.title + "</div>"
          + "<div id='body' contenteditable='true'>" + idea.body + "</div>"
          + "<div class='idea-features'>"
          + idea.quality
          + "<button data-id=" + idea.id + " class='btn btn-success delete-idea' type='button'>Delete</button>"
          + "</div></div>"
        )
      },
      error: function(errorResponse){
        console.log(errorResponse)
      }
    })
  })

  $(".ideas-list").on('click', ".delete-idea", function(){
    var ideaId = $(this).data("id")
    $.ajax({
      url: "/api/v1/ideas/" + ideaId,
      method: "DELETE",
      data: ideaId,
      success: function(idea){
        $(".idea-full#" + ideaId ).remove()
      },
      error: function(errorResponse){
        console.log(errorResponse)
      }
    })
  })

  $(".ideas-list").on("click", "#title", function(){
    $(this).toggleClass("contenteditable")
  })

  $(".ideas-list").on("click", "#body", function(){
    $(this).toggleClass("contenteditable")
  })
  // $(".ideas-list").on("click", ".idea-body", function(){
  //   console.log(this)
  //   $(this).toggleClass("contenteditable")
  // })

  $(".ideas-list").on("blur")


});

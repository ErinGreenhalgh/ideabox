$(document).ready(function(){
  $.ajax({
    url: '/api/v1/ideas',
    method: "GET",
    dataType: "JSON",
    success: function(ideas){
      $(ideas).each(function(index, idea){
        $(".ideas-list").append(ideaStructure(idea))
      })
    },
    error: function(errorResponse){
      console.log(errorResponse)
    }
  })

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
        $(".ideas-list").prepend(ideaStructure(idea))
        $(".create-title").val("")
        $(".create-body").val("")
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
        $("#full-" + ideaId ).remove()
      },
      error: function(errorResponse){
        console.log(errorResponse)
      }
    })
  })



  $(".ideas-list").on("click", ".title", function(){
    $(this).toggleClass("contenteditable")
  })

  $(".ideas-list").on("click", "#body", function(){
    $(this).toggleClass("contenteditable")
  })

  $(".ideas-list").on("blur", ".title", function(){
    var ideaId = $(this).parent().parent().data("id");
    var editedTitle = $(this).text();
    $.ajax({
      url: "/api/v1/ideas/" + ideaId,
      method: "PATCH",
      dataType: "JSON",
      data: { idea: { title: editedTitle } },
      success: function(idea){
        $("#title-" + idea.id).text(
          editedTitle
        )
      },
      error: errorMessage,
    });
  })

  $(".ideas-list").on("blur", ".body", function(){
    var ideaId = $(this).parent().parent().data("id");
    var editedBody = $(this).text();
    $.ajax({
      url: "/api/v1/ideas/" + ideaId,
      method: "PATCH",
      dataType: "JSON",
      data: { idea: { body: editedBody } },
      success: function(idea){
        $("#body-" + idea.id).text(
          editedBody
        )
      },
      error: errorMessage,
    });
  })


});

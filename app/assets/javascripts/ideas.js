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
          + idea.title + "<br>" + idea.body + "</div>"
          + "<div class='idea-features'>"
          + idea.quality
          + "<button data-id=" + idea.id + " class='btn btn-success delete-idea' type='button'>Delete</button>"
          + "</div></div>"
        )
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
        $(".ideas-list").prepend(
          "<div class='idea-full' data-id=" + idea.id
          + "><div class='idea-body'>"
          + idea.title + "<br>" + idea.body + "</div>"
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


});

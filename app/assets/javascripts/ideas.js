$(document).ready(function(){
  $.ajax({
    url: '/api/v1/ideas',
    method: "GET",
    dataType: "JSON",
    success: function(ideas){
      $(ideas).each(function(index, idea){
        $(".ideas-list").append(
          "<div class='idea-full'><div class='idea-body'>"
          + idea.title + "<br>" + idea.body + "</div>"
          + "<div class='idea-features'>"+ idea.quality +"</div></div>"
        )
      })
    },
    error: function(errorResponse){
      console.log(errorResponse)
    }
  })
});

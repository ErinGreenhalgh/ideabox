$(document).ready(function(){
  $(".search").on("keyup", function(){
    var ideas = $(".idea-body")
    var searchText = $(this).val().toLowerCase();
    ideas.each(function(idea){
      var ideaText = $(this).find(".title,.body").text().toLowerCase()
      var idea = $(this).parent()
      if (ideaText.includes(searchText)){
        idea.show("slide");
      } else {
        idea.hide("slide");
      }
    })
  })
});

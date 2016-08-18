$(document).ready(function(){

  function improveQuality(currentQuality){
    if (currentQuality == "swill") {
      currentQuality = "plausible"
    } else {
      currentQuality = "genius"
    }
    return currentQuality
  }

  function downgradeQuality(currentQuality){
    if (currentQuality == "genius") {
      currentQuality = "plausible"
    } else {
      currentQuality = "swill"
    }
    return currentQuality
  }

  $(".ideas-list").on("click", ".upvote", function(){
    var currentQuality = $(this).siblings(".quality").text();
    var ideaId = $(this).parent().data("id")
    var updatedQuality = improveQuality(currentQuality)
    $.ajax({
      url: "/api/v1/ideas/" + ideaId,
      method: "PATCH",
      dataType: "JSON",
      data: { idea: { quality: updatedQuality}},
      success: function(idea){
        $("#quality-" + idea.id).text(updatedQuality)
      },
      error: errorMessage,
    })
  })

  $(".ideas-list").on("click", ".downvote", function(){
    var currentQuality = $(this).siblings(".quality").text();
    var ideaId = $(this).parent().data("id")
    var updatedQuality = downgradeQuality(currentQuality)
    $.ajax({
      url: "/api/v1/ideas/" + ideaId,
      method: "PATCH",
      dataType: "JSON",
      data: { idea: { quality: updatedQuality}},
      success: function(idea){
        $("#quality-" + idea.id).text(updatedQuality)
      },
      error: errorMessage,
    })
  })
});

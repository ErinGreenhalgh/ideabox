function ideaStructure(idea){
  return "<div class='idea-full' data-id=" + idea.id
            + "><div class='idea-body'>"
              + "<div class='title' id='title-'" + idea.id
              + " contenteditable='true'>" + idea.title + "</div>"
              + "<div class='body' id='body-'" + idea.id
              + " contenteditable='true'>" + idea.body + "</div>"
            + "<div class='idea-features'>"
              + idea.quality
              + "<button class='upvote btn btn-default'>Upvote</button>"
              + "<button class='downvote btn btn-default'>Downvote</button>"
              + "<button data-id=" + idea.id
              + " class='btn btn-warning delete-idea' type='button'>Delete</button>"
            + "</div>"
          + "</div>"
}

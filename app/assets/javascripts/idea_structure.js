function ideaStructure(idea){
  return "<div class='idea-full' id='full-" + idea.id
            + "'><div class='idea-body'>"
              + "<div class='title' id='title-" + idea.id
              + "' contenteditable='true'>" + idea.title + "</div>"
              + "<div class='body' id='body-" + idea.id
              + "' contenteditable='true'>" + idea.body + "</div></div>"
            + "<div class='idea-features' data-id=" + idea.id + ">"
              + "<div class='quality' id='quality-" + idea.id + "'>"
              + idea.quality + "</div>"
              + "<button class='upvote   btn btn-default' id='upvote-" + idea.id + "'>Upvote</button>"
              + "<button class='downvote btn btn-default' id='downvote-" + idea.id + "'>Downvote</button>"
              + "<button data-id=" + idea.id
              + " class='btn btn-warning delete-idea' type='button'>Delete</button>"
            + "</div>"
          + "</div>"
}

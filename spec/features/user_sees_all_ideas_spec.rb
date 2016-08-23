require "rails_helper"

RSpec.feature "user sees all ideas" do
  scenario "when they visit the home page", js: true do
    idea1 = create(:idea)
    idea2 = create(:idea, quality: "genius")

    visit "/"

    within("#full-#{idea1.id}") do
      expect(page).to have_content idea1.title
      expect(page).to have_content idea1.body
      expect(page).to have_content idea1.quality
      expect(page).to have_content "Upvote"
      expect(page).to have_content "Downvote"

      expect(page).not_to have_content(idea2.title)
      expect(page).not_to have_content(idea2.body)
      expect(page).not_to have_content(idea2.quality)
    end

    within("#full-#{idea2.id}") do
      expect(page).to have_content idea2.title
      expect(page).to have_content idea2.body
      expect(page).to have_content idea2.quality
      expect(page).to have_content "Upvote"
      expect(page).to have_content "Downvote"

      expect(page).not_to have_content(idea1.title)
      expect(page).not_to have_content(idea1.body)
      expect(page).not_to have_content(idea1.quality)
    end
  end
end

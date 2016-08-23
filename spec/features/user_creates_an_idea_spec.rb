require "rails_helper"

RSpec.feature "user creates an idea" do
  scenario "by entering new idea information", js: true do
    title = "New title"
    body = "New body"
    visit "/"
    find("textarea[class='create-title']").send_keys("#{title}")
    find("textarea[class='create-body']").send_keys("#{body}")
    click_button "Save"

    within("#full-1") do
      expect(page).to have_content(title)
      expect(page).to have_content(body)
      expect(page).to have_content("swill")
      expect(page).to have_content("Upvote")
      expect(page).to have_content("Downvote")
    end
  end
end

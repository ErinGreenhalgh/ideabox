require "rails_helper"

RSpec.feature "user can edit idea text" do
  let (:idea) { idea = Idea.create(title: "My Title", body: "body")}
  let (:update) { "UPDATED"}
  scenario "by clicking on the title text", js: true do
    idea
    visit "/"
    element = find("div[id='title-1']").send_keys("#{update}")
    page.find("body").click
    expect(page).to have_content(idea.title + update)

    page.driver.browser.navigate.refresh

    expect(page).to have_content(idea.title + update)
  end

  scenario "by clicking on the body text", js: true do
    idea
    visit "/"
    element = find("div[id='body-1']").send_keys("#{update}")
    page.find("body").click
    expect(page).to have_content(idea.body + update)
    page.driver.browser.navigate.refresh
    expect(page).to have_content(idea.body + update)
  end
end

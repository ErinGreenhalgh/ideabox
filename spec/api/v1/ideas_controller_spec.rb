require "rails_helper"

RSpec.describe "api::v1::ideas controller" do
  it "gives a list of ideas" do
    ideas = create_list(:idea, 2)

    get '/api/v1/ideas'

    expect(response).to be_success
    expect(response.status).to eq 200

    data = JSON.parse(response.body)

    expect(data.count).to eq 2
    expect(data.first.keys).to eq ["title", "body", "quality", "id"]
    expect(data[0]["title"]).to eq "Title Name 2"
    expect(data[1]["title"]).to eq "Title Name 1"
    expect(data[1]["quality"]).to eq "swill"
  end

  it "can create an idea" do
    idea_data = {title: "My New Idea", body: "best idea yet"}
    post "/api/v1/ideas", params: {idea: idea_data}
    expect(response).to be_success
    expect(Idea.count).to eq 1
    idea = Idea.last
    expect(idea.title).to   eq idea_data[:title]
    expect(idea.body).to    eq idea_data[:body]
    expect(idea.quality).to eq "swill"
  end

  it "can delete an idea" do
    idea = create(:idea)
    expect(Idea.count).to eq 1
    delete "/api/v1/ideas/#{idea.id}"
    expect(response).to be_success
    expect(Idea.count).to eq 0
  end

  it "updates an idea" do
    old_idea = create(:idea)
    idea_data = {title: "New Title", body: "new body"}
    patch "/api/v1/ideas/#{old_idea.id}", params: { idea: idea_data }
    updated_idea = Idea.find(old_idea.id)
    expect(response).to be_success
    expect(updated_idea.title).to eq idea_data[:title]
    expect(updated_idea.body).to eq idea_data[:body]
    data = JSON.parse(response.body)
    expect(data["title"]).to eq updated_idea.title
    expect(data["body"]).to eq updated_idea.body
  end
end

require "rails_helper"

RSpec.describe "api::v1::ideas controller" do
  it "gives a list of ideas" do
    ideas = create_list(:idea, 2)

    get '/api/v1/ideas'

    expect(response).to be_success
    expect(response.status).to eq 200

    data = JSON.parse(response.body)

    expect(data.count).to eq 2
    expect(data.first.keys).to eq ["title", "body", "quality"]
    expect(data[0]["title"]).to eq "Title Name 1"
    expect(data[0]["quality"]).to eq "swill"
    expect(data[1]["title"]).to eq "Title Name 2"
  end
end

require 'rails_helper'

RSpec.describe Idea, type: :model do
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:body) }
  it { should validate_presence_of(:quality) }

  it "has a default value of swill" do
    idea = Idea.create(title: "NEW", body: "new")
    expect(idea.quality).to eq "swill"
  end

  it "returns ideas in order of last created_at" do
    idea1 = create(:idea)
    idea2 = create(:idea)

    expect(Idea.all_descending).to eq [idea2, idea1]
  end
end

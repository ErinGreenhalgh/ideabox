require 'rails_helper'

RSpec.describe Idea, type: :model do
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:body) }
  it { should validate_presence_of(:quality) }
  it { should respond_to(:quality?)}

  it "properly maps enums to quality types" do
    idea1 = create(:idea, quality: 0)
    idea2 = create(:idea, quality: 1)
    idea3 = create(:idea, quality: 2)

    expect(idea1.quality).to eq("swill")
    expect(idea2.quality).to eq("plausible")
    expect(idea3.quality).to eq("genius")
  end

  it "returns ideas in order of last created_at" do
    idea1 = create(:idea)
    idea2 = create(:idea)

    expect(Idea.all_descending).to eq [idea2, idea1]
  end
end

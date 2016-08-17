FactoryGirl.define do
  factory :idea do
    title
    body
    quality "swill"
  end

  sequence :title do |n|
    "Title Name #{n}"
  end

  sequence :body do |n|
    "idea body #{n}"
  end
end

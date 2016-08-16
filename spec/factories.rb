FactoryGirl.define do
  factory :idea do
    title
    body
    quality 0
  end

  sequence :title do |n|
    "Title Name #{n}"
  end

  sequence :body do |n|
    "idea body #{n}"
  end
end

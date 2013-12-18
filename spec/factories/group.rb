FactoryGirl.define do
  factory :group do
    title { Faker::HipsterIpsum.word }
    creator
  end
end

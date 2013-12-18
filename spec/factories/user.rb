FactoryGirl.define do
  factory :user, aliases: [:creator, :author] do
    username { Faker::Internet.user_name }
    email { Faker::Internet.email }
    password 'shmee'
    password_confirmation 'shmee'
  end
end

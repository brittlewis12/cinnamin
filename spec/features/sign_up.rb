require 'spec_helper'

describe "A user can sign in", js: true do
  it "logs in and sees a chat screen" do
    visit "/"

    fill_in :email, with: "brittlewis12@gmail.com"
    fill_in :username, with: "brittlewis12"
    fill_in :password, with: "shmee"
    fill_in :'password-confirmation', with: "shmee"

    click_button "Submit"

    expect(page).to have_content("chatroom")
  end
end

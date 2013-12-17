require 'spec_helper'

describe Group do
  describe 'validations' do
    it { should validate_presence_of :creator_id }
  end

  describe 'associations' do
    it { should have_many :messages}
    it { should belong_to(:creator).class_name('User') }
    it { should have_and_belong_to_many(:members).class_name('User') }
  end
end

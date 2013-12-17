require 'spec_helper'

describe User do
  describe 'validations' do
    it { should validate_presence_of :email }
    it { should validate_presence_of :username }
    it { should have_secure_password }
  end

  describe 'associations' do
    it { should have_many :messages }
  end
end

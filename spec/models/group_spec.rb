require 'spec_helper'

describe Group do
  describe 'validations' do
    it { should validate_presence_of :creator_id }
  end
end

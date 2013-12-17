class Group < ActiveRecord::Base
  validates :creator_id, presence: true
end

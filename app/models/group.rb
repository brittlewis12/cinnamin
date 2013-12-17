class Group < ActiveRecord::Base
  validates :creator_id, presence: true

  has_many :messages
  belongs_to :creator, class_name: 'User'
  has_and_belongs_to_many :members, class_name: 'User', join_table: :groups_members
end

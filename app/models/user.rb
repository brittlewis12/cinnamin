class User < ActiveRecord::Base
  validates :email,
            :username, presence: true

  has_many :messages,  as: :author
  has_many :created_groups, class_name: :group, foreign_key: :creator_id
  has_and_belongs_to_many :groups, join_table: :groups_members

  has_secure_password
end

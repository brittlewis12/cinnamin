class Message < ActiveRecord::Base
  validates :content,
            :author_id,
            :group_id, presence: true

  belongs_to :author, class_name: 'User'
  belongs_to :group
end

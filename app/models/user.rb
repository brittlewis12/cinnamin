class User < ActiveRecord::Base
  validates :email, :username, presence: true

  has_secure_password

  has_many :messages, as: :author
end

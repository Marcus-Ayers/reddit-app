class User < ApplicationRecord
  has_many :posts, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :votes, dependent: :destroy
  has_many :subscriptions, dependent: :destroy
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  # devise :database_authenticatable, :registerable,
  #        :recoverable, :rememberable, :validatable
  validates :username, presence: true, uniqueness: true

  def upvote(post)
    self.votes.create(post: post, value: 1)
  end
  
  def downvote(post)
    self.votes.create(post: post, value: -1)
  end

  def subscribed_to?(subreddit)
    self.subscriptions.find_by(subreddit: subreddit).present?
  end
end
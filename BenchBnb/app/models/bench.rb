class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true

  has_many :reviews
  has_many :favorites
  has_many :favorite_users,
    through: :favorites,
    source: :user

  def average_rating
    reviews.average(:rating)
  end
end

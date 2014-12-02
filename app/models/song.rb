class Song < ActiveRecord::Base
  validates :title, presence: true
  
  has_many :segments
  
  has_many :taggings, through: :segments
  
  has_many :tags, through: :taggings
  
end

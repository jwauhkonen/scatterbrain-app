class Tag < ActiveRecord::Base
  validates :name, presence: true
  
  has_many :taggings
  
  has_many :segments, through: :taggings
  
  has_many :songs, through: :segments
end

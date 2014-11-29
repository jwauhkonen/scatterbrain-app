class Song < ActiveRecord::Base
  validates :title, presence: true
  
  has_many :segments
  
end

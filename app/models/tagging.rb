class Tagging < ActiveRecord::Base
  validates :segment_id, :tag_id, :user_id, presence: true
  
  belongs_to :segment
  
  belongs_to :tag
  
  belongs_to :user
  
end
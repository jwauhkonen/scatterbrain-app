class Segment < ActiveRecord::Base
  validates :song_id, :quote, :start_idx, :end_idx, presence: true
  
  belongs_to :song
end
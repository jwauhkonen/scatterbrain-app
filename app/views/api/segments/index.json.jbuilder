json.segments @segments do |segment|
  json.extract! segment, :song_id, :quote, :start_idx, :end_idx, :created_at, :updated_at
  
  json.song_title segment.song.title
end
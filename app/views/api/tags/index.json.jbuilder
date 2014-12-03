json.array! (@tags) do |tag|
  json.(tag, :id, :name, :created_at, :updated_at)
  
  json.segments tag.segments, :id, :song_id, :quote, :start_idx, :created_at, :updated_at
  
  json.songs tag.songs, :id, :artist_id, :title, :lyrics, :created_at, :updated_at
end
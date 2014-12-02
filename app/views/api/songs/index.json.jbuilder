json.array! (@songs) do |song|
  json.(song, :id, :artist_id, :title, :lyrics, :created_at, :updated_at)
  
  json.segments song.segments, :id, :song_id, :quote, :start_idx, :created_at, :updated_at
  
  json.taggings song.taggings, :id, :segment_id, :tag_id, :user_id, :created_at, :updated_at
  
  json.tags song.tags, :id, :name, :created_at, :updated_at
end
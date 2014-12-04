json.array! (@tags) do |tag|
  json.(tag, :id, :name, :emoji_name, :created_at, :updated_at)
  
  json.taggings tag.taggings, :id, :segment_id, :tag_id, :user_id, :created_at, :updated_at
 
  json.segments tag.segments do |segment|
  	json.(segment, :id, :song_id, :quote, :start_idx, :end_idx, :created_at, :updated_at)
	
	json.taggings segment.taggings, :id, :segment_id, :tag_id, :user_id, :created_at, :updated_at
  end
  
  json.songs tag.songs, :id, :artist_id, :title, :lyrics, :created_at, :updated_at
end
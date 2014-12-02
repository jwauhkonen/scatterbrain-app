json.array! (@segments) do |segment|
  json.(segment, :id, :song_id, :quote, :start_idx, :end_idx, :created_at, :updated_at)
  
  json.song_title segment.song.title
  
  json.tags segment.tags do |tag|
  	json.(tag, :id, :name, :created_at, :updated_at)
  end
  
  json.taggings segment.taggings do |tagging|
    json.(tagging, :id, :segment_id, :tag_id, :user_id, :created_at, :updated_at)
  end
end
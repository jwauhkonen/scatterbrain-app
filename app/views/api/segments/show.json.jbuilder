json.(@segment, :id, :song_id, :quote, :start_idx, :end_idx, :created_at, :updated_at)

json.taggings @segment.taggings, :id, :segment_id, :tag_id, :user_id, :created_at, :updated_at
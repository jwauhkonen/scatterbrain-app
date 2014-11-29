json.(@tag, :name, :created_at, :updated_at)

json.segments @tag.segments, :song_id, :quote, :start_idx, :end_idx, :created_at, :updated_at
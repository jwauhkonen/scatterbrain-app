json.(@song, :artist_id, :title, :lyrics, :created_at, :updated_at)

json.segments @song.segments, :song_id, :quote, :start_idx, :end_idx, :created_at, :updated_at
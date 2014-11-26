class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.text :lyrics
      t.integer :artist_id, null: false

      t.timestamps
    end
    add_index :songs, :title
  end
end

class CreateSegments < ActiveRecord::Migration
  def change
    create_table :segments do |t|
      t.integer :song_id, null: false
      t.text :quote, null: false
      t.integer :start_idx, null: false
      t.integer :end_idx, null: false

      t.timestamps
    end
  end
end

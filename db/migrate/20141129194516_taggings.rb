class Taggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :segment_id, null: false
      t.integer :tag_id, null: false
      t.integer :user_id, null: false
      
      t.timestamps
    end
    add_index :taggings, :segment_id
    add_index :taggings, :tag_id
    add_index :taggings, :user_id
  end
end
class AddTagEmojiName < ActiveRecord::Migration
  def change
    add_column :tags, :emoji_name, :string
  end
end

class CreateSongs < ActiveRecord::Migration[7.1]
  def change
    create_table :songs do |t|
      t.string :song
      t.string :views
      t.string :time
      t.integer :artist_id
      t.integer :album_id
      t.boolean :popular

      t.timestamps
    end
  end
end

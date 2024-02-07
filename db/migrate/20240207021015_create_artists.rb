class CreateArtists < ActiveRecord::Migration[7.1]
  def change
    create_table :artists do |t|
      t.string :artist
      t.string :image
      t.string :bio
      t.boolean :top_artist

      t.timestamps
    end
  end
end

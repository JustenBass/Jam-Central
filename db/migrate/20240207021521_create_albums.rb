class CreateAlbums < ActiveRecord::Migration[7.1]
  def change
    create_table :albums do |t|
      t.string :album
      t.string :year
      t.integer :artist_id
      t.boolean :trending
      t.integer :total
      t.integer :qauntity

      t.timestamps
    end
  end
end

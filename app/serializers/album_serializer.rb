class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :album, :artist_of_album
  has_many :songs

  def artist_of_album
    object.artist.artist
  end
end

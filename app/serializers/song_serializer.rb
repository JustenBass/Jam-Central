class SongSerializer < ActiveModel::Serializer
  attributes :id, :song, :song_artist, :song_album

  def song_artist
    object.artist.artist
  end

  def song_album
    object.album.album
  end
end

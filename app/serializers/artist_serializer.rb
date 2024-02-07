class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :artist
  has_many :albums
  has_many :songs 
end

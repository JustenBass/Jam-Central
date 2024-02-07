class Artist < ApplicationRecord
    has_many :albums
    hasy_many :songs 
end

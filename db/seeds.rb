puts "Seeding Data 💦..."

puts "Seeding Artist"
artist1 = Artist.create!(artist: 'Taylor Swift', image: '', bio: 'bio here', top_artist: true)

puts "Seeding Albums..."
album1 = Album.create!(album: 'Midnights', year: '2023', artist_id: artist1.id, trending: true, total: 20.00, qauntity: 2)
album2 = Album.create!(album: 'RED', year: '2015', artist_id: artist1.id, trending: true, total: 10.00, qauntity: 0)

puts "Seeding Songs..."
song1 = Song.create!(song: 'Karma', views: '661,790,640', time: '3:24', artist_id: artist1.id, album_id: album1.id, popular: true)

puts "Done Seeing...🌷"
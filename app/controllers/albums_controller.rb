class AlbumsController < ApplicationController

    def index
        render json: Album.all, status: :ok
    end
end

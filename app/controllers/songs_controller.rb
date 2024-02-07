class SongsController < ApplicationController

    def index
        render json: Song.all, status: :ok
    end

end

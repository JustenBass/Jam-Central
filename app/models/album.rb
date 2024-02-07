class Album < ApplicationRecord
    has_many :songs
    belongs_to :artist

    def quantity_subtotal
        subtotal = 0
        if self.qauntity === 0
            subtotal += self.total * 0
            subtotal
        else
            subtotal += self.total * self.qauntity
            subtotal
        end
    end
end

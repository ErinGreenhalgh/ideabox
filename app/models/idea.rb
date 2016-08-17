class Idea < ApplicationRecord
  validates              :title, presence: true
  validates              :body, presence: true
  validates              :quality, presence: true

  def self.all_descending
    all.order("created_at DESC")
  end

end

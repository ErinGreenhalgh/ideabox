class Api::V1::IdeasController < ApplicationController
  def index
    render json: Idea.all
  end

  def create
    Idea.create(idea_params)
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body)
  end
end

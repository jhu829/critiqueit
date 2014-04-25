json.array!(@comments) do |comment|
  json.extract! comment, :id, :name, :comment_text, :user_id, :video_id
  json.url comment_url(comment, format: :json)
end

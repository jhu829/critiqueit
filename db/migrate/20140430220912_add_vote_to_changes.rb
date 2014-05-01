class AddVoteToChanges < ActiveRecord::Migration
  def change
    add_column :changes, :vote, :string
  end
end

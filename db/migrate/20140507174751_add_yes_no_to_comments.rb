class AddYesNoToComments < ActiveRecord::Migration
  def change
    add_column :comments, :yestono, :boolean
    add_column :comments, :notoyes, :boolean
  end
end

class AddYesNoToChanges < ActiveRecord::Migration
  def change
    add_column :changes, :yestono, :boolean
    add_column :changes, :notoyes, :boolean
  end
end

class AddTimeStampToComments < ActiveRecord::Migration
  def change
    add_column :comments, :time_stamp, :integer
  end
end

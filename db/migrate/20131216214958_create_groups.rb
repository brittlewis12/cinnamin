class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string      :title
      t.references  :creator,  null: false,  index: true

      t.timestamps
    end

    reversible do |dir|
      dir.up do
        execute <<-SQL
          ALTER TABLE groups
            ADD CONSTRAINT fk_groups_users
            FOREIGN KEY (creator_id)
            REFERENCES users(id)
        SQL
      end
    end
  end
end

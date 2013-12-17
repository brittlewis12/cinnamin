class CreateGroupsMembers < ActiveRecord::Migration
  def change
    create_table :groups_members do |t|
      t.references :member,   null: false
      t.references :group,    null: false
    end

    reversible do |dir|
      dir.up do
        execute <<-SQL
          ALTER TABLE groups_members
            ADD CONSTRAINT fk_group_members
            FOREIGN KEY (member_id)
            REFERENCES users(id),

            ADD CONSTRAINT fk_groups
            FOREIGN KEY (group_id)
            REFERENCES groups(id)
        SQL
      end
    end
  end
end

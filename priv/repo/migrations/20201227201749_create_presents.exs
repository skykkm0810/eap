defmodule Cpf.Repo.Migrations.CreatePresents do
  use Ecto.Migration

  def change do
    create table(:presents) do
      add :seniorId, :integer
      add :temp, :float
      add :tempOdd, :boolean, default: false, null: false
      add :with, :boolean, default: false, null: false

      timestamps()
    end

  end
end

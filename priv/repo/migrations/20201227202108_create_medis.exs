defmodule Cpf.Repo.Migrations.CreateMedis do
  use Ecto.Migration

  def change do
    create table(:medis) do
      add :seniorId, :integer
      add :manpowerId, :integer
      add :desc, :string
      add :mediName, :string
      add :string, :string

      timestamps()
    end

  end
end

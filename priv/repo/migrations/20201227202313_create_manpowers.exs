defmodule Cpf.Repo.Migrations.CreateManpowers do
  use Ecto.Migration

  def change do
    create table(:manpowers) do
      add :centerId, :integer
      add :fileId, :integer
      add :name, :string
      add :contact, :string
      add :region, :string
      add :sector, :string
      add :note, :string

      timestamps()
    end

  end
end

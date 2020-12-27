defmodule Cpf.Repo.Migrations.CreateGuardians do
  use Ecto.Migration

  def change do
    create table(:guardians) do
      add :name, :string
      add :age, :integer
      add :contact, :string
      add :address, :string

      timestamps()
    end

  end
end

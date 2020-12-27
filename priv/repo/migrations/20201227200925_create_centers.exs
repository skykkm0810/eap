defmodule Cpf.Repo.Migrations.CreateCenters do
  use Ecto.Migration

  def change do
    create table(:centers) do
      add :name, :string
      add :address, :string
      add :limited, :integer
      add :manager, :string
      add :contact, :string
      add :email, :string

      timestamps()
    end

  end
end

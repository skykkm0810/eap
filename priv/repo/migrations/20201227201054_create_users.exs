defmodule Cpf.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :name, :string
      add :uid, :string
      add :pwd, :string
      add :contact, :string
      add :class, :string
      add :centerId, :integer

      timestamps()
    end

  end
end

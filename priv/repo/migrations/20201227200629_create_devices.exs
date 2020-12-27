defmodule Cpf.Repo.Migrations.CreateDevices do
  use Ecto.Migration

  def change do
    create table(:devices) do
      add :type, :string
      add :name, :string
      add :centerId, :integer
      add :location, :string
      add :status, :string

      timestamps()
    end

  end
end

defmodule Cpf.Repo.Migrations.CreateEvents do
  use Ecto.Migration

  def change do
    create table(:events) do
      add :centerId, :integer
      add :userId, :integer
      add :venderId, :integer
      add :deviceId, :integer
      add :type, :string

      timestamps()
    end

  end
end

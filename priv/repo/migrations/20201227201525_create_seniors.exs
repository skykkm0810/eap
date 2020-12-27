defmodule Cpf.Repo.Migrations.CreateSeniors do
  use Ecto.Migration

  def change do
    create table(:seniors) do
      add :guardianId, :integer
      add :centerId, :integer
      add :name, :string
      add :gender, :boolean, default: false, null: false
      add :age, :integer
      add :address, :string
      add :contact, :string
      add :remark, :string

      timestamps()
    end

  end
end

defmodule Cpf.Task do
  use Ecto.Schema
  import Ecto.Changeset

  schema "tasks" do
    field :desc, :string
    field :events, :string
    field :hospital, :integer
    field :presents, :integer
    field :taxi, :integer
    field :userId, :integer

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:userId, :events, :presents, :taxi, :hospital, :desc])
    |> validate_required([:userId, :events, :presents, :taxi, :hospital, :desc])
  end
end

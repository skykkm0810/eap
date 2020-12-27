defmodule Cpf.Meal do
  use Ecto.Schema
  import Ecto.Changeset

  schema "meals" do
    field :centerId, :integer
    field :fileId, :integer
    field :menu, :string
    field :userId, :integer

    timestamps()
  end

  @doc false
  def changeset(meal, attrs) do
    meal
    |> cast(attrs, [:centerId, :userId, :fileId, :menu])
    |> validate_required([:centerId, :userId, :fileId, :menu])
  end
end

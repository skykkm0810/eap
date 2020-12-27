defmodule Cpf.Present do
  use Ecto.Schema
  import Ecto.Changeset

  schema "presents" do
    field :seniorId, :integer
    field :temp, :float
    field :tempOdd, :boolean, default: false
    field :with, :boolean, default: false

    timestamps()
  end

  @doc false
  def changeset(present, attrs) do
    present
    |> cast(attrs, [:seniorId, :temp, :tempOdd, :with])
    |> validate_required([:seniorId, :temp, :tempOdd, :with])
  end
end

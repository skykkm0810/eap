defmodule Cpf.Medi do
  use Ecto.Schema
  import Ecto.Changeset

  schema "medis" do
    field :desc, :string
    field :manpowerId, :integer
    field :mediName, :string
    field :seniorId, :integer
    field :string, :string

    timestamps()
  end

  @doc false
  def changeset(medi, attrs) do
    medi
    |> cast(attrs, [:seniorId, :manpowerId, :desc, :mediName, :string])
    |> validate_required([:seniorId, :manpowerId, :desc, :mediName, :string])
  end
end

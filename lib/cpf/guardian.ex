defmodule Cpf.Guardian do
  use Ecto.Schema
  import Ecto.Changeset

  schema "guardians" do
    field :address, :string
    field :age, :integer
    field :contact, :string
    field :name, :string

    timestamps()
  end

  @doc false
  def changeset(guardian, attrs) do
    guardian
    |> cast(attrs, [:name, :age, :contact, :address])
    |> validate_required([:name, :age, :contact, :address])
  end
end

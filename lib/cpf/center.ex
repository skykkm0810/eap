defmodule Cpf.Center do
  use Ecto.Schema
  import Ecto.Changeset

  schema "centers" do
    field :address, :string
    field :contact, :string
    field :email, :string
    field :limited, :integer
    field :manager, :string
    field :name, :string

    timestamps()
  end

  @doc false
  def changeset(center, attrs) do
    center
    |> cast(attrs, [:name, :address, :limited, :manager, :contact, :email])
    |> validate_required([:name, :address, :limited, :manager, :contact, :email])
  end
end

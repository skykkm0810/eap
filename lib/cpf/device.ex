defmodule Cpf.Device do
  use Ecto.Schema
  import Ecto.Changeset

  schema "devices" do
    field :centerId, :integer
    field :location, :string
    field :name, :string
    field :status, :string
    field :type, :string

    timestamps()
  end

  @doc false
  def changeset(device, attrs) do
    device
    |> cast(attrs, [:type, :name, :centerId, :location, :status])
    |> validate_required([:type, :name, :centerId, :status])
  end

  def get_devices(limit \\ 100) do
    Cpf.Repo.all(Cpf.Device, limit: limit)
  end
end

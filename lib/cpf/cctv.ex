defmodule Cpf.Cctv do
  use Ecto.Schema
  import Ecto.Changeset

  schema "cctvs" do
    field :dataId, :integer
    field :deviceId, :integer
    field :fileId, :integer

    timestamps()
  end

  @doc false
  def changeset(cctv, attrs) do
    cctv
    |> cast(attrs, [:dataId, :deviceId, :fileId])
    |> validate_required([:dataId, :deviceId, :fileId])
  end
end

defmodule Cpf.Senior do
  use Ecto.Schema
  import Ecto.Changeset

  schema "seniors" do
    field :address, :string
    field :age, :integer
    field :centerId, :integer
    field :contact, :string
    field :gender, :boolean, default: false
    field :guardianId, :integer
    field :name, :string
    field :remark, :string

    timestamps()
  end

  @doc false
  def changeset(senior, attrs) do
    senior
    |> cast(attrs, [:guardianId, :centerId, :name, :gender, :age, :address, :contact, :remark])
    |> validate_required([:guardianId, :centerId, :name, :gender, :age, :address, :contact, :remark])
  end
end

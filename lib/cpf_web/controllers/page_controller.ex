defmodule CpfWeb.PageController do
  use CpfWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end

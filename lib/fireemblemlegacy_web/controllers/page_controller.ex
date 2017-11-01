defmodule FireemblemlegacyWeb.PageController do
  use FireemblemlegacyWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end

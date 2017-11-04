defmodule ControllerHelpers do
  import Plug.Conn, only: [assign: 3, get_session: 2]
  import Phoenix.Controller, only: [render: 2, put_flash: 3, redirect: 2]

  def display(conn, template) do
    conn
    |> render(template)
  end

end

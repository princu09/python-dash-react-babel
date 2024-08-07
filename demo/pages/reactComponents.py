# from dash import Dash, Input, Output, State, html
# import dash
# from dash_local_react_components import load_react_component

# app = dash.register_page(__name__, path="/")

# # Load the React component
# Dropdown = load_react_component(
#     app, "react-project/dash-component/components/", "Dropdown.js"
# )

# layout = html.Div(
#     [
#         html.H1("This is our Home page"),
#         html.Div("This is our Home page content."),
#     ]
# )

import dash
from dash import html
from dash_local_react_components import load_react_component

dash.register_page(__name__, path="/dropdown")

app = dash.get_app()

# Load the React component
Dropdown = load_react_component(
    app, "react-project/dash-component/components/", "Dropdown.js"
)


layout = html.H1("This is our Dropdown page")

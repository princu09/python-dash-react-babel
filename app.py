import dash

# import dash_core_components as dcc
import dash_html_components as html
from dash_local_react_components import load_react_component

# External scripts for Tailwind CSS CDN
external_scripts = [
    {"src": "https://cdn.tailwindcss.com"},
    {"src": "assets/tailwinds.js"},
]

# External css stylesheets for Tailwind CSS CDN
external_stylesheets = [
    "assets/style.css",
    "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css",
]


app = dash.Dash(
    __name__,
    external_scripts=external_scripts,
    external_stylesheets=external_stylesheets,
    assets_url_path="assets",
)

# Example = load_react_component(app, "react-project/dash-component", "example.js")

Navbar = load_react_component(
    app, "react-project/dash-component/components", "Navbar.js"
)

HomePage = load_react_component(
    app, "react-project/dash-component/pages", "HomePage.js"
)

app.layout = html.Div(
    children=[
        Navbar(id="navbar"),
        HomePage(id="homepage"),
    ]
)

if __name__ == "__main__":
    app.run_server()

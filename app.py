from dash import Dash, Input, Output, State, html, dcc

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

import dash
from dash import Dash, html, dcc
from dash_local_react_components import load_react_component

app = Dash(
    __name__,
    external_stylesheets=external_stylesheets,
    external_scripts=external_scripts,
)

# Load the React component
Dropdown = load_react_component(
    app, "react-project/dash-component/components", "Dropdown.js"
)

# create variable for storing the selected value
selected_value = "option1"

app.layout = html.Div(
    [
        html.Div(
            [
                Dropdown(
                    id="dropdown",
                    options=[
                        {"label": "Option 1", "value": "option1"},
                        {"label": "Option 2", "value": "option2"},
                        {"label": "Option 3", "value": "option3"},
                        {"label": "Option 4", "value": "option4"},
                        {"label": "Option 5", "value": "option5"},
                        {"label": "Option 6", "value": "option6"},
                        {"label": "Option 7", "value": "option7"},
                        {"label": "Option 8", "value": "option8"},
                        {"label": "Option 9", "value": "option9"},
                        {"label": "Option 10", "value": "option10"},
                        {"label": "Option 11", "value": "option11"},
                        {"label": "Option 12", "value": "option12"},
                        {"label": "Option 13", "value": "option13"},
                        {"label": "Option 14", "value": "option14"},
                        {"label": "Option 15", "value": "option15"},
                        {"label": "Option 16", "value": "option16"},
                        {"label": "Option 17", "value": "option17"},
                        {"label": "Option 18", "value": "option18"},
                        {"label": "Option 19", "value": "option19"},
                        {"label": "Option 20", "value": "option20"},
                    ],
                    value=selected_value,
                ),
                html.Div(
                    [
                        html.H1("Selected Value:"),
                        html.H2(id="selected-value", children=selected_value),
                    ]
                ),
            ],
        ),
    ]
)


# callback to update the selected value
@app.callback(
    Output("dropdown", "value"),
    Output("selected-value", "children"),
    Input("dropdown", "value"),
    prevent_initial_call=True,
)
def update_selected_value(value):
    global selected_value
    selected_value = value
    print(f"Selected value: {value}")
    return value, value


if __name__ == "__main__":
    app.run(debug=True)

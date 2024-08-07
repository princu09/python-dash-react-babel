# Python Dash with React & Babel

###### Step 1
- Clone the Repository using command
`git@github.com:princu09/python-dash-react-babel.git`

###### Step 2

- Create Virtual Environment
`python3 -m venv .virtual-env`


###### Step 3
- Install the Requirements
`pip install -r requirements.txt`


###### Step 4
- Open First Terminal & Run Python Dash Project
`python app.py`

###### Step 5
- Open Second Terminal & Run React Project
`npm run dev`

In npm run dev command i was setup concurrently script for running react server and babel in watch mode.

###### Step 6
- Create File in Component Folder as React File and Write simple React Code and Import that file name in Python Dash

Check "app\.py" File Once for more information.

```
# Load the Component

Navbar = load_react_component(
    app, "react-project/dash-component/components", "Navbar.js"
)

# Call the Component

app.layout = html.Div(
    children=[
        Navbar(id="navbar"),
        HomePage(id="homepage"),
    ]
)
```

#### Enjoy Setup 🎉


For Compile Babel Online <a href="https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=JYWwDg9gTgLgBAJQKYEMDG8BmUIjgcilQ3wChS0IA7AZ3gFEAPFcAGyTgF44AKASi4A-OAG9ScOERgBXKFV7iJcADwATYADdBTFmHbKA9Oq2K-pAL7kkjSLDiqkmFNNYNmbJEA&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&evaluate=false&fileSize=true&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-0%2Cstage-1%2Cstage-2%2Cstage-3%2Cflow&prettier=true&targets=&version=7.25.3&externalPlugins=&assumptions=%7B%7D">
Click Here
</a>
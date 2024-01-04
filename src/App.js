import React from "react";
import "./App.css";

// Component to show a link for reloading grid with another data
class App extends React.Component {
  // Links this React component with the created TreeGrid if created by <treegrid> tag. The React component will be accessible in grid events as Grid.Component and grid will be accessible from React code as this.Grid
  // The Grids.OnInit can be used only if there is only one TreeGrid on page. For more grids on page assign the event only for particular grid as: window.TGSetEvent("OnInit",grid_id,function(grid){ grid.Component = Component; Component.Grid = grid; });
  Grid = null;
  constructor() {
    super();
    this.state = {Row:'' };
    var Component = this;
    window.Grids.OnInit = function (grid) {
      grid.Component = Component;
      Component.Grid = grid;
    };
    window.Grids.OnLoadError = function (grid) {
      alert(
        "TreeGrid cannot load!\nCheck if the NodeJS server runs on the url http://localhost:8000\nThe sample NodeJS server is located in /ExamplesNode/Server"
      );
    };
  }

  // Reloads the grid with given data and layout
  // Called on click to the example links to show given example
  // string example: the example name to read the TreeGrid source object from the Examples list

  // React event handler called when the component is rendered
  componentDidMount() {
    //window.StartTreeGrid(); // Processes all newly rendered <treegrid> / <bdo> tags on page, call it if the component is not mounted on page load
    // Uncomment this line to load TreeGrid dynamically from script. If used, remove the <treegrid> tag, the StartTreeGrid() call and the OnInit event that links grid to this class in constructor()
    //this.Grid = window.TreeGrid({ Debug:'check', id:'SampleGrid', Layout: { Url:"Layouts/StaticDef.js" }, Data: { Url:"Layouts/StaticData.js" }, ExportPDF:{Url:"http://localhost:8000/getpdf", Type:"Cfg,Def,Cols,All"} },"TreeGridMainTag",{ Component:this });
  
  }

  // React event handler called when the component is being removed
  componentWillUnmount() {
    this.Grid.Dispose();
  }

  // Custom method to demonstrate calling React method from TreeGrid code
  // Called from TreeGrid json layout, from Action OnRightClickCell, except Sheet example
  // Shows simple custom menu and calls some basic TreeGrid API methods on menu item click
  showCustomMenu(row, col) {
    var G = this.Grid;
    this.Grid.ShowMenu(row, col, {
      Items: [
        {
          Name: row.Deleted ? "Undelete row" : "Delete row",
          OnClick: function () {
            G.DeleteRow(row, row.Deleted ? 3 : 1);
          },
        },
        {
          Name: row.Selected ? "Deselect row" : "Select row",
          OnClick: function () {
            G.SelectRow(row);
          },
        },
        {
          Name: "Copy row",
          OnClick: function () {
            G.CopyRow(row, null, row, 1, 0);
          },
        },
        {
          Name: "Add new row",
          OnClick: function () {
            G.AddRow(null, row, 1);
          },
        },
      ],
    });
    return 1;
  }
  handlebutton(Row,Col){
    // console.log("Row",Row)
    // console.log("Col" , Col)
    this.setState({Row:Row})
    console.log(this.state.Row)
  }
  // Renders the whole sample page
  addNewrow()
  {
    var G = this.Grid;
    G.AddRow(null, this.state.Row, 1);
    // alert('hello')
  }
  render() {
    return (
      <div>
        {/* Page headers */}

        <div className="ExampleBorder">
          {/* TreeGrid main tag, it will contain the grid */}
          <button onClick={()=>this.addNewrow()}>Add new Row</button>
          <div
            className="ExampleMain"
            style={{ width: "100%", height: "530px" }}
            id="TreeGridMainTag"
          >
            {/* TreeGrid definition */}
            {/* Displays the first example on load */}
            {/* The is attribute is used to suppress React16+ warning about custom tag */}
            {/* By the id value the grid is accessible for global API like window.Grids.SampleGrid.Reload(); */}
            <treegrid
              is="treegrid"
              debug="check"
              id="SampleGrid"
              layout_url="Layouts/ClientListDef.js"
              data_url="Layouts/ClientListData.json"
              DE_Url="Grid/Languages/TextDE.xml"
              exportpdf_url="http://localhost:8000/getpdf"
              exportpdf_type="Cfg,Def,Cols,All"
            ></treegrid>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

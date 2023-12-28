import React, { useEffect, useState } from 'react';
import './App.css';
import GridData from './Data'

const App = () => {
  let Grid = null;

  const [grid_data,set_grid_data] = useState()
  useEffect(() => {
    // Logic here to mimic componentDidMount
    // ...
   //  fetch('./Data.json').then((res)=>
   //  {
   //    console.log(res)
   //    set_grid_data(res)
   //  })
   set_grid_data(GridData)
    return () => {
      // Logic here to mimic componentWillUnmount
      Grid.Dispose();
      // showCustomMenu()
    };
  }, []);

  let showCustomMenu=(row,col)=> {
   var G = Grid;
   Grid.ShowMenu(row,col,{Items:[
      { Name:row.Deleted?"Undelete row":"Delete row",OnClick:function(){ G.DeleteRow(row,row.Deleted?3:1); } },
      { Name:row.Selected?"Deselect row":"Select row",OnClick:function(){ G.SelectRow(row); } },
      { Name:"Copy row",OnClick:function(){ G.CopyRow(row,null,row,1,0); } },
      { Name:"Add new row",OnClick:function(){ G.AddRow(null,row,1); } }
      ]});
   return 1;
   }

  return (
    <div>
      {/* Rest of your JSX content */}
      <div className="ExampleBorder">
     
        <div className="ExampleMain" style={{ width: '100%', height: '530px' }} id="TreeGridMainTag">
          {/* TreeGrid definition */}
          {/* ... */}
          {/* Replace <treegrid> with your logic */}
          <treegrid
            is="treegrid"
            debug="check"
            id="SampleGrid"
            layout_url="Layouts/StaticDef.js"
            data_url="Layouts/Data.json"
            exportpdf_url="http://localhost:8000/getpdf"
            exportpdf_type="Cfg,Def,Cols,All"
            refs={Grid}
          ></treegrid>
        </div>
      </div>
    </div>
  );
};

export default App;

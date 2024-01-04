{
    Cfg : {
       CfgId:"Static", //  Grid identification for saving configuration to cookies
       PrintLoad:"1", PrintCols:"2", PrintLocation:"3", PrintPageBreaks:"1", PrintRows:"50", // Printing options, download all rows for printing
       Paging:'2', ChildPaging:'2', // Both paging set to server
       ChildPageLength:"20", // Server paging for child pages, splits children to given number of rows and loads them separately when they become visible due scroll
       SaveSession:'1', // Stores IO Session to cookies to identify the client on server and access appropriate grid instance
       Prepared:'1', // DLL sends data prepared, so you can set this attribute to speed up loading
       ShowDeleted:'0', // This example hides deleted row instead of coloring them red
       MaxHeight:'1', // Grid maximizes height of the main tag on page
       LimitScroll:"23", MinBodyRows:"6",  // Responsive design, for small windows sets NoVScroll and NoHScroll
      // To sort grid according to partner and Month for first time (when no configuration saved)
       MaxGroupLength:'0', // Suppresses dividing rows to more groups when grouping because it is controlled by MaxChildren of all rows
       // To group grid by partner for first time (when no configuration saved)
       GroupRestoreSort:'1', // Restores sorting state after grouping that was before grouping
       GroupSortMain:'1', // When grouping always sorts according to main column ascending
       Adding:'0' , // Suppress adding new rows when grid is not grouped
       FilterEmpty:'1', // When filtering, hides group rows that have all children hidden, see the Group row have set CanFilter:'2'
       IndexEnum:'1', // All enums are set by index
       NameCol:'P', // Row will be identifies by Partner name in messages (e.g. in deleting rows)
       ExportFormat:'XLS', // Predefined export format is XLS, because XLSX is not supported by the DLL
       Size:'Low' // Smaller style size because of large grid
       },
    Actions: { 
       OnUngroup:'Grid.Adding=0;',  // Suppress adding new rows when grid is not grouped
       OnRightClickCell:'Grid.Component.showCustomMenu(Row,Col)' // Custom event handler, shows the calling method of the framework component; Shows some custom popup menu on right click to any cell
       }, 
    Lang: { 
       MenuExport: { ExportFormats:'XLS,CSV' },   // Listed only XLS and CSV, because XLSX is not supported by the DLL
       Alert: { ErrAdd:'Cannot add new partner here!' } // Changes Text of adding error message
       }, 
    Root: { AcceptDef:'' }, 
    LeftCols:[
        {Name:'Sno',Type:'Int',Width:'50'},

        
        {Name:'Code',Type:'Text',Width:'150'},
        
        {Name:'FirmName',Type:'Text',Width:'150'}
    ],
    Cols:[
        {Name:'Address',Type:'Text'},	{Name:'Country',Type:'Text'},{Name:'St',Type:'Text'},
        {	Name:'City' ,Type :'Text'},	{Name:'Office', Type:'Text'}, {Name:'Phone' , Type:'Int'}	
        ,{Name:"ContactPerson", Type :'Text'},{	Name:'Mobile', Type:'Int'},	{Name:'Email',Type:'Text'}	
        ,{Name:'Status' , Type:'Text'},{Name:'Bank' ,Type:'Text'},	{Name:"BankAccountType",Type:'Int'},
     

        {	Name:'BankAccountName' ,Type :'Text'},
        {	Name:'BankAccountNumber' ,Type :'Text'},
        {	Name:'BankAddress' ,Type :'Text'},
        {	Name:'BankIFSCCode' ,Type :'Text'},
        {	Name:'BankBSRCode' ,Type :'Text'},
        {	Name:'BankMICRCode' ,Type :'Text'},
        {	Name:'PANNumber' ,Type :'Text'},
        {	Name:'CIDNumber' ,Type :'Text'},	
        {	Name:'PANGSTNumber' ,Type :'Text'},
        {	Name:'ARNNumber' ,Type :'Text'},

    ],
    Header: {
        Address:'Address', Country:'Country', St:'State', City:'City', Office:'Office',
        Phone:'Phone', ContactPerson:'Contact Person', Mobile:'Mobile', Email:'Email',
        Status:'Status', Bank:'Bank', BankAccountType:'Bank Account Type', BankAccountName:'Bank Account Name', BankAccountNumber:'Bank Account Number',
        BankAddress:'Bank Address' , BankIFSCCode:'Bank IFSC Code',BankBSRCode:'Bank BSR Code',BankMICRCode:'Bank MICR Code',
        PANNumber:'PAN Number',CIDNumber:'CID Number',PANGSTNumber:'PAN GST Number',ARNNumber:'ARN Number',
        },
}

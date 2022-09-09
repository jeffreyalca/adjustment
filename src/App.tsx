// import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { render } from "react-dom";
// import { ReactGrid, Column, Row, CellChange, TextCell } from "@silevis/reactgrid";
// import "@silevis/reactgrid/styles.css";
// import { AppContainer, ButtonContainer } from './App.styles';
// import { Button, Input } from '@mui/material';

// interface Budget {
//   type: string;
//   date1: string;
//   date2: string;
// }



// function App() {
//   const getBudget = (): Budget[] => [
//     { type: "Raw Cont %", date1: "", date2: "" },
//     { type: "Contribution %", date1: "", date2: "" },
//     { type: "Contribution", date1: "", date2: "" }
//   ];

//   const [budget, setBudget] = useState<Budget[]>(getBudget());
//   const [rows, setRows] = useState<Row[]>([]);
//   const [columns, setColumns] = useState<Column[]>([]);
  
  
//   const getColumns = (): Column[] => [
//     { columnId: "type", width: 150 },
//     { columnId: "date1", width: 150 },
//     { columnId: "date2", width: 150 }
//   ];
  
//   const headerRow: Row = {
//     rowId: "header",
//     cells: [
//       { type: "header", text: "Type" },
//       { type: "header", text: "9/30/19" },
//       { type: "header", text: "12/31/19" }
//     ]
//   };
  
//   const getRows = (people: Budget[]): Row[] => [
//     headerRow,
//     ...people.map<Row>((person, idx) => ({
//       rowId: idx,
//       cells: [
//         { type: "text", text: person.type },
//         { type: "text", text: person.date1 },
//         { type: "text", text: person.date2 }
//       ]
//     }))
//   ];

//   const applyChangesToPeople = (
//     changes: CellChange<TextCell>[],
//     prevPeople: Budget[]
//   ): Budget[] => {
//     changes.forEach((change) => {
//       const personIndex = change.rowId;
//       const fieldName = change.columnId;
//       // @ts-ignore
//       prevPeople[personIndex][fieldName] = change.newCell.text;
//     });
//     return [...prevPeople];
//   };

//   const handleChanges = (changes: CellChange<TextCell>[]) => { 
//     setBudget((prevPeople) => applyChangesToPeople(changes, prevPeople)); 
//   }; 

//   useEffect(() =>{
//     setRows(getRows(budget));
//     setColumns(getColumns());
//   }, [budget])

//   // const handleAddRow = () => {
//   //   setBudget(prev => [...prev, getItem()])
//   // }

//   // const getItem = () => {
//   //   let item: Budget = {};
//   //   columns.forEach(col => {
//   //     // @ts-ignore
//   //     item[col.columnId] = "";
//   //   });
//   //   return item;
//   // }
//   return (
//     <AppContainer>
//       <ButtonContainer>
//         <h1>Projections</h1>
//         {/* <Button color="primary" variant="contained">Add Row</Button>
//         <Button color="secondary" variant="outlined">Add Column</Button> */}
//         {/* <Input placeholder="Column Name"></Input> */}
//       </ButtonContainer>
//       {/* @ts-ignore */}
//       <ReactGrid rows={rows} columns={columns} onCellsChanged={handleChanges} />
//     </AppContainer>
//   );
// }

// export default App;
import { Box, Button, Input, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import Spreadsheet from "react-spreadsheet";
import './App.css';
import { AppContainer, ButtonContainer } from "./App.styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const addSheet = (title: string) => {
  return {
    title: title, 
    data: [
      // header start
      [
        { value: "Year", readOnly: true, className: 'header' },
        { value: "", readOnly: true, className: 'header' },
        { value: "", readOnly: true, className: 'header' },
        { value: "1", readOnly: true, className: 'header' },
        { value: "1", readOnly: true, className: 'header' },
        { value: "1", readOnly: true, className: 'header' },
        { value: "1", readOnly: true, className: 'header' },
        { value: "2", readOnly: true, className: 'header' },
        { value: "2", readOnly: true, className: 'header' },
        { value: "2", readOnly: true, className: 'header' },
        { value: "2", readOnly: true, className: 'header' },
        { value: "3", readOnly: true, className: 'header' },
        { value: "3", readOnly: true, className: 'header' },
        { value: "3", readOnly: true, className: 'header' },
        { value: "3", readOnly: true, className: 'header' },
        { value: "4", readOnly: true, className: 'header' },
        { value: "4", readOnly: true, className: 'header' },
        { value: "4", readOnly: true, className: 'header' },
        { value: "4", readOnly: true, className: 'header' },
        { value: "5", readOnly: true, className: 'header' },
        { value: "5", readOnly: true, className: 'header' },
        { value: "5", readOnly: true, className: 'header' },
        { value: "5", readOnly: true, className: 'header' },
        { value: "6", readOnly: true, className: 'header' },
        { value: "6", readOnly: true, className: 'header' },
        { value: "6", readOnly: true, className: 'header' },
        { value: "6", readOnly: true, className: 'header' },
        { value: "7", readOnly: true, className: 'header' },
        { value: "7", readOnly: true, className: 'header' },
        { value: "7", readOnly: true, className: 'header' },
        { value: "7", readOnly: true, className: 'header' },
        { value: "8", readOnly: true, className: 'header' },
        { value: "8", readOnly: true, className: 'header' },
        { value: "8", readOnly: true, className: 'header' },
        { value: "8", readOnly: true, className: 'header' },
        { value: "9", readOnly: true, className: 'header' },
        { value: "9", readOnly: true, className: 'header' },
        { value: "9", readOnly: true, className: 'header' },
        { value: "9", readOnly: true, className: 'header' },
        { value: "10", readOnly: true, className: 'header' },
        { value: "10", readOnly: true, className: 'header' },
        { value: "10", readOnly: true, className: 'header' },
        { value: "10", readOnly: true, className: 'header' },
        { value: "11", readOnly: true, className: 'header' },
        { value: "11", readOnly: true, className: 'header' },
        { value: "11", readOnly: true, className: 'header' },
        { value: "11", readOnly: true, className: 'header' },
        { value: "12", readOnly: true, className: 'header' },
        { value: "12", readOnly: true, className: 'header' },
        { value: "12", readOnly: true, className: 'header' },
        { value: "12", readOnly: true, className: 'header' },
      ],
      // header end
      // header start
      [
        { value: "Quarters", readOnly: true, className: 'header' },
        { value: "", readOnly: true, className: 'header' },
        { value: "0", readOnly: true, className: 'header' },
        { value: "1", readOnly: true, className: 'header' },
        { value: "2", readOnly: true, className: 'header' },
        { value: "3", readOnly: true, className: 'header' },
        { value: "4", readOnly: true, className: 'header' },
        { value: "5", readOnly: true, className: 'header' },
        { value: "6", readOnly: true, className: 'header' },
        { value: "7", readOnly: true, className: 'header' },
        { value: "8", readOnly: true, className: 'header' },
        { value: "9", readOnly: true, className: 'header' },
        { value: "10", readOnly: true, className: 'header' },
        { value: "11", readOnly: true, className: 'header' },
        { value: "12", readOnly: true, className: 'header' },
        { value: "13", readOnly: true, className: 'header' },
        { value: "14", readOnly: true, className: 'header' },
        { value: "15", readOnly: true, className: 'header' },
        { value: "16", readOnly: true, className: 'header' },
        { value: "17", readOnly: true, className: 'header' },
        { value: "18", readOnly: true, className: 'header' },
        { value: "19", readOnly: true, className: 'header' },
        { value: "20", readOnly: true, className: 'header' },
        { value: "21", readOnly: true, className: 'header' },
        { value: "22", readOnly: true, className: 'header' },
        { value: "23", readOnly: true, className: 'header' },
        { value: "24", readOnly: true, className: 'header' },
        { value: "25", readOnly: true, className: 'header' },
        { value: "26", readOnly: true, className: 'header' },
        { value: "27", readOnly: true, className: 'header' },
        { value: "28", readOnly: true, className: 'header' },
        { value: "29", readOnly: true, className: 'header' },
        { value: "30", readOnly: true, className: 'header' },
        { value: "31", readOnly: true, className: 'header' },
        { value: "32", readOnly: true, className: 'header' },
        { value: "33", readOnly: true, className: 'header' },
        { value: "34", readOnly: true, className: 'header' },
        { value: "35", readOnly: true, className: 'header' },
        { value: "36", readOnly: true, className: 'header' },
        { value: "37", readOnly: true, className: 'header' },
        { value: "38", readOnly: true, className: 'header' },
        { value: "39", readOnly: true, className: 'header' },
        { value: "40", readOnly: true, className: 'header' },
        { value: "41", readOnly: true, className: 'header' },
        { value: "42", readOnly: true, className: 'header' },
        { value: "43", readOnly: true, className: 'header' },
        { value: "44", readOnly: true, className: 'header' },
        { value: "45", readOnly: true, className: 'header' },
        { value: "46", readOnly: true, className: 'header' },
        { value: "47", readOnly: true, className: 'header' },
        { value: "48", readOnly: true, className: 'header' },
      ],
      // header end
      // header start
      [
        { value: "Dates", readOnly: true, className: 'header' },
        { value: "", readOnly: true, className: 'header' },
        { value: "9/30/19", readOnly: true, className: 'header' },
        { value: "12/31/19", readOnly: true, className: 'header' },
        { value: "03/31/20", readOnly: true, className: 'header' },
        { value: "6/30/20", readOnly: true, className: 'header' },
        { value: "09/30/20", readOnly: true, className: 'header' },
        { value: "12/31/20", readOnly: true, className: 'header' },
        { value: "3/31/21", readOnly: true, className: 'header' },
        { value: "6/30/21", readOnly: true, className: 'header' },
        { value: "9/30/21", readOnly: true, className: 'header' },
        { value: "12/31/21", readOnly: true, className: 'header' },
        { value: "03/31/22", readOnly: true, className: 'header' },
        { value: "06/30/22", readOnly: true, className: 'header' },
        { value: "09/30/22", readOnly: true, className: 'header' },
        { value: "12/31/22", readOnly: true, className: 'header' },
        { value: "03/31/23", readOnly: true, className: 'header' },
        { value: "06/30/23", readOnly: true, className: 'header' },
        { value: "09/30/23", readOnly: true, className: 'header' },
        { value: "12/31/23", readOnly: true, className: 'header' },
        { value: "03/31/24", readOnly: true, className: 'header' },
        { value: "06/30/24", readOnly: true, className: 'header' },
        { value: "09/30/24", readOnly: true, className: 'header' },
        { value: "12/31/24", readOnly: true, className: 'header' },
        { value: "03/31/25", readOnly: true, className: 'header' },
        { value: "06/30/25", readOnly: true, className: 'header' },
        { value: "09/30/25", readOnly: true, className: 'header' },
        { value: "12/31/25", readOnly: true, className: 'header' },
        { value: "03/31/26", readOnly: true, className: 'header' },
        { value: "06/30/26", readOnly: true, className: 'header' },
        { value: "09/30/26", readOnly: true, className: 'header' },
        { value: "12/31/26", readOnly: true, className: 'header' },
        { value: "03/31/27", readOnly: true, className: 'header' },
        { value: "06/30/27", readOnly: true, className: 'header' },
        { value: "09/30/27", readOnly: true, className: 'header' },
        { value: "12/31/27", readOnly: true, className: 'header' },
        { value: "03/31/28", readOnly: true, className: 'header' },
        { value: "06/30/28", readOnly: true, className: 'header' },
        { value: "09/30/28", readOnly: true, className: 'header' },
        { value: "12/31/28", readOnly: true, className: 'header' },
        { value: "03/31/29", readOnly: true, className: 'header' },
        { value: "06/30/29", readOnly: true, className: 'header' },
        { value: "09/30/29", readOnly: true, className: 'header' },
        { value: "12/31/29", readOnly: true, className: 'header' },
        { value: "03/31/30", readOnly: true, className: 'header' },
        { value: "06/30/30", readOnly: true, className: 'header' },
        { value: "09/30/30", readOnly: true, className: 'header' },
        { value: "12/31/30", readOnly: true, className: 'header' },
        { value: "03/31/31", readOnly: true, className: 'header' },
        { value: "06/30/31", readOnly: true, className: 'header' },
        { value: "09/30/31", readOnly: true, className: 'header' },
      ],
      // header end
      [
        { value: "FUND", readOnly: true, className: 'sub-heading' },
        { value: "Type", readOnly: true, className: 'sub-heading' },
      ],
      [
        { value: 'TA XIII', readOnly: true },
        { value: 'Raw Cont %', readOnly: true },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
        { value: "" },
      ],
      [
        { value: '', readOnly: true },
        { value: 'Contribution %', readOnly: true },
      ],
      [
        { value: '', readOnly: true },
        { value: 'Contribution', readOnly: true },
      ],
      [
        { value: '', readOnly: true },
        { value: 'Distribution', readOnly: true },
      ],
      [
        { value: '', readOnly: true },
        { value: 'NAV', readOnly: true },
      ],
      [
        { value: '', readOnly: true },
        { value: 'Commitment Remaining', readOnly: true },
      ],
      [
        { value: '', readOnly: true },
        { value: 'Cumulative Cash Flow', readOnly: true },
      ],
      [
        { value: '', readOnly: true },
        { value: 'Net Cash Flow', readOnly: true },
      ],
      [
        { value: '', readOnly: true },
        { value: 'Growth (before Distribution)', readOnly: true },
      ],
      [
        { value: '', readOnly: true },
        { value: 'Distribution %', readOnly: true },
      ],
      [
        { value: '', readOnly: true },
        { value: 'Raw Dist. %', readOnly: true },
      ],
      [
        { value: '', readOnly: true },
        { value: 'Interest True-up Contribution', readOnly: true },
      ],
      [
        { value: '', readOnly: true },
        { value: 'Contributions ITD', readOnly: true },
      ],
      [
        { value: '', readOnly: true },
        { value: 'Distributions ITD', readOnly: true },
      ],
      [
        { value: '', readOnly: true },
        { value: 'Contributions ITD (incl. Interest True-up)', readOnly: true },
      ],
      [
        { value: '', readOnly: true },
        { value: 'Distributions ITD (incl. Interest True-up)', readOnly: true },
      ],
      [
        { value: '', readOnly: true },
        { value: 'Paid-in %', readOnly: true },
      ],
      [
        { value: '', readOnly: true },
        { value: 'Paid-in % (inclu. Interest True-up)', readOnly: true },
      ],
      [
        { value: '', readOnly: true },
        { value: 'DPI', readOnly: true },
      ],
      [
        { value: '', readOnly: true },
        { value: 'DPI (inclu. Interest True-up)', readOnly: true },
      ],
      [
        { value: '', readOnly: true },
        { value: 'TVPI', readOnly: true },
      ],
      [
        { value: '', readOnly: true },
        { value: 'TVPI (inclu. Interest True-up)', readOnly: true },
      ],
      [
        { value: '', readOnly: true },
        { value: 'Break Even Period', readOnly: true },
      ],
    ]
  }
}

const App = () => {
  const addFund = (fundName: string) => {
    return {
      fundName
    }
  }

  const [data, setData] = useState([
    addFund("TA XIII")
    // addSheet('Projections')
  ]);
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [fundValue, setFundValue] = useState(0);
  const [fundName, setFundName] = useState('');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(newValue);
    setValue(newValue);
  };

  const handleFundChange= (event: React.SyntheticEvent, newValue: number) => {
    console.log(newValue);
    setFundValue(newValue);
    setValue(0);
  };

  const handleChange = (data: any, fundIndex: number, adjustmentIndex: number, title: string) => {
    setData(prev => {
      let dataSet = [...prev];
      let fund: any = prev[fundIndex];
      fund.adjustments.splice(adjustmentIndex, 1, { title, data });
      // let newDataset = dataSet.slice(index, 1);
      dataSet.splice(fundIndex, 1, fund);
      return dataSet;
    });
  }

  const handleAddFund = (fundName: string) => {
    setData(prev => [...prev, addFund(fundName)])
  }

  const handleAddBudget = (title: string, index: number) => {
    setData(prev => {
      let fund: any = prev[index];
      let dataset = [...prev];
      if (fund.adjustments) {
        fund.adjustments = [...fund.adjustments, addSheet(title)];
      } else {
        fund.adjustments = [addSheet(title)];
      }
      dataset.splice(index, 1, fund);
      console.log(dataset);
      return dataset;
    });
  }
  return (
    <AppContainer>
      <ButtonContainer>
        <Input placeholder="Fund Name" value={fundName} onChange={(event) => setFundName(event.target.value)}></Input>
        <Button color="primary" variant="contained" onClick={() => { handleAddFund(fundName); setFundName('') }}>Add Fund</Button>
      </ButtonContainer>
     
      <Tabs value={fundValue} onChange={handleFundChange}>
        {data && data.map((d, i) => (
          <Tab key={i} label={d.fundName} {...a11yProps(0)}  />
        ))}
      </Tabs>
      {data && data.map((d: any, i: number) => (
        <TabPanel key={i} value={fundValue} index={i}>
          <AppContainer>
            <h1>{d.fundName}</h1>
            <ButtonContainer>
              <Input placeholder="Adjustment Name" value={title} onChange={(event) => setTitle(event.target.value)}></Input>
              <Button color="primary" variant="contained" onClick={() => { handleAddBudget(title, i); setTitle('') }}>Add Adjustment</Button>
            </ButtonContainer>
            {/* <Button color="primary" variant="contained">Add Row</Button>
            <Button color="secondary" variant="outlined">Add Column</Button> */}
          </AppContainer>
          {d.adjustments && <>
            <Tabs value={value} onChange={handleTabChange}>
              {d && d.adjustments.map((a: any, j: number) => (
                <Tab key={j} label={a.title} {...a11yProps(0)}  />
              ))}
            </Tabs>
              {d && d.adjustments.map((a: any, j: number) => (
                <TabPanel key={j} value={value} index={j}>
                  <Spreadsheet data={a.data} onChange={(data) => handleChange(data, i, j, a.title)}/>
                </TabPanel>
              ))}
          </>}
          </TabPanel>
      ))}
    </AppContainer>
  )
};

export default App
import { Box, Button, Input, Tab, Tabs } from "@mui/material";
import { useCallback, useState } from "react";
import Spreadsheet, { RowIndicatorComponent } from "react-spreadsheet";
import './App.css';
import { AppContainer, ButtonContainer, FreezePaneContainer, SpeadsheetContainer, SpreadsheetWrapper } from "./App.styles";

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

function getFreezePane(fundname: string) {
  return [
    [
      { value: "Year", readOnly: true, className: 'header' },
      { value: "", readOnly: true, className: 'header' },
    ],
    [
      { value: "Quarters", readOnly: true, className: 'header' },
      { value: "", readOnly: true, className: 'header' },
    ],
    [
      { value: "Dates", readOnly: true, className: 'header' },
      { value: "", readOnly: true, className: 'header' },
    ],
    [
      { value: "FUND", readOnly: true, className: 'sub-heading' },
      { value: "Type", readOnly: true, className: 'sub-heading' },
    ],
    [
      { value: fundname, readOnly: true },
      { value: 'Raw Cont %', readOnly: true },
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

const addSheet = (title: string) => {
  return {
    title: title, 
    data: [
      // header start
      [
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
      [
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
        { value: '', readOnly: true },
      ],
      [
        { value: '' },
      ],
      [
        { value: '' },
      ],
      [
        { value: '' },
      ],
      [
        { value: '' },
      ],
      [
        { value: '' },
      ],
      [
        { value: '' },
      ],
      [
        { value: '' },
      ],
      [
        { value: '' },
      ],
      [
        { value: '' },
      ],
      [
        { value: '' },
      ],
      [
        { value: '' },
      ],
      [
        { value: '' },
      ],
      [
        { value: '' },
      ],
      [
        { value: '' },
      ],
      [
        { value: '' },
      ],
      [
        { value: '' },
      ],
      [
        { value: '' },
      ],
      [
        { value: '' },
      ],
      [
        { value: '' },
      ],
      [
        { value: '' },
      ],
      [
        { value: '' },
      ],
      [
        { value: '' },
      ],
      [
        { value: '' },
      ],
      // header end
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
  const [selectedRow, setSelectedRow] = useState(0);


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
                  <SpreadsheetWrapper>
                    <FreezePaneContainer>
                      <Spreadsheet data={getFreezePane(d.fundName)} hideColumnIndicators hideRowIndicators/>
                    </FreezePaneContainer>
                    <SpeadsheetContainer>
                      <Spreadsheet data={a.data} onChange={(data) => handleChange(data, i, j, a.title)}  hideColumnIndicators  hideRowIndicators/>
                    </SpeadsheetContainer>
                  </SpreadsheetWrapper>
                </TabPanel>
              ))}
          </>}
          </TabPanel>
      ))}
    </AppContainer>
  )
};

export default App
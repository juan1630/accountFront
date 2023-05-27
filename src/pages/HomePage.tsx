import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import { Box} from '@mui/material';
import { FormREgisterCosts } from '../components/home/FormRegisterCosts';

export const HomePage = () => {

  const [  value, setValue  ] = useState('0');

  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  }

    return(
      <Box >
        <TabContext value={value} >
          <Box>
          <TabList onChange={handleChange} style={{ display: 'flex', justifyContent:'center', width:'90%', margin:'0 10%' }} >
            <Tab style={{ width:'60%' }} label='Home' value='0' />
            <Tab style={{ width:'60%' }} label='Reports' value='1' />
          </TabList>
          </Box>
          <Box>
          <TabPanel value='0'> <FormREgisterCosts/>  </TabPanel>
          <TabPanel value='1'> Item 1 </TabPanel>
          </Box>
        </TabContext>
      </Box>
      )
}
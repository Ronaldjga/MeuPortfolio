import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { border } from '@mui/system';


export const theme = createTheme({
  palette: {
    primary: {
        main: "#ffffff",
          contrastText: "#022026",

        
    },
    secondary: {
      
      main: "#022026",
    },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: "#F2BF5E !important",
                    fontSize: "16px",
                    fontWeight: "bolder",
                    "&:hover": {
                        color: "#FFFFFF", 
                    }
                
                },
            },
        }
    }
});

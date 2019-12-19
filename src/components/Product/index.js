import React from "react";
import {Box,Typography, Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(
    {
        Product:{
            background: "black",
            '& img' : {
                maxWidth:"100%"
            }
        }
    });
export default function Product(){
  const classic = useStyles();
    return(
        <Box className={classic.Product} width="25%">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHfXsOAbyCmg4g_QnI8bt1T2eW8Fi3rpmICtwOKaX3O1owZMEI"/>
            <Typography variant="h6" color="secondary">Product title</Typography>
            <Button variant="contained" color="primary">ADD</Button>
            <Button variant="outline" color="primary">DETAIL</Button>
        </Box>
    );
}
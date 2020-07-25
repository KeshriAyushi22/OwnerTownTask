import React, { Component } from 'react'
import { Card, Grid, Typography, Paper, TextField, CardActions, CardContent, Button } from "@material-ui/core"
import "../css/First.css";
import { dataList } from "../services/util.js"
import { getHeroNames } from "../services/react_api.js"

class FirstPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: "",
            response:""
        }
    }

    validateData = (data) => {
        console.log(data)
        //validation (starts 0 and has space) 
        let regex = new RegExp(/^0 [0-9]+/);
        let isValid = regex.test(data);
        this.setState({ code: "" })
        if (isValid) {
            
            this.submitData(data)

        } else {
            console.log("error") //any false
        }
    }

    submitData = (data) => {
        //send to nodejs
      
      getHeroNames(data,(res)=>{ 
          if(res){
            this.setState({response:res})
          }
    })
           
            
    }

    onClickHandler = (item) => {
        let oldData = this.state.code
        let newData;
        if (item === "*") {
            //send button ->
            this.validateData(this.state.code)
        } else {
            if (item == "#") {
                newData = oldData + " ";
            } else {
                newData = oldData + item;
            }

            this.setState({ code: newData })
        }
    }


    render() {

        return (
            <React.Fragment>
                <div style={{width: '500px', marginLeft: 'auto', marginRight: 'auto', marginTop: '100px'}}>
                    <TextField
                        style={{width: '100%', marginBottom: '10px'}}
                        id="outlined-number"
                        label="Secret Code"
                        value={this.state.code}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            readOnly: true,
                          }}
                        variant="outlined"
                    />
                  <Grid container className="container">
                        {dataList.map(key => <Grid item sm={4} md={4} xs={4}>
                            <Card className="card" onClick={() => this.onClickHandler(Object.keys(key)[0])}>
                                <CardActions>
                                    <span className="button" >{Object.keys(key)[0]}</span>
                                </CardActions>
                                <CardContent>
                                    <Typography color="textSecondary" variant="h6" className="card-content">{Object.values(key)[0]}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>)}
                    </Grid>
                    <Paper elevation={3} style={{width: '100%', height: '100px', marginTop: '30px'}}>
                        <div className="super-hero">
                        <span>{this.state.response}</span>
                        </div>
                    </Paper>
                </div>
            </React.Fragment>
        )
    }
}

export default FirstPage;

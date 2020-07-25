import React, { Component } from 'react'
import { Card, Grid, Typography, CardActionArea, CardActions, CardContent, Button } from "@material-ui/core"
import "../css/First.css";
import { dataList } from "../services/util.js"
import { getHeroNames } from "../services/react_api.js"

class FirstPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: ""
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
       // console.log(data)
        getHeroNames(data)
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
                <Grid container className="container">
                    {Object.keys(dataList).map(key => <Grid item sm={4} md={4} xs={4}>
                        <Card className="card" >
                            <CardActions>
                                <Button onClick={() => this.onClickHandler(key)} className="button" >{key}</Button>
                            </CardActions>
                            <CardContent>
                                <Typography color="textSecondary" variant="h6" className="card-content">{dataList[key]}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>)}
                </Grid>
            </React.Fragment>
        )
    }
}

export default FirstPage;

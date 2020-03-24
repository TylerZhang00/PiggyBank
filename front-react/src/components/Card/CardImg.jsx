import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import appDataContext from "../../hooks/reducers/useContext";


const useStyles = makeStyles({

});



export default function CardImg(props) {
  const classes = useStyles();
  // const { state, dispatch } = useContext(appDataContext);

  return (
     
    <Card style={{maxWidth: 345}}>
      {/* <CardActionArea> */}
        <CardMedia
          component="img"
          alt={props.title}
          height="200"
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2"><a target="_blank" rel="noopener noreferrer" href={props.link}>
            {props.title}</a>
          </Typography>
          
          
          <Button
            style={{ 
            marginTop:'1rem',
            backgroundColor:"#c4d2c7",
            color:'black',
            fontWeight:'bold',
            height:'30px'
            }}
            variant="contained"
            color="primary"
            onClick={() => props.readArticle()}
          >
            Mark Read
          </Button>


          {props.allAnswers[`${props.id}`] ? (
            <img src="https://previews.123rf.com/images/yuliaglam/yuliaglam1403/yuliaglam140300046/26366894-vector-gold-star.jpg" width="40" height="40"></img>
                  ) : null}


          
          
        </CardContent>
      {/* </CardActionArea> */}
    </Card>
    
    
  );
}


import React from "react";
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Grid } from "@material-ui/core";
import './CardGrid.css';
function CardGrid(props) {
    const { cardContents } = props;

    let getCards = () => {
        let cards = cardContents.map((cardContent, index)=>
            <Grid key={index} item xs={12} sm={4} className='grid-cell'>
                <Card className='card'>
                    <CardContent>
                        {cardContent}
                    </CardContent>
                </Card>
            </Grid>
        )
        return cards;
    }
    return (
        <div className='card-grid-container'>
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
                {getCards()}
            </Grid>
        </div>
    );
  
}

CardGrid.propTypes = {
    cardContents: PropTypes.array
  };
export default CardGrid;
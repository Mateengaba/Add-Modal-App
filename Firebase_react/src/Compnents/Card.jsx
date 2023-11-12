// import React from 'react';

// const Card = ({ product }) => {
//     return (
//         <div className="Card">
            
//             <h3>{product.productName}</h3>
//             <p>Price: {product.productPrice}</p>
//             <p>Description: {product.productDesc}</p>
//         </div>
//     );
// };

// export default Card;



import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PrductsCard() {
  return (
    
    <Card sx={{ maxWidth: 345, border: "1px solid black" ,  justifyContent:"space-arund",
}}>
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      /> */}

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delit</Button>
        <Button size="small">Learn More</Button>

      </CardActions>
    </Card>
  );
}


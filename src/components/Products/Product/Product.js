import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import useStyles from "./styles";

export default function Product({ product }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={"none"}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">{product.price}</Typography>
        </div>
        <Typography variant="h2" color="textSecoundary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Card">
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

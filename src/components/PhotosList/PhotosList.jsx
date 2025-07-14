import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@mui/material";

import chefPic from "../../assets/vidya.jpg";

export const PhotosList = () => {
  const sampleImages = [
    "https://source.unsplash.com/400x300/?pastry",
    "https://source.unsplash.com/400x300/?cake",
    "https://source.unsplash.com/400x300/?dessert",
    "https://source.unsplash.com/400x300/?baking",
    "https://source.unsplash.com/400x300/?macaron",
    "https://source.unsplash.com/400x300/?cupcake",
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Gallery
      </Typography>
      <Grid container spacing={3}>
        {sampleImages.map((url, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={chefPic}
                  alt={`Pastry ${index}`}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Pastry #{index + 1}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

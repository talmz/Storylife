import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function StoryCard(props) {

  var date = new Date(props.children.date);

  return (
    <Card sx={{ backgroundColor: "#E5BA73", maxWidth: 345 }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.children.user.firstName[0] + props.children.user.lastName[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.children.title}
        subheader={date.toDateString()}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.children.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.children.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button sx={{
          color: "#C58940", '&:hover': {
            backgroundColor: '#FAEAB1',
            borderColor: '#0062cc',
            boxShadow: 'none',
          }
        }} onClick={() => {
          props.func(props.children);
        }} size="small">Comment</Button>
      </CardActions>

    </Card>
  );
}
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Delete, ShoppingBag } from '@mui/icons-material';
import { Box, Modal } from '@mui/material';
import EmptyImg from '../assets/images/empty.jpg'
import { useDeleteProductMutation } from '../store/produtsApi';

export default function CustomCard({ item }) {
  const [deleteProduct] = useDeleteProductMutation()

  const [open, setOpen] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState(null);

  const handleDeleteShow = (id) => {
    setOpen(true);
    setDeleteId(id);
  };
  function handleDelete(){
    deleteProduct(deleteId)
    setOpen(false);
  }

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          className='h-[140px] w-full object-cover'
          component="img"
          alt="product img"
          height="140"
          image={item.img ? item.img : EmptyImg}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {item.description}
          </Typography>
          <Box className='flex items-center space-x-10'>
            <Typography variant="h6">$ {item.price}</Typography>
            <Typography variant="body2" color="textDisabled">quantify {item.quantity} </Typography>
          </Box>
        </CardContent>
        <CardActions className='flex items-center justify-between'>
          <Box>
            <Button endIcon={<ShoppingBag />} size="small">Buy</Button>
            <Button size="small">More</Button>
          </Box>
          <Button onClick={() => handleDeleteShow(item.id)} className='!text-red-500' size="small"><Delete /></Button>
        </CardActions>
      </Card>
      <Modal className='flex items-center justify-center' open={open} onClose={() => setOpen(false)}>
        <Box className={'p-4 bg-white rounded-lg w-[400px]'}>
          <h3 className='text-[25px] font-bold text-center mb-5'>Delete Products... ?</h3>
          <Box className='flex justify-around items-center '>
            <Button className='w-[48%]' variant="contained" onClick={() => setOpen(false)}>Cancel</Button>
            <Button className='w-[48%]' variant="contained" color="error" onClick={handleDelete}>Delete</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
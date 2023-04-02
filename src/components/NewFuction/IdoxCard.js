import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Stack,
} from "@mui/material";

import React from "react";

const IdoxCard = () => {
  return (
    <>
      <Typography textAlign={"center"} variant="h4" mb={"5rem"} color="#404041">
        ฟังก์ชันใหม่พร้อมใช้งาน
      </Typography>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/img/test1.jpg"
              alt="f1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ฟังก์ชันใหม่ 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              ดูเพิ่มเติม
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/img/test1.jpg"
              alt="f1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ฟังก์ชันใหม่ 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              ดูเพิ่มเติม
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/img/test1.jpg"
              alt="f1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ฟังก์ชันใหม่ 3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              ดูเพิ่มเติม
            </Button>
          </CardActions>
        </Card>
      </Stack>
    </>
  );
};

export default IdoxCard;

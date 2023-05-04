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
import { useTranslation } from "react-i18next";
import React from "react";

const IdoxCard = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <Stack>
      <Typography textAlign={"center"} variant="h4" mb={"5rem"} color="#404041">
        {t("NewFuncitonArrival.NewFuncitons")}
      </Typography>
      <Stack
        justifyContent={"center"}
        gap={5}
        direction={"row"}
        sx={{ flexWrap: "wrap" }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/img/compliance1.jpg"
              alt="f1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t("NewFuncitonArrival.Legal.Title")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t("NewFuncitonArrival.Legal.Description")}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/img/incident1.jpg"
              alt="f1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t("NewFuncitonArrival.Incidents.Title")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t("NewFuncitonArrival.Incidents.Description")}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </Stack>
  );
};

export default IdoxCard;

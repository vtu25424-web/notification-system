import React from "react";
import {
  Card,
  CardContent,
  Typography
} from "@mui/material";

const PriorityNotifications = ({ notifications }) => {
  return (
    <>
      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        Top Priority Notifications
      </Typography>

      {notifications.map((item, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">
              {item.Type}
            </Typography>

            <Typography>
              {item.Message}
            </Typography>

            <Typography>
              Score: {item.priorityScore}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default PriorityNotifications;
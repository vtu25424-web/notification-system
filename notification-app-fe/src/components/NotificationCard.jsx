import React from "react";
import { Card, CardContent, Typography, Chip, Button } from "@mui/material";

const NotificationCard = ({ notification, onToggle }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">
          {notification.Type}
        </Typography>

        <Typography>
          {notification.Message}
        </Typography>

        <Typography variant="body2">
          {notification.Timestamp}
        </Typography>

        <Chip
          label={notification.isRead ? "Read" : "Unread"}
          color={notification.isRead ? "success" : "warning"}
          sx={{ mt: 1, mr: 2 }}
        />

        {/* Clean native wrapper containing the structural layout toggle button */}
        <div>
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={() => onToggle && onToggle(notification)}
          >
            Toggle Read Status
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationCard;
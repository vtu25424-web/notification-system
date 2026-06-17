import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Container,
  Typography,
  Pagination
} from "@mui/material";

import NotificationList from "./components/NotificationList";
import FilterBar from "./components/FilterBar";
import PriorityNotifications from "./components/PriorityNotifications";
import { getPriorityScore } from "./utils/priority";
import { notifications as mockData } from "./data/notifications";

const API_URL = '/evaluation-service/notifications';

function App() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);

  const itemsPerPage = 2;

  // Replaced API fetch side-effect with local mock data synchronization
  useEffect(() => {
    setNotifications(mockData);
  }, []);

  // Reset page window index back to 1 if filter configuration alters
  useEffect(() => {
    setPage(1);
  }, [filter]);

  const filteredNotifications = filter
    ? notifications.filter(
        (n) => n.Type === filter
      )
    : notifications;

  // Apply pagination slicing window strategy across filtered stack rows
  const paginatedNotifications = filteredNotifications.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  // Process priority scores, sort in descending order, and slice the top 3 items
  const topNotifications = [...notifications]
    .map(item => ({
      ...item,
      priorityScore: getPriorityScore(item)
    }))
    .sort((a, b) => b.priorityScore - a.priorityScore)
    .slice(0, 3);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
      >
        Notification Dashboard
      </Typography>

      <FilterBar
        filter={filter}
        setFilter={setFilter}
      />

      {/* Render the Top Priority Notifications Section */}
      <PriorityNotifications
        notifications={topNotifications}
      />

      {/* Render the Paginated Notification List Subset */}
      <NotificationList
        notifications={paginatedNotifications}
      />

      {/* Pagination Bottom Control Interface Bar Layer */}
      <Pagination
        count={Math.ceil(filteredNotifications.length / itemsPerPage)}
        page={page}
        onChange={(e, value) => setPage(value)}
        sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}
      />
    </Container>
  );
}

export default App;
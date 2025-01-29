import express from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes";

const app = express();
const port = process.env.PORT || 9001;  // Use environment variable PORT or default to 3000

app.use(
  cors({
    origin: '*', // Only allow requests from the frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true, // Allow cookies and authorization headers
  })
);

app.use(express.json());
app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Todo List Backend is running!");
});

// Start listening on the specified port
app.listen(port, () => {
  console.log(`Todo List Backend is running on port ${port}`);
});

export default app;

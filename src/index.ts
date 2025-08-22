import express from "express";
import mockRoutes from "./routes/mockRoutes";

const app = express();
app.use(express.json());

// Mount routes under /mock
app.use("/mock", mockRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Mock server running on http://localhost:${PORT}`);
});
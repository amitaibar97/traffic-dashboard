import { initializeApp } from "firebase-admin/app";
import { onRequest } from "firebase-functions/v2/https";
import express from "express";
import cors from "cors";
import { createTrafficStatsRouter } from "./routes/trafficStats.route";
import { createAppContainer } from "./container";
import { errorHandler } from "./middleware/errorHandler";

initializeApp();

const app = express();
app.use(
  cors({
    origin:
      "https://traffic-dashboard-orpin.vercel.app" /* Adjust this to your frontend URL */,
  })
);
app.use(express.json());

const { trafficStatService } = createAppContainer();
app.use("/traffic-stats", createTrafficStatsRouter(trafficStatService));

app.use(errorHandler);

export const api = onRequest({ region: "europe-west3" }, app);

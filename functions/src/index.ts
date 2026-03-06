import { initializeApp } from "firebase-admin/app";
import { onRequest } from "firebase-functions/v2/https";
import express from "express";
import cors from "cors";
import { createTrafficStatsRouter } from "./routes/trafficStats.route";
import { createAppContainer } from "./container";

initializeApp();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

const { service } = createAppContainer();
app.use("/traffic-stats", createTrafficStatsRouter(service));
// app.get("/", (_req, res) => res.json({ ok: true }));

export const api = onRequest({ region: "europe-west3" }, app);

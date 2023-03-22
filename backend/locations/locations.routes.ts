import express from "express";

const router = express.Router();

import * as controller from "./locations.controllers";

router.get("/search", controller.queryLots);
router.get("/:location", controller.getLocationList);
router.get("/:location/:id", controller.getLocation);

export default router;

import { Router, Request, Response } from "express";
import { MockService } from "../services/mockService";

const router = Router();

router.post("/sprout", async (req: Request, res: Response) => {
  try {
    const result = await MockService.getSproutResponse();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
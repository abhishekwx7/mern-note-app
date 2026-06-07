import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

import dotenv from "dotenv";

dotenv.config();

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(15, "10 s"),
});

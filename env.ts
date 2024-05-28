import { z } from "zod";

const schema = z.object({
  API_URL: z.string(),
  API_TOKEN: z.string(),
});

export const parsedEnv = schema.parse(process.env);

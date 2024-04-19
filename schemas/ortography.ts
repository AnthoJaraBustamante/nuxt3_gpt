import { z } from 'zod';
import type { toZod } from "tozod";


export interface OrtographyDTO {
    prompt: string;
    maxTokens?: number | null;
}

export const ortographySchema:toZod<OrtographyDTO> = z.object({
    prompt: z.string(),
    maxTokens: z.number().optional(),
})

 

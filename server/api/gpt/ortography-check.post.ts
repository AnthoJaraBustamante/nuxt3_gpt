import { ortographySchema } from "../../../schemas/ortography";



export default defineEventHandler(async (event) => {
    const result = await readValidatedBody(event, body => ortographySchema.safeParse(body));
    if (!result.success) return result.error.issues;
    const { openaiApiKey } = useRuntimeConfig();
    return {
        "prompt": result.data.prompt,
        "apikey": openaiApiKey,
    };
})        
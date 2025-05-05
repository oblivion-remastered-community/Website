import { ErrorWithHTTPCode } from "../errors";
import { octokit } from "./common";

export async function getTeams(org: string, page: number = 0): Promise<any> {
    try {
        const app = await octokit()
        return await app.teams.list({
            per_page: 100,
            page,
            org,
        })
    }
    catch(err) {
        const httpErr = (err as ErrorWithHTTPCode)
        console.error(httpErr)
        throw httpErr;
    }
}
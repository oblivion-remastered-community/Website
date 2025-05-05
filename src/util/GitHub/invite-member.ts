import { ErrorWithHTTPCode } from "../errors";
import { octokit } from "./common";

type InvitationRequest = {
    email: string
    teamIds: number[]
}

export async function inviteTeamMember(invitationRequest: InvitationRequest): Promise<any> {

    try {
        const app = await octokit()
        return await app.orgs.createInvitation({
            org: 'oblivion-remastered-community',
            email: invitationRequest.email,
            role: "direct_member",
            team_ids: invitationRequest.teamIds
        })
    }
    catch(err) {
        const httpErr = (err as ErrorWithHTTPCode)
        throw httpErr;
    }
}
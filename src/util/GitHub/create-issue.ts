import { mutation } from 'gql-query-builder';
import { fetchRequest, gitHubGQL } from "./common";
import { ErrorWithHTTPCode } from '../errors';
import {App} from "octokit";
import {createAppAuth} from "@octokit/auth-app";

export interface IGitHubAddIssueResponse {
    data: {
        createIssue: {
            clientMutationId: string;
            issue: {
                number: number;
            }
        }
    }
    errors?: {
        message: string;
        locations: string[];
        path: string[];
        extensions: any;
    }[] 
    message?: string;
}

const addIssueQuery = (repositoryId: string, title: string, body: string, labelIds: string[], clientMutationId: string) => mutation({
    operation: 'createIssue',
    variables: {
        input: {
            value: { repositoryId, title, body, labelIds, clientMutationId },
            type: 'CreateIssueInput',
            required: 'true'
        },
    },
    fields: [
        'clientMutationId',
        {
            issue: ['number']
        }
    ]

}, undefined, { operationName: 'createNewIssue' });

export async function createIssue(repoId: string, title: string, body: string, labelIds: string[], reference: string): Promise<any> {
        const query = addIssueQuery(repoId, title, body, labelIds.map(l => l.trim()), reference);

        console.log('Create issue', { query: query.query, input: JSON.stringify(query.variables)})

        console.log('Stringified', JSON.stringify(query))

        try {
            const req: IGitHubAddIssueResponse = await fetchRequest(query, { revalidate: 0 })
            return req;
        }
        catch(err) {
            const httpErr = (err as ErrorWithHTTPCode)
            throw httpErr;
        }

    }
}
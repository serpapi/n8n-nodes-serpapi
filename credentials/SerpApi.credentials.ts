import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
	Icon
} from 'n8n-workflow';

export class SerpApi implements ICredentialType {
	name = 'serpapi';
	displayName = 'SerpApi API';
	icon: Icon = 'file:serpapi.svg';
	// Uses the link to this tutorial as an example
	// Replace with your own docs links when building your own nodes
	documentationUrl = 'https://docs.n8n.io/integrations/creating-nodes/build/declarative-style-node/';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];
	authenticate = {
		type: 'generic',
		properties: {
			qs: {
				'api_key': '={{$credentials.apiKey}}'
			}
		},
	} as IAuthenticateGeneric;
}
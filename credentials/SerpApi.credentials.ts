import { IAuthenticateGeneric, ICredentialType, INodeProperties, Icon } from 'n8n-workflow';

export class SerpApi implements ICredentialType {
	name = 'serpApi';
	displayName = 'SerpApi API';
	icon: Icon = 'file:serpapi.svg';
	documentationUrl = 'https://serpapi.com/search-api';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				api_key: '={{$credentials.apiKey}}',
			},
		},
	};
}

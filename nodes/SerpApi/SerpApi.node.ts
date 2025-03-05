import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

// import { googleSearchFields, googleSearchOperations } from './descriptions/GoogleSearchDescription';
// import { googleMapsFields, googleMapsOperations } from './descriptions/GoogleMapsDescription';

import {
    googleSearchFields,
    googleSearchOperations,
    googleMapsFields,
    googleMapsOperations
} from './descriptions';

export class SerpApi implements INodeType {
	description: INodeTypeDescription = {
		// Basic node details will go here
        displayName: 'SerpApi',
        name: 'SerpApi',
        icon: 'file:serpapi.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["resource"]}}',
        description: 'Get live Google Search data and more from SerpApi',
        defaults: {
            name: 'SerpApi',
        },
        inputs: [NodeConnectionType.Main],
        outputs: [NodeConnectionType.Main],
        credentials: [
            {
                name: 'SerpApi',
                required: true,
            },
        ],
        requestDefaults: {
            baseURL: 'https://serpapi.com/search.json',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        },

		properties: [
		// Resources and operations will go here
            // required
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Google Search',
						value: 'google',
					},
					{
						name: 'Google Maps',
						value: 'google_maps',
					},
				],
				default: 'google',
			},

            ...googleSearchOperations,
            ...googleSearchFields,
            ...googleMapsOperations,
            ...googleMapsFields,

            // optional/additional
            {
                displayName: 'Additional Fields',
                name: 'additionalFields',
                type: 'collection',
                default: {},
                placeholder: 'Add Field',
                options: [
                    {
                        displayName: 'Language',
                        name: 'hl',
                        type: 'options',
                        noDataExpression: true,
                        options: [
                            {
                                name: 'English',
                                value: 'en',
                                description: '',
                            },
                            {
                                name: 'Italian',
                                value: 'it',
                                description: '',
                            }
                        ],
                        default: 'en',
                        description: "Parameter defines the language to use for the Google search. It's a two-letter language code. (e.g., en for English, es for Spanish, or fr for French)",
                        routing: {
                            request: {
                                qs: {
                                    hl: '={{$value}}',
                                },
                            },
                        },
                    },
                    {
                        displayName: 'Number of results',
                        name: 'num',
                        type: 'string',
                        default: '',
                        placeholder: 'en',
                        description: 'Parameter defines the maximum number of results to return. (e.g., 10 (default) returns 10 results, 40 returns 40 results, and 100 returns 100 results).',
                        routing: {
                            request: {
                                qs: {
                                    num: '={{$value}}',
                                },
                            },
                        },
                    },
                ],
            }
		],
	};
}
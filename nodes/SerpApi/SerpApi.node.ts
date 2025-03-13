import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

import {
    googleSearchFields,
    googleFlightsFields
    googleMapsFields,
    googleShoppingFields,
    googleTrendsFields
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
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Google Search',
						value: 'google',
                        routing: {
                            request: {
                                qs: { 
                                    engine: 'google' 
                                },
                            },
                        },
					},
                    {
						name: 'Google Flights',
						value: 'google_flights',
                        routing: {
                            request: {
                                qs: { 
                                    engine: 'google_flights'
                                },
                            },
                        },
					},
					{
						name: 'Google Maps',
						value: 'google_maps',
                        routing: {
                            request: {
                                qs: { 
                                    engine: 'google_maps' 
                                },
                            },
                        },
					},
					{
						name: 'Google Shopping',
						value: 'google_shopping',
                        routing: {
                            request: {
                                qs: { 
                                    engine: 'google_shopping' 
                                },
                            },
                        },
					},
                    {
						name: 'Google Trends',
						value: 'google_trends',
                        action: 'Search Google Trends',
                        routing: {
                            request: {
                                qs: { 
                                    engine: 'google_trends' 
                                },
                            },
                        },
					},
				],
				default: 'google',
			},

            ...googleSearchFields,
            ...googleFlightsFields,
            ...googleMapsFields,
            ...googleShoppingFields,
            ...googleTrendsFields
		],
	};
}


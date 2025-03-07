import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

import {
    googleSearchFields,
    googleSearchOperations,
    googleMapsFields,
    googleMapsOperations,
    googleTrendsFields,
    googleTrendsOperations,
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
                    {
						name: 'Google Trends',
						value: 'google_trends',
					},
				],
				default: 'google',
			},

            ...googleSearchOperations,
            ...googleSearchFields,
            ...googleMapsOperations,
            ...googleMapsFields,
            ...googleTrendsOperations,
            ...googleTrendsFields
		],
	};
}


import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class SerpApi implements INodeType {
	description: INodeTypeDescription = {
		// Basic node details will go here
        displayName: 'SerpApi',
        name: 'SerpApi',
        icon: 'file:openweather.svg',
        group: ['transform'],
        version: 1,
        subtitle: 'Scrape Google Search',
        description: 'Get live Google Search data from SerpApi',
        defaults: {
            name: 'SerpApi Defaults',
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
                displayName: 'Query',
                name: 'q',
                type: 'string',
                default: '',
                placeholder: 'Mercedes Benz',
                required: true,
                description: 'The name of the city to return the weather of',
                routing: {
                    request: {
                        qs: {
                            q: '={{$value}}'
                        }
                    }
                }
            },

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
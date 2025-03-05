import type { INodeProperties } from 'n8n-workflow';

export const googleSearchOperations: INodeProperties[] = [
    {
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
        default: 'google',
		displayOptions: {
			show: {
				resource: ['google'],
			},
		},
		options: [
            {
				name: 'Google Search',
				value: 'google',
				description: 'Search Google',
				routing: {
					request: {
						qs: { 
                            engine: 'google' 
                        },
					},
				},
				action: 'Search Google',
			}
        ]
    }
]

export const googleSearchFields: INodeProperties[] = [
	{
        displayName: 'Query',
        name: 'q',
        type: 'string',
        default: 'Coffee',
        placeholder: 'Coffee',
        required: true,
        description: 'Parameter defines the query you want to search. You can use anything that you would use in a regular Google search. e.g. inurl:, site:, intitle:. We also support advanced search query parameters such as `as_dt` and `as_eq`.',
        displayOptions: {
            show: {
                resource: ['google'],
                operation: ['google_search', 'google_shopping']
            }
        },
        routing: {
            request: {
                qs: {
                    q: '={{$value}}'
                }
            }
        }
    },
    {
        displayName: 'Location',
        name: 'location',
        type: 'string',
        default: 'Austin, Texas, United States',
        placeholder: 'Austin, Texas, United States',
        required: false,
        description: "Parameter defines from where you want the search to originate. If several locations match the location requested, we'll pick the most popular one. Head to the /locations.json API if you need more precise control. The `location` and `uule` parameters can't be used together. It is recommended to specify `location` at the city level in order to simulate a real user’s search. If `location` is omitted, the search may take on the location of the proxy.",
        displayOptions: {
            show: {
                resource: ['google'],
                operation: ['google_search', 'google_shopping']
            }
        },
        routing: {
            request: {
                qs: {
                    location: '={{$value}}'
                }
            }
        }
    },

];
import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from '../SerpApiFields'; // Import generic fields

export const googleSearchOperations: INodeProperties[] = [
    {
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
        noDataExpression: true,
        default: 'google_search',
		displayOptions: {
			show: {
				resource: ['google'],
			},
		},
		options: [
            {
				name: 'Google Search',
				value: 'google_search',
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
        displayName: 'Querytest',
        name: 'q',
        type: 'string',
        default: 'Coffee',
        placeholder: 'Coffee',
        required: true,
        description: 'Parameter defines the query you want to search. You can use anything that you would use in a regular Google search. e.g. inurl:, site:, intitle:. We also support advanced search query parameters such as `as_dt` and `as_eq`.',
        displayOptions: {
            show: {
                resource: ['google'],
                operation: ['google_search']
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
        "displayName": 'Location',
        name: 'location',
        type: 'string',
        default: 'Austin, Texas, United States',
        placeholder: 'Austin, Texas, United States',
        required: false,
        description: "Parameter defines from where you want the search to originate. If several locations match the location requested, we'll pick the most popular one. Head to the /locations.json API if you need more precise control. The `location` and `uule` parameters can't be used together. It is recommended to specify `location` at the city level in order to simulate a real user’s search. If `location` is omitted, the search may take on the location of the proxy.",
        displayOptions: {
            show: {
                resource: ['google'],
                operation: ['google_search']
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
    {
        "name": "url",
        "displayName": "`url` Image URL",
        "default": "",
        "description": "Parameter defines the URL of an image to perform the Google Lens search.",
        "displayOptions": {
          "show": {
            "resource": [
              "google"
            ],
            "operation": [
              "google_search"
            ]
          }
        },
        "routing": {
          "request": {
            "qs": {
              "fix_this": "={{$value}}"
            }
          }
        },
        "type": "string",
        "required": true
      },
    // Additional Fields
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        default: {},
        placeholder: 'Add Field',
        displayOptions: {
            show: {
                resource: ['google'],
                operation: ['google_search']
            }
        },
        options: [
            {
                displayName: 'Number of results SEARCH',
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
            ...serpApiFields
        ],
    }
];
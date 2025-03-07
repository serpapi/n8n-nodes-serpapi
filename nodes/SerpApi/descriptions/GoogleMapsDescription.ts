import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from '../SerpApiFields'; // Import generic fields

export const googleMapsOperations: INodeProperties[] = [
    {
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
        default: 'google_maps',
		displayOptions: {
			show: {
				resource: ['google_maps'],
			},
		},
		options: [
            {
				name: 'Google Maps',
				value: 'google_maps',
				description: 'Search Google Maps',
				routing: {
					request: {
						qs: { 
                            engine: 'google_maps' 
                        },
					},
				},
				action: 'Search Google Maps',
			},
            {
				name: 'Google Maps Reviews',
				value: 'google_maps_reviews',
				description: 'Search Google Maps Reviews',
				routing: {
					request: {
						qs: { 
                            engine: 'google_maps_reviews' 
                        },
					},
				},
				action: 'Search Google Maps Reviews',
			}
        ]
    }
]

export const googleMapsFields: INodeProperties[] = [
	{
        displayName: 'Search Query',
        name: 'q',
        type: 'string',
        default: 'Coffee',
        placeholder: 'Coffee',
        required: false,
        description: 'Parameter defines the query you want to search. You can use anything that you would use in a regular Google Maps search. The parameter is only required if `type` is set to search.',
        displayOptions: {
            show: {
                resource: ['google_maps'],
                operation: ['google_maps']
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
        displayName: 'Language',
        name: 'hl',
        type: 'string',
        default: 'en',
        placeholder: 'en',
        required: false,
        description: "Parameter defines the language to use for the Google Maps search. It's a two-letter language code, for example, en for English (default), es for Spanish, or fr for French).",
        displayOptions: {
            show: {
                resource: ['google_maps'],
                operation: ['google_maps', 'google_maps_reviews']
            }
        },
        routing: {
            request: {
                qs: {
                    hl: '={{$value}}'
                }
            }
        }
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
                resource: ['google_maps'],
                operation: ['google_maps']
            }
        },
        options: [
            {
                displayName: 'Number of results MAPS',
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
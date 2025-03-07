import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from '../SerpApiFields'; // Import generic fields

export const googleTrendsOperations: INodeProperties[] = [
    {
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
        noDataExpression: true,
        default: 'google_trends',
		displayOptions: {
			show: {
				resource: ['google_trends'],
			},
		},
		options: [
            {
				name: 'Google Trends',
				value: 'google_trends',
				description: 'Search Google Trends',
				routing: {
					request: {
						qs: { 
                            engine: 'google_trends' 
                        },
					},
				},
				action: 'Search Google Trends',
			}
        ]
    }
]

export const googleTrendsFields: INodeProperties[] = [
    {
      "name": "q",
      "displayName": "`q` Search Query",
      "description": "Parameter defines the query or queries you want to search. You can use anything that you would use in a regular Google Trends search. The maximum number of queries per search is 5 (this only applies to \"Interest over time\" and \"Compared breakdown by region\" data_type, other types of data will only accept 1 query per search).When passing multiple queries you need to use a comma (,) to separate them (e.g. coffee,pizza,dark chocolate,/m/027lnzs,bread).Query can be a \"Search term\" (e.g. World Cup, Eminem, iPhone, etc.) or a \"Topic\" (e.g. /m/0663v, /m/027lnzs, /g/11mw8j71m4, etc.). Queries that are \"Topics\" are encoded. To retrieve these values you can use our Google Trends Autocomplete API.Maximum length for each query is 100 characters.",
      "default": "",
      "routing": {
        "request": {
          "qs": {
            "q": "={{$value}}"
          }
        }
      },
      "type": "string",
      "required": true,
      "displayOptions": {
        "show": {
          "resource": [
            "google_trends"
          ],
          "operation": [
            "google_trends"
          ]
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
                resource: ['google_trends'],
                operation: ['google_trends']
            }
        },
        options: [
            {
                displayName: 'Number of results TRENDS',
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
import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';
import { LanguageOptions } from './GoogleOptions';

export const googleTrendsTrendingNowFields: INodeProperties[] = [
  {
    displayName: 'Location (geo)',
    name: 'geo',
    description: 'Parameter defines the location from where you want the search to originate. It defaults to US. Full list of supported values is here: https://serpapi.com/google-trends-trending-now-locations',
    default: 'US',
    routing: {
      request: {
        qs: {
          geo: '={{$value}}'
        }
      }
    },
    type: 'string',
    required: true,
    displayOptions: {
      show: {
        operation: ['google_trends_trending_now']
      }
    }
  },
  {
    displayName: 'Additional Fields',
    name: 'additionalFields',
    type: 'collection',
    default: {},
    placeholder: 'Add Field',
    displayOptions: {
      show: {
        operation: ['google_trends_trending_now']
      }
    },
    options: [
      {
        displayName: 'Hours (hours)',
        name: 'hours',
        description: 'Parameter defines the number of past hours to retrieve the results for.',
        default: '24',
        routing: {
          request: {
            qs: {
              hours: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Category Id (category_id)',
        name: 'category_id',
        description: 'Parameter allows results to be filtered by a specific category.',
        default: '',
        routing: {
          request: {
            qs: {
              category_id: '={{$value}}'
            }
          }
        },
        type: 'options',
        options: [
          {
            name: 'Autos and Vehicles - 1',
            value: '1'
          },
          {
            name: 'Beauty and Fashion - 2',
            value: '2'
          },
          {
            name: 'Business and Finance - 3',
            value: '3'
          },
          {
            name: 'Climate - 20',
            value: '20'
          },
          {
            name: 'Entertainment - 4',
            value: '4'
          },
          {
            name: 'Food and Drink - 5',
            value: '5'
          },
          {
            name: 'Games - 6',
            value: '6'
          },
          {
            name: 'Health - 7',
            value: '7'
          },
          {
            name: 'Hobbies and Leisure - 8',
            value: '8'
          },
          {
            name: 'Jobs and Education - 9',
            value: '9'
          },
          {
            name: 'Law and Government - 10',
            value: '10'
          },
          {
            name: 'Other - 11',
            value: '11'
          },
          {
            name: 'Pets and Animals - 13',
            value: '13'
          },
          {
            name: 'Politics - 14',
            value: '14'
          },
          {
            name: 'Science - 15',
            value: '15'
          },
          {
            name: 'Shopping - 16',
            value: '16'
          },
          {
            name: 'Sports - 17',
            value: '17'
          },
          {
            name: 'Technology - 18',
            value: '18'
          },
          {
            name: 'Travel and Transportation - 19',
            value: '19'
          }
        ]
      },
      {
        displayName: 'Only Active (only_active)',
        name: 'only_active',
        description: 'Parameter filters results to only include those that are currently active.',
        default: false,
        routing: {
          request: {
            qs: {
              only_active: '={{$value}}'
            }
          }
        },
        type: 'boolean'
      },
      {
        displayName: 'Language (hl)',
        name: 'hl',
        description: 'Parameter defines the language to use for the search',
        default: 'en',
        routing: {
          request: {
            qs: {
              hl: '={{$value}}',
            },
          },
        },
        type: 'options',
        options: LanguageOptions,
      },
      {
        displayName: 'Date (date)',
        name: 'date',
        description: 'Parameter defines the date of the results you want to retrieve. It defaults to the current day. The date format is yyyymmdd (e.g., 20251015).',
        default: '',
        routing: {
          request: {
            qs: {
              date: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Category (cat)',
        name: 'cat',
        description: 'Parameter defines the category of the results you want to retrieve. Parameter can only be used when frequency is set to realtime.',
        default: 'all',
        routing: {
          request: {
            qs: {
              cat: '={{$value}}'
            }
          }
        },
        type: 'options',
        options: [
          {
            name: 'All categories',
            value: 'all'
          },
          {
            name: 'Business',
            value: 'b'
          },
          {
            name: 'Entertainment',
            value: 'e'
          },
          {
            name: 'Health',
            value: 'm'
          },
          {
            name: 'Sci/Tech',
            value: 't'
          },
          {
            name: 'Sports',
            value: 's'
          },
          {
            name: 'Top stories',
            value: 'h'
          }
        ]
      },
      {
        displayName: 'Next Page Token (next_page_token)',
        name: 'next_page_token',
        description: 'Parameter defines the next page token, which is used for retrieving the next page of results. Parameter can only be used when frequency is set to realtime.',
        default: '',
        routing: {
          request: {
            qs: {
              next_page_token: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      ...serpApiFields,
    ]
  }
];
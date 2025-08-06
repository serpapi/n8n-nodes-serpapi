import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';
import { CountryOptions, LanguageOptions } from './GoogleOptions';

export const youtubeSearchFields: INodeProperties[] = [
  {
    displayName: 'Search Query (search_query)',
    name: 'search_query',
    description: 'Parameter defines the search query. You can use anything that you would use in a regular YouTube search.',
    default: 'Coffee',
    routing: {
      request: {
        qs: {
          search_query: '={{$value}}'
        }
      }
    },
    type: 'string',
    required: true,
    displayOptions: {
      show: {
        operation: ['youtube']
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
        operation: ['youtube']
      }
    },
    options: [
      {
        displayName: 'Country (gl)',
        name: 'gl',
        description: 'Parameter defines the country to use for the YouTube search',
        default: 'us',
        routing: {
          request: {
            qs: {
              gl: '={{$value}}',
            },
          },
        },
        type: 'options',
        options: CountryOptions,
      },
      {
        displayName: 'Language (hl)',
        name: 'hl',
        description: 'Parameter defines the language to use for the YouTube search',
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
        displayName: 'Filter (sp)',
        name: 'sp',
        description: 'Parameter can be used for pagination and filtering results. For pagination, use `next_page_token` in the `serpapi_pagination` object of the JSON response. For filters, visit the YouTube website, set filters you want and copy the `sp` value from the URL.',
        default: null,
        routing: {
          request: {
            qs: {
              sp: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      ...serpApiFields,
    ]
  }
];
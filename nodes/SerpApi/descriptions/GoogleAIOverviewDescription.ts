import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';

export const googleAIOverviewFields: INodeProperties[] = [
  {
    displayName: 'Search Query (page_token)',
    name: 'page_token',
    description: 'Parameter defines the token to fetch the AI Overview from. Requires an ai_overview.page_token from the AI Overview Results section of the Google Search API response. The page_token expires within 4 minutes of the search and must be used immediately.',
    default: '',
    routing: {
      request: {
        qs: {
          page_token: '={{$value}}'
        }
      }
    },
    type: 'string',
    required: true,
    displayOptions: {
      show: {
        operation: [
          'google_ai_overview'
        ]
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
        operation: [
          'google_ai_overview'
        ]
      }
    },
    options: [
      ...serpApiFields
    ]
  }
];

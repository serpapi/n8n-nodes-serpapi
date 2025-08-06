import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';
import { LanguageOptions } from './GoogleOptions';

export const googleFinanceFields: INodeProperties[] = [
  {
    displayName: 'Search Query (q)',
    name: 'q',
    description: 'Parameter defines the query you want to search. It can be a stock, index, mutual fund, currency or futures.',
    default: 'GOOGL:NASDAQ',
    routing: {
      request: {
        qs: {
          q: '={{$value}}'
        }
      }
    },
    type: 'string',
    required: true,
    displayOptions: {
      show: {
        operation: ['google_finance']
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
        operation: ['google_finance']
      }
    },
    options: [
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
        displayName: 'Time Range (window)',
        name: 'window',
        description: 'Parameter is used for setting time range for the graph.',
        default: '1D',
        routing: {
          request: {
            qs: {
              window: '={{$value}}'
            }
          }
        },
        type: 'options',
        options: [
          {
            name: '1 Day',
            value: '1D',
          },
          {
            name: '5 Days',
            value: '5D',
          },
          {
            name: '1 Month',
            value: '1M',
          },
          {
            name: '6 Months',
            value: '6m',
          },
          {
            name: 'Year to Date',
            value: 'YTD',
          },
          {
            name: '1 Year',
            value: '1Y',
          },
          {
            name: '5 Years',
            value: '5Y',
          },
          {
            name: 'Maximum',
            value: 'MAX',
          },
        ],
      },
      ...serpApiFields,
    ]
  }
];
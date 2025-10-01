import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';

export const googleImmersiveProductFields: INodeProperties[] = [
  {
    displayName: 'Page Token (page_token)',
    name: 'page_token',
    description: 'Parameter defines the token needed to show more product info in Google immersive popup. Can be found through the Google Search or Google Shopping APIs.',
    default: 'eyJlaSI6IjE0NXFaN0NlS3U3bjVOb1BtcmpTOFFvIiwicHJvZHVjdGlkIjoiIiwiY2F0YWxvZ2lkIjoiMTY5MTQ4Nzc2MjUyODA5Nzc4NjUiLCJoZWFkbGluZU9mZmVyRG9jaWQiOiIzMjM4MjI0ODQ0NjI0OTEyMTY5IiwiaW1hZ2VEb2NpZCI6IjQ3Njc0OTkxNTkwNjMyNzkxNCIsInJkcyI6IlBDXzMyNDU0NzY0MDA4MzM1NTE5NDh8UFJPRF9QQ18zMjQ1NDc2NDAwODMzNTUxOTQ4IiwicXVlcnkiOiIrQ29mZmVlIiwiZ3BjaWQiOiIzMjQ1NDc2NDAwODMzNTUxOTQ4IiwibWlkIjoiNTc2NDYyNjEyMjgwMTMwNDgxIiwicHZ0IjoiaGciLCJ1dWxlIjpudWxsfQ==',
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
          'google_immersive_product'
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
          'google_immersive_product'
        ]
      }
    },
    options: [
      ...serpApiFields
    ]
  }
];

import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';

export const googleAIModeFields: INodeProperties[] = [
  {
    'displayName': 'Search Query (q)',
    'name': 'q',
    'description': 'Parameter defines the query you want to search. You can use anything that you would use in a regular Google AI Mode search. Google AI Mode may support multiple languages (including English), though not all are available yet.',
    'default': 'What is coffee?',
    'routing': {
      'request': {
        'qs': {
          'q': '={{$value}}'
        }
      }
    },
    'type': 'string',
    'required': true,
    'displayOptions': {
      'show': {
        'operation': [
          'google_ai_mode'
        ]
      }
    }
  },
  {
    'displayName': 'Additional Fields',
    'name': 'additionalFields',
    'type': 'collection',
    'default': {},
    'placeholder': 'Add Field',
    'displayOptions': {
      'show': {
        'operation': [
          'google_ai_mode'
        ]
      }
    },
    'options': [
      {
        'displayName': 'Location (location)',
        'name': 'location',
        'description': 'Parameter defines from where you want the search to originate. See docs for supported locations: https://serpapi.com/locations-api.',
        'default': '',
        'routing': {
          'request': {
            'qs': {
              'location': '={{$value}}'
            }
          }
        },
        'type': 'string'
      },
      {
        'displayName': 'Encoded Location (uule)',
        'name': 'uule',
        'description': "Parameter is the Google encoded location you want to use for the search.uule and location parameters can't be used together.",
        'default': '',
        'routing': {
          'request': {
            'qs': {
              'uule': '={{$value}}'
            }
          }
        },
        'type': 'string'
      },
      {
        'displayName': 'Device (device)',
        'name': 'device',
        'description': 'Parameter defines the device to use to get the results. It can be set to desktop (default) to use a regular browser, tablet to use a tablet browser (currently using iPads), or mobile to use a mobile browser.',
        'default': 'desktop',
        'routing': {
          'request': {
            'qs': {
              'device': '={{$value}}'
            }
          }
        },
        'type': 'string'
      },
      ...serpApiFields,
    ]
  }
];

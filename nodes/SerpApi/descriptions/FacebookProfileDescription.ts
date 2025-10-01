import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';

export const facebookProfileFields: INodeProperties[] = [
  {
    displayName: 'Profile ID (profile_id)',
    name: 'profile_id',
    description: 'Parameter defines the Facebook profile ID. You can find it in the URL of the profile page. For example, in https://www.facebook.com/Meta, the profile ID is Meta. In https://facebook.com/profile.php?id=100080376596424, the profile ID is 100080376596424.',
    default: 'Meta',
    routing: {
      request: {
        qs: {
          profile_id: '={{$value}}'
        }
      }
    },
    type: 'string',
    required: true,
    displayOptions: {
      show: {
        operation: [
          'facebook_profile'
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
          'facebook_profile'
        ]
      }
    },
    options: [
      ...serpApiFields
    ]
  }
];

import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';
import { CountryOptions, LanguageOptions } from './GoogleOptions';

export const googlePlayProductFields: INodeProperties[] = [
  {
    displayName: 'Store (store)',
    name: 'store',
    description: 'Parameter defines the type of Google Play store.',
    default: 'apps',
    routing: {
      request: {
        qs: {
          store: '={{$value}}'
        }
      }
    },
    type: 'options',
    options: [
      {
        name: 'Apps',
        value: 'apps'
      },
      {
        name: 'Movies',
        value: 'movies'
      },
      {
        name: 'TV',
        value: 'tv'
      },
      {
        name: 'Books',
        value: 'books'
      },
      {
        name: 'Audiobooks',
        value: 'audiobooks'
      }
    ],
    required: true,
    displayOptions: {
      show: {
        operation: ['google_play_product']
      }
    }
  },
  {
    displayName: 'Product ID (product_id)',
    name: 'product_id',
    description: 'Parameter defines the ID of a product you want to get the results for.',
    default: '',
    routing: {
      request: {
        qs: {
          product_id: '={{$value}}'
        }
      }
    },
    type: 'string',
    required: true,
    displayOptions: {
      show: {
        operation: ['google_play_product']
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
        operation: ['google_play_product']
      }
    },
    options: [
      {
        displayName: 'Country (gl)',
        name: 'gl',
        description: 'Parameter defines the country to use for the Google search',
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
        displayName: 'Season ID (season_id)',
        name: 'season_id',
        description: 'Parameter defines the ID of a season you want to get the results for. It should be used only when store parameter is set to tv. e.g. store=tv.',
        default: '',
        routing: {
          request: {
            qs: {
              season_id: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Show All Reviews (all_reviews)',
        name: 'all_reviews',
        description: 'Parameter is used for retriving all reviews of a product. It can be set to true or false (default).',
        default: false,
        routing: {
          request: {
            qs: {
              all_reviews: '={{$value}}'
            }
          }
        },
        type: 'boolean'
      },
      {
        displayName: 'Filter By Platform (platform)',
        name: 'platform',
        description: 'Parameter is used for filtering reviews by platform. It should be used only when all_reviews parameter is set to true.',
        default: 'phone',
        routing: {
          request: {
            qs: {
              platform: '={{$value}}'
            }
          }
        },
        type: 'options',
        options: [
          {
            name: 'Phone',
            value: 'phone'
          },
          {
            name: 'Tablet',
            value: 'tablet'
          },
          {
            name: 'Watch',
            value: 'watch'
          },
          {
            name: 'Chromebook',
            value: 'chromebook'
          },
          {
            name: 'TV',
            value: 'tv'
          },
          {
            name: 'Car',
            value: 'car'
          }
        ]
      },
      {
        displayName: 'Filter By Rating (rating)',
        name: 'rating',
        description: 'Parameter is used for filtering reviews by rating. It should be used only when all_reviews parameter is set to true.',
        default: '',
        routing: {
          request: {
            qs: {
              rating: '={{$value}}'
            }
          }
        },
        type: 'options',
        options: [
          {
            name: '1-star',
            value: '1'
          },
          {
            name: '2-star',
            value: '2'
          },
          {
            name: '3-star',
            value: '3'
          },
          {
            name: '4-star',
            value: '4'
          },
          {
            name: '5-star',
            value: '5'
          }
        ]
      },
      {
        displayName: 'Sort By Relevance (sort_by)',
        name: 'sort_by',
        description: 'Parameter is used for sorting reviews by relevance. It should be used only when all_reviews parameter is set to true.',
        default: 1,
        routing: {
          request: {
            qs: {
              sort_by: '={{$value}}'
            }
          }
        },
        type: 'options',
        options: [
          {
            name: 'Most relevant',
            value: '1'
          },
          {
            name: 'Newest',
            value: '2'
          },
          {
            name: 'Rating',
            value: '3'
          }
        ]
      },
      {
        displayName: 'Number of Results (num)',
        name: 'num',
        description: 'Parameter defines the maximum number of reviews to return. (e.g., 40 (default) returns 40 reviews, 80 returns 80 reviews, and 100 returns 100 reviews). Maximum number of reviews you can return per search is 199.It should be used only when all_reviews parameter is set to true.',
        default: '',
        routing: {
          request: {
            qs: {
              num: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Next Page Token (next_page_token)',
        name: 'next_page_token',
        description: 'Parameter defines the next page token. It is used for retrieving the next page results. It should be used only when all_reviews parameter is set to true.',
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
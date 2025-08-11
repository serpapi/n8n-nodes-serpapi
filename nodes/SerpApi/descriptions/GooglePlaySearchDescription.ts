import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';
import { CountryOptions, LanguageOptions } from './GoogleOptions';

export const googlePlaySearchFields: INodeProperties[] = [
  {
    displayName: 'Search Query (q)',
    name: 'q',
    description: 'Parameter defines the query you want to search in Google Play Apps Store.',
    default: '',
    routing: {
      request: {
        qs: {
          q: '={{$value}}'
        }
      }
    },
    type: 'string',
    displayOptions: {
      show: {
        operation: [
          'google_play'
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
          'google_play'
        ]
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
        displayName: 'Apps Category (apps_category)',
        name: 'apps_category',
        description: 'Parameter defines the apps store category.',
        default: '',
        routing: {
          request: {
            qs: {
              apps_category: '={{$value}}'
            }
          }
        },
        type: 'options',
        options: [
          {
            name: 'Apps - Art & Design',
            value: 'ART_AND_DESIGN'
          },
          {
            name: 'Apps - Auto & Vehicles',
            value: 'AUTO_AND_VEHICLES'
          },
          {
            name: 'Apps - Beauty',
            value: 'BEAUTY'
          },
          {
            name: 'Apps - Books & Reference',
            value: 'BOOKS_AND_REFERENCE'
          },
          {
            name: 'Apps - Business',
            value: 'BUSINESS'
          },
          {
            name: 'Apps - Comics',
            value: 'COMICS'
          },
          {
            name: 'Apps - Communication',
            value: 'COMMUNICATION'
          },
          {
            name: 'Apps - Dating',
            value: 'DATING'
          },
          {
            name: 'Apps - Education',
            value: 'EDUCATION'
          },
          {
            name: 'Apps - Entertainment',
            value: 'ENTERTAINMENT'
          },
          {
            name: 'Apps - Events',
            value: 'EVENTS'
          },
          {
            name: 'Apps - Finance',
            value: 'FINANCE'
          },
          {
            name: 'Apps - Food & Drink',
            value: 'FOOD_AND_DRINK'
          },
          {
            name: 'Apps - Health & Fitness',
            value: 'HEALTH_AND_FITNESS'
          },
          {
            name: 'Apps - House & Home',
            value: 'HOUSE_AND_HOME'
          },
          {
            name: 'Apps - Libraries & Demo',
            value: 'LIBRARIES_AND_DEMO'
          },
          {
            name: 'Apps - Lifestyle',
            value: 'LIFESTYLE'
          },
          {
            name: 'Apps - Maps & Navigation',
            value: 'MAPS_AND_NAVIGATION'
          },
          {
            name: 'Apps - Medical',
            value: 'MEDICAL'
          },
          {
            name: 'Apps - Music & Audio',
            value: 'MUSIC_AND_AUDIO'
          },
          {
            name: 'Apps - News & Magazines',
            value: 'NEWS_AND_MAGAZINES'
          },
          {
            name: 'Apps - Parenting',
            value: 'PARENTING'
          },
          {
            name: 'Apps - Personalization',
            value: 'PERSONALIZATION'
          },
          {
            name: 'Apps - Photography',
            value: 'PHOTOGRAPHY'
          },
          {
            name: 'Apps - Productivity',
            value: 'PRODUCTIVITY'
          },
          {
            name: 'Apps - Shopping',
            value: 'SHOPPING'
          },
          {
            name: 'Apps - Social',
            value: 'SOCIAL'
          },
          {
            name: 'Apps - Sports',
            value: 'SPORTS'
          },
          {
            name: 'Apps - Tools',
            value: 'TOOLS'
          },
          {
            name: 'Apps - Travel & Local',
            value: 'TRAVEL_AND_LOCAL'
          },
          {
            name: 'Apps - Video Players & Editors',
            value: 'VIDEO_PLAYERS'
          },
          {
            name: 'Apps - Wear OS by Google',
            value: 'ANDROID_WEAR'
          },
          {
            name: 'Apps - Watch faces',
            value: 'WATCH_FACE'
          },
          {
            name: 'Apps - Weather',
            value: 'WEATHER'
          },
          {
            name: 'Kids',
            value: 'FAMILY'
          }
        ]
      },
      {
        displayName: 'Device (store_device)',
        name: 'store_device',
        description: 'Parameter defines the device for sorting results. This parameter cannot be used with apps_category or q parameters.',
        default: 'phone',
        routing: {
          request: {
            qs: {
              store_device: '={{$value}}'
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
            name: 'TV',
            value: 'tv'
          },
          {
            name: 'Chromebook',
            value: 'chromebook'
          },
          {
            name: 'Watch',
            value: 'watch'
          },
          {
            name: 'Car',
            value: 'car'
          }
        ]
      },
      {
        displayName: 'Age (age)',
        name: 'age',
        description: 'Parameter defines age subcategory.This should only be used when apps_category=FAMILY',
        default: '',
        routing: {
          request: {
            qs: {
              age: '={{$value}}'
            }
          }
        },
        type: 'options',
        options: [
          {
            name: 'Ages up to 5',
            value: 'AGE_RANGE1'
          },
          {
            name: 'Ages 6-8',
            value: 'AGE_RANGE2'
          },
          {
            name: 'Ages 9-12',
            value: 'AGE_RANGE3'
          }
        ]
      },
      {
        displayName: 'Next Page Token (next_page_token)',
        name: 'next_page_token',
        description: 'Parameter defines the next page token. It is used for retrieving the next page results. It shouldn\'t be used with the section_page_token, see_more_token, and chart parameters.',
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
      {
        displayName: 'Section Page Token (section_page_token)',
        name: 'section_page_token',
        description: 'Parameter defines the section page token used for retrieving the pagination results from individual sections. This parameter is a safer version of see_more_token, and is found in every row you can paginate into. It shouldn\'t be used with the next_page_token, see_more_token, and chart parameters',
        default: '',
        routing: {
          request: {
            qs: {
              section_page_token: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'Chart (chart)',
        name: 'chart',
        description: 'Parameter is used for showing top charts. Each store contains different charts which require different values for retrieving results. To get a specific chart you can use our Google Play Apps Store API JSON output: chart_options[index].value (e.g. chart=topselling_free). It shouldn\'t be used with the section_page_token, see_more_token, and next_page_token parameters',
        default: '',
        routing: {
          request: {
            qs: {
              chart: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      {
        displayName: 'See more token (see_more_token)',
        name: 'see_more_token',
        description: 'Parameter defines the see more token used for retrieving the pagination results from individual sections It is usually found in next page results. It shouldn\'t be used with the section_page_token, next_page_token, and chart, parameters',
        default: '',
        routing: {
          request: {
            qs: {
              see_more_token: '={{$value}}'
            }
          }
        },
        type: 'string'
      },
      ...serpApiFields,
    ]
  }
];
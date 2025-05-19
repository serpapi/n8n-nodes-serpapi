import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';
import { CountryOptions, DomainOptions, LanguageOptions } from './GoogleOptions';

export const googleProductFields: INodeProperties[] = [
	{
		displayName: 'Product ID (product_id)',
		name: 'product_id',
		description:
			'Parameter defines the product to get results for. Normally found from shopping results for supported products (e.g., https://www.google.com/shopping/product/{product_id}).',
		default: '',
		routing: {
			request: {
				qs: {
					product_id: '={{$value}}',
				},
			},
		},
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['google_product'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				operation: ['google_product'],
			},
		},
		options: [
			{
				displayName: 'Location (location)',
				name: 'location',
				description:
					'Parameter defines from where you want the search to originate. See docs for supported locations: https://serpapi.com/locations-api.',
				default: '',
				routing: {
					request: {
						qs: {
							location: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Encoded Location (uule)',
				name: 'uule',
				description:
					"Parameter is the Google encoded location you want to use for the search. uule and location parameters can't be used together.",
				default: '',
				routing: {
					request: {
						qs: {
							uule: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Domain (google_domain)',
				name: 'google_domain',
				description: 'Parameter defines the Google domain to use',
				default: 'google.com',
				routing: {
					request: {
						qs: {
							google_domain: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: DomainOptions,
			},
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
				displayName: 'Result Offset (start)',
				name: 'start',
				description:
					'Parameter defines the result offset when offers is enabled. It skips the given number of results.',
				default: '',
				routing: {
					request: {
						qs: {
							start: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Start From Page (page)',
				name: 'page',
				description:
					'Parameter defines the page number for Google Online Sellers. There are 10 results per page. This parameter is equivalent to start (offset) = page * 10. This parameter works only for Online Sellers. This parameter is deprecated for use with Reviews.',
				default: '',
				routing: {
					request: {
						qs: {
							page: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Offers Results (offers)',
				name: 'offers',
				description:
					'Whether to fetch offers results. The offers parameter cannot be used with offer_id parameter.',
				default: false,
				routing: {
					request: {
						qs: {
							offers: '={{$value}}',
						},
					},
				},
				type: 'boolean',
			},
			{
				displayName: 'Fetch Specs Results (specs)',
				name: 'specs',
				description:
					'Whether to fetch specs results. The specs parameter cannot be used with offer_id parameter.',
				default: false,
				routing: {
					request: {
						qs: {
							specs: '={{$value}}',
						},
					},
				},
				type: 'boolean',
			},
			{
				displayName: 'Fetch Reviews Results (reviews)',
				name: 'reviews',
				description:
					'Whether to fetch reviews results. The reviews parameter cannot be used with offer_id parameter.',
				default: false,
				routing: {
					request: {
						qs: {
							reviews: '={{$value}}',
						},
					},
				},
				type: 'boolean',
			},
			{
				displayName: 'Advanced Filter Parameter (filter)',
				name: 'filter',
				description:
					'Parameter defines filters, sorting, and pagination for reviews and offers results. See documentation for more information: https://serpapi.com/google-product-api#api-parameters-advanced-filters-filter.',
				default: '',
				routing: {
					request: {
						qs: {
							filter: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: 'Offer ID (offer_id)',
				name: 'offer_id',
				description:
					"Parameter defines ID used to fetch multiple offers from an online seller, and can be found inside sellers_results.online_sellers. The offer_id parameter can't be used with offers, specs and reviews parameters.",
				default: '',
				routing: {
					request: {
						qs: {
							offer_id: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			...serpApiFields,
		],
	},
];

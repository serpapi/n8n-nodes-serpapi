![Banner image](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

# n8n-nodes-serpapi

This repo contains SerpApi's community node for n8n.

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Credentials

You must have a SerpApi API key to use this node. You can register for a free account to get an API key here:

https://serpapi.com/users/sign_up

Once registered, you can find your API key here:

https://serpapi.com/manage-api-key

Then you'll need to create a credential in n8n for SerpApi.

![Add Credentials](images/add-credentials.png)

## Usage

Add SerpApi to a workflow.

![Add SerpApi to Workflow](images/workflow.png)

Configure a basic query and hit "Test step" to try a search.

![Test a Google Search through SerpApi](images/test-google-search.png)

## API Resources / Search Engines

This node currently only supports the most popular SerpApi APIs. If there's an API missing that you would like to use, please let us know at contact@serpapi.com

In the meantime, you can also use the [generic HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) to construct your search.

## Related Resources

SerpApi's complete API documentation is available here:

https://serpapi.com/search-api

You can also find n8n related tutorials on our blog here:

https://serpapi.com/blog/tag/n8n/

## License

[MIT](https://github.com/serpapi/n8n-nodes-serpapi/blob/master/LICENSE.md)

# airtable-nuggets-frontend

Easily display [airtable](https://airtable.com) data using Vue.js with access to all of the airtable features.

# Note on library status

We are currently transitioning this gem to be supported by
Airtable. We will maintain it moving forward, but until we fully
support it, it will stay in the status of "community libraries". At
that time we will remove this notice and add a "ruby" section to the
API docs.

## Usage

### Creating a Client

First, be sure to register for an [airtable](https://airtable.com) account, create a data worksheet and [get an api key](https://airtable.com/account). Now, setup your Airtable client:

```<script>...
# Pass in api key to client
var app_id = "########";
var app_key = "########";
```
Your API key carries the same privileges as your user account, so be sure to keep it secret!

### Accessing a Table

Now we can access any table in our Airsheet account by referencing the [API docs](https://airtable.com/api):

```Javascript
# Pass in the app key and table name
axios.get("https://api.airtable.com/v0/"+app_id+"/"Table Name"
```

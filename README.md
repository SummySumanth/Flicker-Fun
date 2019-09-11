
# Flicker-Fun
An simple version of the Flickr website using the Flickr API.

## View project directly:

[click here](https://google.com) - (Ctrl + Click || Cmd + Click) _**Refreshing page would not work here**_ as they are just static files (without served from a server) and because of frontend routing, it wont be able to resolve files and you would get a 404 on refreshing and that is expected.

## Configurations 
Following are the configurations that can be made to this project, all the configurations exist in route directory configs.js (./configs.js) 
1.  flickerApiKey - Define your own flicker api key here _**[params - api key in string]**_ 
2.  searchNetworkCallDelay - Define the delay to be present before making network call for search auto-complete suggestions _**[params - Milliseconds key in number]**_ 

## NPM Scripts

#### To install the required npm packages ( Required only once )
     npm i
     
_or_

     yarn
    

#### To Run
     npm run start 

#### To build
     npm run build
     
## Few Pointers about this project 
1. **Lazy loading of Images** have been implemented.
2. **Code splitting** for better optimization of static files(script files) delivery and make initial load quicker.
3. **Throttling of network activities** to reduce unhandled number of calls on search query. 


## UI(s) of this project

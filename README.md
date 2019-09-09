# Flicker-Fun
An simple version of the Flickr website using the Flickr API.

## View project directly:

[click here](https://google.com) - _**Refreshing page would not work here**_ as they are just static files (without served from a server) and because of frontend routing, it wont be able to resolve files and you would get a 404 on refreshing and that is expected.

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

/*
    SEARCH SUGGESTIONS WORDS API
    ----------------------------
    Schema      https://api.datamuse.com/sug?s=${searchParam}&max=${max}

    [read more] https://www.datamuse.com/api/

    PHOTO URL CONSTRUCTOR
    ---------------------
    mock        https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_{size}.jpg

    example     https://farm1.staticflickr.com/2/1418878_1e92283336_m.jpg

    legend      farm-id: 1
                server-id: 2
                photo-id: 1418878
                secret: 1e92283336
                size: m

    [read more] https://www.flickr.com/services/api/misc.urls.html
*/


export default {
  getSearchForSuggestions: (searchParam, max = 100) => (`https://api.datamuse.com/sug?s=${searchParam}&max=${max}`),
  getsearchForGroup: (flickerApiKey, searchParam) => (`https://www.flickr.com/services/rest/?method=flickr.groups.search&api_key=${flickerApiKey}&text=${searchParam}&per_page=50&format=json&nojsoncallback=1`),
  getBrowseGroupPhotosUrl : (flickerApiKey, groupId, perPage, pageNum) => (`https://www.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=${flickerApiKey}&group_id=${groupId}&per_page${perPage}=&page=${pageNum}&format=json&nojsoncallback=1`),
  getPhotoUrl: (farmId, serverId, photoId, secret, size = 'm') => (`https://farm${farmId}.staticflickr.com/${serverId}/${photoId}_${secret}_${size}.jpg`),
  getBuddyIconUrl: (groupId) => (`https://live.staticflickr.com/60/buddyicons/${groupId}.jpg`),
}
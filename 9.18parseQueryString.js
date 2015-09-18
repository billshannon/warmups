function parseQueryString(string) {
    var result = {};
    var target = string.split('?')[1].split('=').join(',').split('&').join(',').split(',');
    for (var i = 0; i < target.length; i++) {
        if (i % 2 === 0) {
            result[target[i]] = target[i+1];
        }
    }
    return result;
}

console.log(parseQueryString("http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA"));
console.log(parseQueryString("http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week"))
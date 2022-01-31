/*
import fetch from 'node-fetch';

const url = new URL("https://api.storyblok.com/v2/cdn/stories/en/en");
const params = {
    "resolve_relations": "all-team.members,featured-team.members,all-insights.blog_posts,featured-insights.blog_posts,blog-post.authors",
    "resolve_links": "url",
    "cv": "1643281682",
    "version": "published",
    "token": "CtkC3iIZZh343vP2aOqZNwtt"
};
Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

for (let i = 0; i < 100; i++) {
    try {
        await fetch(url);
    } catch (error) {
        console.log(error);
    }
}
*/

import axios from 'axios';

axios.defaults.baseURL = 'https://api.storyblok.com/v2';

for (let i = 0; i < 100; i++) {
    axios.get('/cdn/stories/en/en', {
        params: {
            "resolve_relations": "all-team.members,featured-team.members,all-insights.blog_posts,featured-insights.blog_posts,blog-post.authors",
            "resolve_links": "url",
            "cv": "1643281682",
            "version": "published",
            "token": "CtkC3iIZZh343vP2aOqZNwtt"
        }
    })
        .then(function (response) {
            // handle success
            console.log(response.status + " " + response.statusText);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}
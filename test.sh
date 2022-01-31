#!/bin/bash
for i in {1..100}
do
  curl  -s --show-error -o /dev/null -w "%{http_code}" --location --request GET 'https://api.storyblok.com/v2/cdn/stories/fi/fi?resolve_relations=all-team.members,featured-team.members,all-insights.blog_posts,featured-insights.blog_posts,blog-post.authors&resolve_links=url&cv=1643281682&version=published&token=CtkC3iIZZh343vP2aOqZNwtt'
  echo ""
done

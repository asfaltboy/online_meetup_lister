# export your cookie and csrf token to MEETUP_COOKIE and CSRF_TOKEN env var respectively

for i in (seq 0 6); curl -H "cookie: $MEETUP_COOKIE" -H "csrf-token: $CSRF_TOKEN" "https://api.meetup.com/find/groups?&sign=true&photo-host=public&topic_id=1064&radius=global&order=distance&page=500&offset=$i" > "input_$i.json"; end

jq -s '.=.|add' input*.json > result.json

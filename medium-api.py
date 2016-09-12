import requests, json 
import pprint 

def get_posts_from_url(url, params):
	r = requests.get(url, params=params)

	index = r.text.index(';') + 5
	data = json.loads(r.text[index:])
	# pp = pprint.PrettyPrinter()
	payload = data["payload"]
	posts = payload["posts"]
	# pp.pprint(posts)
	parse_posts_into_dict(posts)


def parse_posts_into_dict(posts):
	posts_dict = {}
	for post in posts:
		posts_dict[post["uniqueSlug"]] = post["virtuals"]


params = {'format': 'json'}
url = "https://medium.com/react-weekly/latest"
get_posts_from_url(url, params)
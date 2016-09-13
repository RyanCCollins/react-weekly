import requests
import json
import os.path

def print_json(jsonData):
	complete_file = os.path.join('./server/schema', 'posts.json')
	with open(complete_file, 'w') as outfile:
		json.dump(jsonData, outfile)

def get_posts_from_url(url, params):
	r = requests.get(url, params=params)
	index = r.text.index(';') + 5
	data = json.loads(r.text[index:])
	posts = data["payload"]["posts"]
	return parse_posts_into_dict(posts)


def parse_posts_into_dict(posts):
	posts_list = []
	for post in posts:
		posts_dict = {}
		snippet = post["virtuals"]["snippet"]
		emailSnippet = post["virtuals"]["emailSnippet"]
		posts_dict["id"] = post["id"]
		posts_dict["title"] = post["title"]
		posts_dict["uniqueSlug"] = post["uniqueSlug"]
		posts_dict["snippet"] = snippet + emailSnippet
		posts_dict["recommendations"] = post["virtuals"]["usersBySocialRecommends"]
		posts_dict["image"] = post["virtuals"]["previewImage"]["imageId"]
		posts_dict["tags"] = post["virtuals"]["tags"]
		posts_list.append(posts_dict)
	return_dict = {}
	return_dict["posts"] = posts_list
	return return_dict

def main():
	params = {'format': 'json'}
	url = "https://medium.com/react-weekly/latest"
	posts = get_posts_from_url(url, params)
	print_json(posts)

if __name__ == '__main__':
	main()

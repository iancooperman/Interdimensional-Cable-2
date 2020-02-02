from praw import Reddit
import re
import json


class Crawler:
    def __init__(self, subreddit_name: str, client_id: str, client_secret: str, user_agent: str):
        reddit = Reddit(client_id=client_id, client_secret=client_secret, user_agent=user_agent)
        self._subreddit = reddit.subreddit(subreddit_name)


    def fetch_urls(self) -> list:
        video_urls = []
        for submission in self._subreddit.hot(limit=100):
            url = submission.url
            if re.match(r"https:\/\/www\.youtube\.com\/watch", url):
                video_urls.append(url)

        return video_urls

if __name__ == '__main__':
    file = open("reddit.json", "r")
    info = json.load(file)
    file.close()
    crawler = Crawler("InterdimensionalCable", info["id"], info["secret"], info["agent"])
    print(crawler.fetch_urls())

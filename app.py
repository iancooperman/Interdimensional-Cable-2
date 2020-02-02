from flask import Flask, render_template
from crawler import Crawler
import json
import re

app = Flask(__name__)

@app.route('/')
def index():
    reddit_info_file = open("reddit.json", "r")
    reddit_info = json.load(reddit_info_file)
    reddit_info_file.close()

    sub_crawler = Crawler("InterdimensionalCable", reddit_info["id"], reddit_info["secret"], reddit_info["agent"])
    video_urls = sub_crawler.fetch_urls()

    id_pattern = re.compile(r"^https:\/\/www\.youtube\.com\/watch\?v=(\X+)$")
    video_ids = []
    for url in video_urls:
        id = id_pattern.search(url).groups()[0]
        print(id)
        video_ids.append(id)

    return render_template("index.html", video_ids=video_ids)


if __name__ == '__main__':
    app.run()

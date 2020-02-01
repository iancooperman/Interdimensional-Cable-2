from flask import Flask, render_template
from crawler import Crawler
import json

app = Flask(__name__)

@app.route('/')
def index():
    reddit_info_file = open("reddit.json", "r")
    reddit_info = json.load(reddit_info_file)
    reddit_info_file.close()

    sub_crawler = Crawler("InterdimensionalCable", reddit_info["id"], reddit_info["secret"], reddit_info["agent"])
    video_urls = sub_crawler.fetch_urls()

    return render_template("index.html", urls=video_urls)


if __name__ == '__main__':
    app.run()

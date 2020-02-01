from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
    return '<strong>Hello World!</strong>'


if __name__ == '__main__':
    app.run()

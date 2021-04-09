from flask import Flask, request, jsonify
import os
import json
# from .scripts.file_name import function_name

app = Flask(__name__, static_url_path = '/static')

@app.route('/')
def hello():
    return "Hello World"
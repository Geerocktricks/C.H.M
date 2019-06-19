# Crop Health Monitor (C.H.M)

A crop health monitor app that helps large scale farmers monitor their crops health using satellite images,and insurance farms get real time data of the farms being insured by them.

## Getting Started

The instructions below will help you get started
The link to the repo is **[chm](https://github.com/Geerocktricks/C.H.M.git)**

### Prerequisites

All relevant requirements are listed in requirements.txt
The python version is 3.7.3 also mentioned in runtime.txt

### Features

    User authentication... for both insurance company and farmer
    register a farm

    [future plans]
    add A.I to identify specific pests and diseases
    Use data visualisation to track migration of pests and diseases(patterns)
    Use sms for push notifications if user is offline

### Installing

A step by step series of examples that tell you how to get a development env running

- fork repo
- git clone repo
- cd C.H.M
- create virtual
- pip install -r requirements.txt (to install dependencies)
- create database & register it to chmProject/settings.py
- create .env to store passwords
- create .gitignore to ignore irrelevant files
- python3 manage.py migrate
- python3 manage.py makemigrations <app-name>
- python3 manage.py migrate
- python3 manage.py runserver

## Running the tests

The command below will run all the tests

```
$ python3 manage.py test
```

## Deployment

- notes on how to deploy will be added later

## Built With

python 3.7.3
All other relevant dependencies are listed in requirements.txt file

## Authors

- **Daniel Mugambi** - _Initial work_ - **[madskillz254](https://github.com/madskillz254)**
- **Ryan ** - _Initial work_ - **[Ryan](#)**
- **Bill ** - _Initial work_ - **[Bill](#)**
- **Gerald ** - _Initial work_ - **[Gerald](https://github.com/Geerocktricks)**

## Copyright and License

MIT License

Copyright (c) [2019][c.h.m]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

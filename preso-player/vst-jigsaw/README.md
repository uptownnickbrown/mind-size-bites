jigsaw-prototype-reader
=======================

### Minimum Viable Jigsaw (MVJ)

#### To run locally:

* in terminal run: cd /.../.../.../jigsaw-prototype-reader
* then: python -m SimpleHTTPServer
* Load http://127.0.0.1:8000/ in browser
* (8000 is default port and can be overridden in simpleserver command)

#### To view locally running MVJ from external device (eg. iPad)

* in terminal run: ifconfig
* look for entry in 'en0:' section: 'inet YOUR.IP.ADDRESS'
* verify you can connect with terminal command: nc -v YOUR.IP.ADDRESS 8000
* output should read "Connection to YOUR.IP.ADDRESS port 8000 [tcp/irdmi] succeeded!"
* load http://YOUR.IP.ADDRESS:8000/ on your iPad

#### Jigsaw credentialing

* MVJ points to the development environment for licensing
* To log out of a jigsaw session (or Online-dev session): http://jigsaw-dev.vitalsource.com/logout
* To login, log into MVJ directly or visit: http://jigsaw-dev.vitalsource.com/login
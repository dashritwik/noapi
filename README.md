
# NOAPI Tutorial

Noapi is a light API framework for Node.js. It can easily define APIs and test cases, as well as easily read inputs/outputs and test them. Noapi takes care of the required web services, api services, routes, test cases, and etcetera to help you focus on functional code, improve your efficiency, and save your time.


## Audience

This tutorial has been created for anyone who has basic knowledge of Nodejs and how client-server works after completing this tutorial you can define APIs and test cases, as well as easily read inputs/outputs and test them.

In this tutorial, you will learn~

*  Installing noapi and using noapi  we will define a simple API route 
*  Test APIs with noapi
*  Create custom web Server
*  Router to handle Request


## Install

Noapi gets installed via the node package manager, this can be done by executing the following line in the command line but before installing noapi we need  package.json file for this run the following command:
```
npm init
```

and answer the questions in the command line questionnaire:
![](https://github.com/dashritwik/noapi/blob/master/doc/images/demo2.png?raw=true)

Then install noapi:
```
npm install noapi
```

The above command requests the Node package manager to download the required noapi modules and install them accordingly.


## Hello World

### Create
Let's use our newly installed noapi framework and create a simple "Hello World" application.

**Step 1:**  Create an app.js file where we will define our server, open it on your favorite text editor in this tutorial I’m using Vscode.
</br>
![](https://github.com/dashritwik/noapi/blob/master/doc/images/demo3aa.png?raw=true)

**Step 2:** Create an API folder and inside this folder create a file called define.js in this file we will define our API routes.</br>
![](https://github.com/dashritwik/noapi/blob/master/doc/images/demo5a.png?raw=true)

**Step 3:**  Now we need to start our server for that run this following command on your command line `node .` (server will automatically run on default port 3000).</br>
![](https://github.com/dashritwik/noapi/blob/master/doc/images/demo6.png?raw=true)

**Step 4:** Open your favorite browser  and enter this URL and enter [http://localhost:3000/hello]
</br>
(http://localhost:3000/hello).
![](https://github.com/dashritwik/noapi/blob/master/doc/images/demo7.png?raw=true)

**Congratulation** We successfully completed our first step stage.


### Test

To test our API we have to install some dependencies which will help us to test our API faster.

We need following these dependencies: `chai, mocha, supertest`

**Step 1:** Install dependencies, run this command `npm install chai mocha supertest -D` (D flag means these packages are dev-dependencies).</br>

**Step 2:** Create a folder called biz in this folder we will write our business logic and inside this folder create a file called hello.js.</br>
![](https://github.com/dashritwik/noapi/blob/master/doc/images/demo9a.png?raw=true)

**Step 3:** We need another folder to test our API which is called test and inside this folder create file called index.js.</br>
![](https://github.com/dashritwik/noapi/blob/master/doc/images/demo10a.png?raw=true)

**Step 4:** Now open package.json file and replace the `scripts` test.</br>
![](https://github.com/dashritwik/noapi/blob/master/doc/images/demo11a.png?raw=true)

**Step 5:** Final step to test our API open your terminal from your project root folder and enter **npm test **(stop if there is any server running on port 3000).</br>
![](https://github.com/dashritwik/noapi/blob/master/doc/images/demo13.png?raw=true)



## Create custom web Server

So far  we have been using default server settings now we are going to use noapi custom server settings.

**Step 1:**  Open app.js file:</br>
![](https://github.com/dashritwik/noapi/blob/master/doc/images/demo13a.png?raw=true)

Here configured basic settings of noapi.</br>

**Step 2:** Let’s start the server again `node app.js`  (also you could use `node .`).</br>
![](https://github.com/dashritwik/noapi/blob/master/doc/images/demo14.png?raw=true)

We successfully configured noapi.

##  Router to handle Request

Here we are going to see how to could handle client request

**Step 1:** To handle the request we need to define a route, open your define.js:</br>
![](https://github.com/dashritwik/noapi/blob/master/doc/images/demo16a.png?raw=true)

**Step 2:** Open the biz folder and create a called about.js:</br>
![](https://github.com/dashritwik/noapi/blob/master/doc/images/demo15a.png?raw=true)

**Step 3:** Start the server again `node app.js`:</br>
![](https://github.com/dashritwik/noapi/blob/master/doc/images/demo6.png?raw=true)

**Step 4:** Open browser and hit http://localhost:3000/about URL:</br>
![](https://github.com/dashritwik/noapi/blob/master/doc/images/demo17.png?raw=true)


## Conclusion

What we have learned from this  tutorial:

1: how to install noapi and setup</br>
2: how easily we could define our API </br>
3: how we could test our API without writing tonnes of line code</br>
4: how we could change the default server setting </br>
5: how we could write our own custom APIs.</br>

Good luck!

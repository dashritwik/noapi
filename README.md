
# NOAPI Tutorial

Noapi is a light API framework for Node.js. It can easily define APIs and test cases, as well as easily read inputs/outputs and test them. Noapi takes care of the required web services, api services, routes, test cases, and etcetera to help you focus on functional code, improve your efficiency, and save your time.


# Audience

This tutorial has been created for anyone who has basic knowledge of Nodejs and Expressjs and how client-server works after completing this tutorial you can define APIs and test cases, as well as easily read inputs/outputs and test them

In this tutorial, you will learn-



*   Installing noapi and using noapi  we will define a simple API route 
*   Test APIs with noapi
*   Create custom Express Server
*    Router to handle Request

    **Installing and using noapi**


    Noapi gets installed via the node package manager, this can be done by executing the following line in the command line but before installing noapi we need  package.json file for this run the following command:


    ** npm init**


    ** **and answer the questions in the command line questionnaire


    

<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/NOAPI-Tutorial0.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/NOAPI-Tutorial0.png "image_tooltip")



    **npm install noapi **


    The above command requests the Node package manager to download the required noapi modules and install them accordingly**.**


    Let's use our newly installed noapi framework and create a simple "Hello World" application


      **Step 1:** create app.js file where we will define our server  and open it on your favorite text editor in this tutorial I’m using Vscode


    

<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/NOAPI-Tutorial1.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/NOAPI-Tutorial1.png "image_tooltip")



    **Step 2: **Create an API folder and inside this folder create a file called define.js in this file we will define our API routes


    

<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/NOAPI-Tutorial2.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/NOAPI-Tutorial2.png "image_tooltip")



    **Step 3**:  now we need to start our server for that run this following command on your command line** node . **(server will automatically run on default port 3000)


    

<p id="gdcalert4" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/NOAPI-Tutorial3.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/NOAPI-Tutorial3.png "image_tooltip")



    **Step 4:** Open your favorite browser  and enter this URL and enter [http://localhost:3000/hello](http://localhost:3000/hello)


    

<p id="gdcalert5" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/NOAPI-Tutorial4.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert6">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/NOAPI-Tutorial4.png "image_tooltip")



    **Congratulation **we successfully completed our first step stage 


**Test API with noapi**


    To test our API  we have to install  some dependencies which will help us to test our API faster


    We need following these dependencies 1:chai,2:moacha,3:supertest


    **Step 1**: Install dependencies, run this command **npm install chai mocha supertest -D**(D flag means these packages are dev-dependencies)


    **Step 2: **Create a folder called biz in this folder we will write our business logic and inside this folder create a file called hello.js


    

<p id="gdcalert6" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/NOAPI-Tutorial5.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert7">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/NOAPI-Tutorial5.png "image_tooltip")



    **Step 3**:we need another folder to test our API which is called test and inside this folder create file called index.js


    

<p id="gdcalert7" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/NOAPI-Tutorial6.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert8">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/NOAPI-Tutorial6.png "image_tooltip")



    **Step 4**: now open package.json file and replace the `scripts`


     test 


    

<p id="gdcalert8" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/NOAPI-Tutorial7.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert9">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/NOAPI-Tutorial7.png "image_tooltip")



    **Step 5**: final step to test our API open your terminal from your project root folder and enter **npm test **(stop if there is any server running on port 3000)


    

<p id="gdcalert9" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/NOAPI-Tutorial8.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert10">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/NOAPI-Tutorial8.png "image_tooltip")



## **Create custom noapi Server**

So far  we have been using default server settings now we are going to use noapi custom server settings

**Step 1**:  open app.js file 



<p id="gdcalert10" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/NOAPI-Tutorial9.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert11">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/NOAPI-Tutorial9.png "image_tooltip")


Here configured basic settings of noapi

**Step 2**:  let’s start the server again **node app.js **(also you could so **node .**)



<p id="gdcalert11" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/NOAPI-Tutorial10.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert12">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/NOAPI-Tutorial10.png "image_tooltip")


We successfully configured noapi


## ** Router to handle Request**

Here we are going to see how to could handle client request

 **Step 1:** to handle the request we need to define a route, open your define.js



<p id="gdcalert12" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/NOAPI-Tutorial11.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert13">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/NOAPI-Tutorial11.png "image_tooltip")


**Step 2**:open the biz folder and create a called about.js



<p id="gdcalert13" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/NOAPI-Tutorial12.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert14">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/NOAPI-Tutorial12.png "image_tooltip")


**Step 3: **Start the server again **node app.js**



<p id="gdcalert14" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/NOAPI-Tutorial13.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert15">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/NOAPI-Tutorial13.png "image_tooltip")


**Step 3: **open browser and hit http://localhost:3000/about URL



<p id="gdcalert15" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/NOAPI-Tutorial14.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert16">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/NOAPI-Tutorial14.png "image_tooltip")



    What we have learned from this  tutorial


     1: how to install noapi and setup


    2: how easily we could define our API 


    3: how we could test our API without writing tonnes of line code


    4: how we could change the default server setting 


    5: how we could write our own custom express routes.

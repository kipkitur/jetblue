# jetblue
A series of protractor tests assert page title and schedule a flight on the jet blue page.

Pre-requisites: 
I am using Windows 10 enterprise on my machine.

Click [here](https://nodejs.org/en/download/) to install Node.js  

Click [here](https://www.oracle.com/java/technologies/javase-downloads.html) to install JDK (Java Development Kit) 

Once Node.js and JDK is installed, check the version on command line by typing **java -v** and **node -v**.

How to install and run: 

I'm using Visual Studio Code as my main IDE. Download [here](https://code.visualstudio.com/download) 

In your Command Prompt (Click on Windows Start button at the bottom left of the screen and type in cmd and press Enter). Command prompt will open. Type in **npm install -g protractor** and press Enter, to install protractor. 

In Command Prompt type in **webdriver-manager update** and press Enter In Command Prompt type in **webdriver-manager start** and press Enter to start Selenium Server

Make sure you don’t terminate the session as it will close selenium server. But if you need to, just type **ctrl+c** and type ‘**y**’ to terminate the batch job. To launch tests type in protractor conf.js in your Visual Studio Code terminal and press Enter.

Disclaimer: My test is failing because I am trying to figure out how to get the correct elements for departure and arrival date.The class is constantly changing. I will fix it soon.

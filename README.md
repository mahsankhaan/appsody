# Do local development, containerize and migrate to Docker Hub using Appsody


In this tutorial, I show you how to use a new open source project, Appsody, to create an application locally and then build and deploy that application to a Docker Hub so you can use it on any cloud or platform that supports Docker images. After completing this tutorial, you will see how Appsody enables you to containerize a Node.js Express application without having to be an expert in container technology. 



## Prerequisites

To complete the steps in this tutorial, you need to:
1. [Install Docker](https://docs.docker.com/install/) on your local machine.
2. Install VS code [Visual Studio Code](https://code.visualstudio.com/) for local development.

## Steps
1.	[Clone the application](#1-clone-the-application)
2.	[Open the application in Visual Code](#2-open-the-application-in-visual-code)
3.	[Install Appsody on your local machine](#3-install-appsody)
4. [Initialize Appsody in your project]((#4-initialize-appsody-in-your-project))
5.	[Change the application on your local machine](#5-change-the-application-on-your-local-machine)
6.	[Build and deploy the application to Docker Hub](#6-build-and-deploy-the-application-to-Docker-Hub)





# 1-clone-the-application

1.	I'll show you the steps in this tutorial using an application in this  [GitHub repo](https://github.com/mahsankhaan/appsody.git)
2.	Open your terminal and change your directory by using command **cd downloads** .( Or any other directory in which you want to clone the project)
3.	Run command **git clone https://github.com/mahsankhaan/appsody.git**   

![GitHub Logo](images/s1.png)



# 2-open-the-application-in-visual-code

1. In this step we assume you have ready installed [Visual Studio Code](https://code.visualstudio.com/) ,if not please do that.
2.	Once Visual Studio Code is installed , open the application that we cloned. 

![GitHub Logo](images/s2.png)

# 3-install-appsody

Kindly note. Below steps are for **macOS** , if you are on different OS please visit [here](https://appsody.dev/docs/getting-started/installation) for more details.

1. Open your terminal and follow bellow steps:

2.	If you don’t have **Homebrew** installed on your system , install it by running this command:
**"/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"**

3.	If you have Homebrew then install it by running : 
**brew install appsody/appsody/appsody**

4.	To check if Appsody is installed successfully use command **appsody list** in the terminal and you must be able to see the available templates.


# 4-initialize-appsody-in-your-project

Before initializing appsody , there are few concepts that needs to be understand: 
1. **Stack :**  Appsody uses a already made runtimes and frameworks , such as Java with Eclipse and Node.js with Express.
2. **Template :**  Provide a starting point for application development  and you can customize project templates and share them across teams.
3. **Repo:** They are categorized as stable(Tested and support all appsody command), incubator(Actively being worked on) or experimental( Experimental stacks are not being actively worked on) depending on the  content of the stack.

for more  details check [here](https://appsody.dev/docs/stacks/stacks-overview/)

**Steps to initialize appsody:**
1.	Open your Visual Studio Code , and use ctrl + shift + `to access CLI from your VS code.
2.	From the CLI, enter **appsody list** to view all the available Appsody stacks.
3.	Review the list of stacks and find one that closely resembles your existing project. 
4. The sample application in this tutorial is a **Node.js Expres app**, so we select that.


![GitHub Logo](images/s4.png)

5.	Run  **appsody init incubator/nodejs-express none** command to initialize template.
   
**NOTE**
We use **"none”** in above command because we are initializing appsody in existing project , if you want to initialize from start then use  **appsody init incubator/nodejs-express simple**  will create node.js application template with appsody.

6. Once the template is successfully initialized, you should see an **‘.appsody-config.yml’** file in the left navigation of your Visual Code editor.

![GitHub Logo](images/s5.png)

# 5-change-the-application-on-your-local-machine

When you initialize a source code project with Appsody, you get a local Appsody development container. Use the **‘appsody run’** command to start the development container in ‘run’ mode in the foreground. Appsody watches your local project directory for file changes and updates the application to reflect code changes as you develop.

1.	Open your web browser and put URL **localhost:3000**
2.	3000 is the default port to run node.js application
3.	Application is up and running as a container.

![GitHub Logo](images/s6.png)


Make some changes to your code and check for updates: 

1.	In VS Code go to **views -> login.ejs** (this is login front-end page)
2.	There is a label for **“username"** in lower case , make it upper case **“USERNAME”**
3.	Save the updated file **ctrl+s** 
4.	Again visit the URL **localhost:3000** and check for updates.



# 6-build-and-deploy-the-application-to-Docker-Hub
After you've finished creating your Appsody application on your local system, you can deploy it to a container platform. We'll show you how to containerize it and upload it to Docker Hub, so you can easily deploy it to a suitable runtime infrastructure such as IBM Cloud.


1.	Use the **‘appsody build’** command to generate a deployment Docker image without writing a dockerfile.
2.	After your image is successfully built, you should see the **'app-deploy.yml'** file in the left navigation.
3.	Run the **‘docker images’** command to see your image on your local machine.

![GitHub Logo](images/s8.png)

## Create Repository on Docker Hub:
1.	Now, log into **Docker Hub** , if you don’t have an account make it from [Docker-Signup](https://hub.docker.com/signup)
2.	On the top of your dashboard please select **“Create repository”** .
3.	Put Name filed as **“appsody”** and description as **“App modernization using appsody”**
4.	Then at the bottom of the page select **“Create”** button.
5.	Registry must be created as **ahsanoffical/appsody**. (username can be different)
6.	You can use **ahsanoffical/appsody** to push and pull the images.

![GitHub Logo](images/s11.png)



## Push your image to Docker Hub:
1. Open your VS Code terminal.
2. Run **“docker login”** command
3. In above step ,we see our newly created image name is **testing-appsody**
4. Run command **“docker tag testing-appsody ahsanoffical/appsody:testing”**
5. Check your local image is successfully uploaded to your **Docker Registry**.
6. In the future, you can pull the image anywhere by using the "docker pull ahsanoffical/appsody:testing" command.

 ![GitHub Logo](images/s13.png)
 
 ## Conclusion 
 

In this tutorial we learn how to integrate appsody in Visual Studio Code to minimize the local development workload. We used appsody node.js-express stack , that later helps in creating container and applying continuous integration without been expert in containerization technologies. Once the local development is completed  , we build the image and simply deploy to docker hub so that in future we can easily migrate and  deploy the image on any cloud platform that supports docker images .

# Use Appsody to develop an application locally, containerize it, and migrate it to Docker Hub

In this tutorial, I show you how to use a new open source project, [Appsody](https://appsody.dev/), to create an application locally and then build and deploy that application to a Docker Hub so you can use it on any cloud or platform that supports Docker images. After completing this tutorial, you will understand how Appsody enables you to containerize a Node.js Express application without having to be an expert in container technology. 

## Prerequisites

To complete the steps in this tutorial, you need to:
1. [Install Docker](https://docs.docker.com/install/) on your local machine.
2. Install VS Code [Visual Studio Code](https://code.visualstudio.com/) for local development.
3. Install Appsody. [Follow these instructions](https://appsody.dev/docs/getting-started/installation/) for your operating system.

## Steps
1.	[Clone the application](#1-clone-the-application)
2.	[Open the application in Visual Studi Code](#2-open-the-application-in-visual-studio-code)
4. [Initialize Appsody in your project]((#4-initialize-appsody-in-your-project)
5.	[Change the application on your local machine](#5-change-the-application-on-your-local-machine)
6.	[Build and deploy the application to Docker Hub](#6-build-and-deploy-the-application-to-Docker-Hub)

### 1. Clone the application

This tutorial uses a sample application you can find in this  [GitHub repo](https://github.com/mahsankhaan/appsody.git). The first step is to clone the project.

1.	Open your terminal and change your directory by using command **cd downloads**. (Or any other directory in which you want to clone the project)
2.	Run command **git clone https://github.com/mahsankhaan/appsody.git**   

![GitHub Logo](images/s1.png)


### 2. Open the application in Visual Studio Code

This step assumes, you have already installed [Visual Studio Code](https://code.visualstudio.com/). If not, please do so following their installation steps.

Once Visual Studio Code is installed, open the application that you just cloned. <!--EM: You need to explain these steps. For instance, something like the following. When I ask for more descriptive text further down in this tutorial, I'm looking for something similar to the following:-->

On the Welcome dashboard in VS Code, under the "Start" heading, click "Open folder . . . ". Navigate to where the Appsody folder has been downloaded and click **Open**.

![GitHub Logo](images/s2.png)

### 3. Install Appsody
<!--EM: I recommend deleting this entire section as it is just pulling out part of hte Appsody installation instructions. I just added that to the prerequisite section, so I don't think we need this.-->

The following steps show you how to download Appsody for for **macOS**. If you are on different operating system, check out [Appsody's installation instructions](https://appsody.dev/docs/getting-started/installation) for more details.

1. Open your terminal.
2. If you don’t have **Homebrew** installed on your system, install it by running this command:
**"/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"**
3.	Once you have Homebrew installed, install Appsody by running: 
**brew install appsody/appsody/appsody**

4.	To check if Appsody is installed successfully, use the command `appsody list` in the terminal and you must be able to see the available templates.

### 4. Initialize Appsody in your project

Before initializing Appsody, let's review some key Appsody terms: 

* **Stack:** Appsody uses preconfigured technology stacks for popular runtimes and frameworks, such as Java with Eclipse and Node.js with Express.
* **Template:** These templates offer a starting point for application development. You can customize a project template with your standards and specifications and share them across teams.
* **Repo:** The repos are categorized as stable (tested and support all Appsody commands), incubating (these are actively being worked on) or experimental (not being actively worked on) depending on the content of the stack. <!--EM: I don't understand why the reader needs to know this term to complete the steps in this tutorial. This is a little confusing. I recommend deleting-->

For more, check out the [documentation](https://appsody.dev/docs/stacks/stacks-overview/)

**Steps to initialize appsody:**

1.	Open Visual Studio Code. Use **CTRL + Shift + `** to access CLI from your VS code.<!--EM: Is that the correct command?-->
2.	From the CLI, enter `appsody list` to view all the available Appsody stacks.
3.	Review the list of stacks and find one that closely resembles your existing project. 

The sample application in this tutorial is a **Node.js Expres app**, so we select that.

![GitHub Logo](images/s4.png)

4.	Run  `appsody init incubator/nodejs-express none` command to initialize template. <!--EM: Is that the command formula? apposy init incubator / [name of the stack you want to use?]-->
   
**NOTE**
We use **"none”** in the above command because we are initializing Appsody in an existing project. If you want to initialize from start, then use `*appsody init incubator/nodejs-express simple`  which creates a Node.js application template with appsody.

5. Once the template is successfully initialized, you should see the ‘.appsody-config.yml’ file name in the left navigation of your VS Code editor.

![GitHub Logo](images/s5.png)

### 5. Change the application on your local machine

When you initialize a source code project with Appsody, you get a local Appsody development container. Use the ‘appsody run’ command to start the development container in ‘run’ mode in the foreground. Appsody watches your local project directory for file changes and updates the application to reflect code changes as you develop.

1.	Open your web browser and add the URL `localhost:3000`. 3000 is the default port to run a Node.js application.
2. You should see output that says "App started on Port 3000" which tells you that your application is up and running as a container.

![GitHub Logo](images/s6.png)

Make some changes to your code and check for updates. Here are some minor changes you can make: 

1.	In VS Code go to **views -> login.ejs** (this is login front-end page).
2.	There is a label for **“username"** in lower case. Make it upper case **“USERNAME”**.
3.	Save the updated file using **ctrl+s**. 
4.	Again, visit the URL **localhost:3000** and check for updates.

### 6. Build and deploy the application to Docker Hub

After you finished creating your Appsody application on your local system, you can deploy it to a container platform. The following steps show you how to containerize it and upload it to Docker Hub. From there, you can easily deploy it to a suitable runtime infrastructure such as IBM Cloud.

1.	Use the ‘appsody build’ command to generate a deployable Docker image without writing a dockerfile.
2.	After your image is successfully built, you should see the `app-deploy.yml` file in the left navigation.
3.	Run the `docker images` command to see your image on your local machine.

![GitHub Logo](images/s8.png)

#### Create Repository on Docker Hub:
1.	Now, log into [Docker Hub](https://hub.docker.com). if you don’t have an account make it from [Docker-Signup](https://hub.docker.com/signup)
2.	On the top of your dashboard,select **“Create repository”** .
3.	In the name field, enter **appsody**.
4. In the description field, enter **App modernization using appsody**.
4.	At the bottom of the page, select the **Create** button.

You should see that a registry is created with the username/appsody. For instance, mine is **ahsanoffical/appsody**.
You can use this registry to push and pull the images.

![GitHub Logo](images/s11.png)

#### Push your image to Docker Hub:
1. Open your VS Code terminal.
2. Run `docker login` command. You should see the newly created image name is `testing-appsody`.
3. Run the command `docker tag testing-appsody ahsanoffical/appsody:testing`.
4. Check that your local image is successfully uploaded to your **Docker Registry**.
5. In the future, you can pull the image anywhere by using the `docker pull ahsanoffical/appsody:testing` command.

 ![GitHub Logo](images/s13.png)
 
 ## Conclusion 

In this tutorial, you learned how to integrate Appsody in VS Code to minimize the local development workload, containerize the workload using Docker Hub to prepare it for deployment to any cloud platform that supports Docker images.

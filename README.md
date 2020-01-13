# Do local development, containerize and migrate to Docker Hub using Appsody

In this tutorial, I show you how to use a new open source project, Appsody, to create an application locally and then build and deploy that application to a Docker Hub so you can use it on any cloud or platform that supports Docker images. After completing this tutorial, you will see how Appsody enables you to containerize a Node.js Express application without having to be an expert in container technology. 

## Prerequisites

To complete the steps in this tutorial, you need to:
1. Be familiar with Appsody and [install an instance on your machine](https://appsody.dev/docs/getting-started/installation).
1. [Install Docker](https://docs.docker.com/install/) on your local machine.
1. Have an instance of [Visual Studio Code](https://code.visualstudio.com/) set up for local development.

## Steps

1. [Clone the application](#1-clone-the-application)
1. [Open the application in Visual Code](#2-open-the-application-in-visual-code)
1. [Initialize Appsody in your application](#3-initialize-appsody-in-your-application)
1. [Change the application on your local machine](#4-make-local-changes-to-your-application)
1. [Build and deploy the application to Docker Hub](#5-build-and-deploy-the-application-to-docker-hub)

## 1: Clone the application
I'll show you the steps in this tutorial using an application in this [GitHub repo](https://github.com/mahsankhaan/appsody.git).

Go to the GitHub location and click **Clone or download**.<!--EM: After they click Clone or download, what do they do? Do they download the zip or open on their machine?-->

![GitHub Logo](images/s1.png)

## 2:Open the application in Visual Code
<!--EM: How do they do that? Do they do that in the above step when they click "Open on their machine?-->
![GitHub Logo](images/s2.png)

## 3: Initialize Appsody in our application
<!--EM: need to add additional steps here. I made Installing Appsody part of hte prerequisites, but here do they open the Appsody CLI and then do these steps?-->
To initialize Appsody:

1. From the CLI, enter `appsody list` to view all the available Appsody stacks.
1. Review the list of stacks and find one that closely resembles your existing project. The sample application in this tutorial is a Node.js Express app, so we select that.

<!--EM: How do they select a stack?
 
    ![GitHub Logo](images/s4.png)

1. Run `appsody init` command to create the template. <!--EM: Does this need to be appsody init plus the name of the template that they're choosing?-->
1. Once the templete is successfully intailized, you should see an `.appsody-config.yml` file in the left navigation of your Visual Code editor.

![GitHub Logo](images/s5.png)

## 4: Make local changes to your application

When you initialize a a source code project with Appsody, you get a local Appsody development container. Use the `appsody run` command to start the development container in `run` mode in the foreground. Appsody watches your local project directory for file changes and updates the application to reflect code changes as you develop.

<!--EM: Are we asking the reader to make changes? What are they looking for in their editor? Why are there "Warn" messages in that image? What is up with the PORT 3000?-->

![GitHub Logo](images/s6.png)

Our container is running on PORT 3000.

![GitHub Logo](images/s7.png)

## 5: Build and deploy your application on Docker Hub

After you've finished creating your Appsody application on your local system, you can deploy it to a container platform. We'll show you how to containerize it and upload it to Docker Hub, so you can easily deploy it to a suitable runtime infrastructure such as IBM Cloud.

1. Use the `appsody build` command to generate a deployment Docker image without writing a dockerfile.

![GitHub Logo](images/s8.png)

2. After your image is successfully built, you should see the `app-deploy.yml` file in the left navigation.

![GitHub Logo](images/s9.png)

3. Run the `docker images` command to see your image on your local machine.

![GitHub Logo](images/s10.png)

4. Now, log into Docker Hub and create a new repository.<!--EM: How?-->

![GitHub Logo](images/s11.png)

5. Finally push the image to Docker Hub and access the image any where . <!--EM: How?-->

![GitHub Logo](images/s12.png)

6 . Check your local image is successfully uploaded to your Docker Registry. In the future, you can pull the image anywhere by using the `docker pull ahsanoffical/appsody:testing` command.

 ![GitHub Logo](images/s13.png)

## Conclusion
<!--EM: Need to add a conclusion tying up what the user learned. -->

# Application Modernization using Appsody 


Only 30% of enterprises migrated to Cloud other 70% want's to but due to insufficient technical knowledge in app modernization they can’t migrate their on prem data to Cloud. As for that they need to apply various technology stacks before moving to Cloud some of them are Docker, Containerization, Kubernetes , CI/CD and many others.

What if we could have single integrated platform , that contains all these platforms  ? 

“Appsody” is designed to help you develop containerized applications for the cloud.
Now enterprises just need to focus on their business and let Appsody build applications for the cloud that are ready to be deployed to Kubernetes without being an expert on the underlying container technology. 

There are 3 main key components:

## Appsody Stacks:
Already built stack and frameworks that only need to be configured into your project such as Java with Eclipse MicroProfile and Node.js with Express

## Appsody Hub:
The Hub is the central point of control for Appsody Stacks where you can find available stacks. create new stacks, or modify existing ones. 

## Appsody CLI:
Appsody CLI allows developers use already build stacks and  bring them into their local development environment. From here, they can build, run, test, and deploy applications locally. Once they are done with their local development can containerize it and deploy on the cloud.


![GitHub Logo](images/appsodystack.png)



# Let’s move to lab part:
Follow the below steps to deploy your first application using Appsody:
Application (Nodejs with express) . 

*IMPORTANT NOTE*
You must have docker installed on your local machine . 
1.Get Docker from here :https://docs.docker.com/install/
2. We are using Visual Studio Code for local development :https://code.visualstudio.com/


## Step 1: Clone the application
![GitHub Logo](images/s1.png)
https://github.com/mahsankhaan/appsody.git

## Step 2:Open the application in Visual Code
![GitHub Logo](images/s2.png)

## Step 3:Install Appsody
https://appsody.dev/docs/getting-started/installation

## Step 4: Initialize Appsody in our application
 .First, choose a stack that closely resembles your existing project.
 .Use appsody list to view the available stacks'
 .As we are using Node.js with express so we will use that stack.
 
![GitHub Logo](images/s4.png)

 .Run Appsody init command to create the templete
 .Once the templete is successfully intailized , there will be  ".appsody-config.yml" created.


![GitHub Logo](images/s5.png)

## Step 5: Let's do some local development

When a source code project is initialized with Appsody, you get a local Appsody development container. "Appsody run" starts the development container in run mode in the foreground. Appsody watches your local project directory for file changes and updates the application to reflect code changes as you develop.

![GitHub Logo](images/s6.png)

Our container is running on PORT 3000.

![GitHub Logo](images/s7.png)


## Step 6: Now it's time to build and deploy our application on Docker Hub
When we've finished the local development work for our Appsody project,we will containeried our application and upload it on Docker Hub, so that we can easily deploy it to a suitable runtime infrastructure such as IBM cloud platform or any other.

1. We will use the "appsody build" command to generate a deployment Docker image without writing any dockerfile.

![GitHub Logo](images/s8.png)


2.Once your image is successfully built , we will be able to see "app-deploy.yml".

![GitHub Logo](images/s9.png)

3. Run "docker images" command and see your image is created on your local machine.

![GitHub Logo](images/s10.png)


4. Let's login into Docker and create repository.

![GitHub Logo](images/s11.png)

5. Finally push the image to Docker Hub and access the image any where .

![GitHub Logo](images/s12.png)

6 . Check your local image is successfully uploaded to your Docker Registry.In the future you can pull the image any anywhere by using "docker pull ahsanoffical/appsody:testing" command.

 ![GitHub Logo](images/s13.png)



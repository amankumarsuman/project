# ReactJS Website

Source code of reactjs website.

## Installation

### Steps:

- Extract this zip file.
- Run the following commands

  ```bash
    yarn install
  ```

  ```bash
    yarn start
  ```

## Tech Stack and Libraries

- ReactJS: 18.2.0
- Chart.JS: 4.3.2
- react-chartjs-2 : 5.2.0


## Docker Configurations 

1. Configure the ENV file accordingly.

2. To build and run the Docker image, follow these steps:

   * Ensure you have Docker installed on your machine.
   * Clone this repository to your local machine.
   * Navigate to the repository directory.
   * Building the Docker Image
   * Run the following command to build the Docker image:
      * docker build -t stockiworld-frontend .

3. To tag the image and push it

Commnads which are needed to tag and push
   * docker tag stockiworld-frontend:latest registry.digitalocean.com/stockworld-registry/stockworld-frontend:latest
   * docker push registry.digitalocean.com/stockworld-registry/stockworld-frontend:latest

Note: You need to configure doctl and authenticate inorder to push into the repository
*  command: doctl registry login

4. To install doctl 
checkout: https://docs.digitalocean.com/reference/doctl/how-to/install/

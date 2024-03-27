## News Aggregator

This application keeps you up-to-date on the latest news by aggregating articles from trusted sources: NewsAPI.org, The New York Times, and The Guardian.

### Features:

- Combines news feeds from various sources for a comprehensive overview.
- Offers a user-friendly interface .

### Running the Application

This guide explains how to run the news aggregator application using Docker.

**Prerequisites:**

- Docker installed on your system. You can find installation instructions on the Docker website: [https://www.docker.com/](https://www.docker.com/)

**Steps:**

1.  **Build the Image:**

    Open your terminal and navigate to the directory containing this application's code. Run the following command to build a Docker image named "newsaggregator:v1.0":

    ```
    docker build . -t "newsaggregator:v1.0"

    ```

2.  **Run the Application:**

    Run the following command to start a container from the built image and expose port 8080 of the container to port 8080 on your local machine:

    ```
    docker run -p 8080:8080 newsaggregator:v1.0

    ```

3.  **Access the Application:**

    Open your web browser and navigate to http://localhost:8080/. You should now see the news aggregator interface.

# Starting Your First Livestream

In just a few minutes we'll set up and play your first livestream with Wowza Streaming Engine, show you how to embed FlowPlayer to create custom user experience, and also how you can broadcast it to other services like Youtube or Facebook Live.

# Step 1: Deploy Wowza Streaming Engine using Docker

1. Download and install [Docker](https://docker.com) on your computer.
2. Download the Docker Compose file in our Dev Guides Github [repo](https://github.com/WowzaMediaSystems/dev-guides/tree/main/1_first_livestream).
3. In the docker-compose.yaml file, replace ‘WSE_LICENSE_KEY’ with your trial license key, and set your admin username and password if you want to change them from the default.

![Docker compose file](assets/1_docker-compose.png)

4. Start the Docker images by running ‘docker compose up‘ in a terminal window.
```
    docker compose up
```

# Step 2: Download and Install OBS Studio
[OBS Studio](https://obsproject.com/) is free and open source software for video recording and live streaming. We'll use this to create a live stream from your local computer using your webcam and microphone.

1. Open OBS Studio
2. Add a new Video Capture Device

![alt text](assets/1_obs-video-capture-device.png)

3. Select the webcam on your computer
![alt text](assets/1_obs-select-video.png)

4. You should see your webcam feed now
![alt text](assets/1_obs-webcam-image.png)
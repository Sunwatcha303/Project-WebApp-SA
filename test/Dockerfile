# Use the official Python image from the Docker Hub
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the requirements file into the container
COPY requirement.txt ./

# Install any dependencies specified in requirements.txt
RUN pip install --no-cache-dir -r requirement.txt

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Expose any required ports (if needed for your tests)
EXPOSE 8080

# Define the command to run the Robot Framework tests
CMD ["robot", "--outputdir", "results", "./testcases"]
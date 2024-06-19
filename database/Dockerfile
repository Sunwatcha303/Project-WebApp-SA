# Use the official MySQL image from Docker Hub
FROM mysql:latest

# Set environment variables for MySQL
ENV MYSQL_ROOT_PASSWORD=1234567890
ENV MYSQL_DATABASE=MADSS
ENV MYSQL_ALLOW_EMPTY_PASSWORD=no

# Expose the default MySQL port
EXPOSE 3306

# Start MySQL service
CMD ["mysqld"]
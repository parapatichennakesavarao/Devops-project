<h1 align="center">🚀 PeerLink – DevOps Project</h1>

<p align="center">
  A full-stack application managed using <strong>DevOps best practices</strong>,<br>
  demonstrating <strong>Git branching, Docker, and cloud deployment automation</strong>.
</p>

![](https://github.com/parapatichennakesavarao/Devops-project/blob/main/images/Screenshot%20(167).png)

---

## 📌 Introduction

**PeerLink** is a DevOps-oriented project that demonstrates how a real-world application can be developed, versioned, containerized, and deployed using modern DevOps workflows.

The project is structured using multiple Git branches to clearly separate:
- Backend development
- Frontend UI
- Docker configuration
- Cloud (AWS) setup scripts

This approach ensures **clean code management, scalable deployments, and easier collaboration**.

## 📌 Visuals
![](https://github.com/parapatichennakesavarao/Devops-project/blob/main/images/Screenshot%20(167).png)
 
![](https://github.com/parapatichennakesavarao/Devops-project/blob/main/images/Screenshot%20(168).png)

![](https://github.com/parapatichennakesavarao/Devops-project/blob/main/images/Screenshot%20(175).png)


## 3. Objectives of the Project
- To understand and implement DevOps methodologies  
- To apply Git branching strategies for collaborative development  
- To containerize frontend and backend services using Docker  
- To deploy services using Docker Compose  
- To configure Nginx as a reverse proxy  
- To automate cloud/VPS server setup

## 4. System Architecture
The system follows a multi-service architecture:
- Frontend Service (UI)
- Backend Service (APIs & Business Logic)
- Nginx Reverse Proxy
- Docker & Docker Compose
- Cloud/VPS Server (AWS or similar)

Each component runs in an isolated container, ensuring scalability and portability.

## 5. Tools and Technologies Used

### Frontend
- React / TypeScript  
- HTML, CSS, JavaScript  

### Backend
- Java  
- Spring Boot  
- Maven  

### DevOps Tools
- Git & GitHub  
- Docker  
- Docker Compose  
- Nginx  

### Cloud
- AWS / VPS  
- Shell Scripting  

---

## 📂 Project Structure
Devops-project/
├── peerlink/ # Application source code
├── ui/ # Frontend files
├── src/ # Backend implementation
├── Dockerfile.backend # Backend Docker configuration
├── Dockerfile.frontend # Frontend Docker configuration
├── docker-compose.yml # Container orchestration
├── nginx.conf # Reverse proxy configuration
├── vps-setup.sh # Cloud/VPS automation script
├── images/ # Project screenshots
└── README.md # Project documentation

## 7. Git Branching Strategy

| Branch Name | Description |
|------------|-------------|
| main | Core backend application |
| ui | Frontend development |
| docker | Docker and container setup |
| awsscript | AWS/VPS deployment scripts |

---

## 8. Docker Implementation
Docker is used to containerize both frontend and backend services using separate Dockerfiles. Docker Compose manages multi-container execution and networking.

**Advantages of Docker:**
- Platform independence  
- Faster deployment  
- Environment consistency  
- Easy scalability  

---

## 9. Nginx Reverse Proxy
Nginx is configured as a reverse proxy to route incoming client requests to appropriate backend and frontend containers. It improves performance, security, and request handling.

---

## 10. Cloud / VPS Deployment
The project includes a shell script (`vps-setup.sh`) that automates:
- Server setup  
- Docker installation  
- Nginx configuration  
- Application deployment  

This minimizes manual intervention and deployment errors.

---
  
## ⚠️ Challenges Faced

Understanding Git branching and upstream tracking

Pushing to correct branches (main, ui, docker, awsscript)

Docker networking between frontend and backend

Writing Dockerfiles for multiple services

Configuring Nginx reverse proxy on AWS

Handling line-ending warnings (LF vs CRLF) on Windows

## 12. Advantages of the System
- Modular and scalable architecture  
- Faster and reliable deployments  
- Cloud-ready infrastructure  
- Real-world DevOps experience  

---

## 13. Future Enhancements
- CI/CD pipeline using GitHub Actions or Jenkins  
- Kubernetes orchestration  
- Monitoring with Prometheus and Grafana  
- Automated testing integration  
- HTTPS and SSL configuration  

---

## 🎯 Conclusion

This project provided hands-on experience with end-to-end DevOps workflows.
It strengthened understanding of Git branching strategies, Docker containerization, and cloud deployment automation.

PeerLink demonstrates how DevOps practices improve deployment reliability, scalability, and maintainability, making it a strong foundation project for aspiring DevOps and Cloud Engineers.

---
## 15. References
- Docker Documentation  
- GitHub Documentation  
- Nginx Official Documentation  
- AWS Documentation  

## ⚙️ Commands Used

### Git Commands

```bash
git init
git remote add origin https://github.com/parapatichennakesavarao/Devops-project.git

git add .
git commit -m "backend is done for now"
git push -u origin main

git checkout -b ui
git add .
git commit -m "frontend is done"
git push -u origin ui

git checkout -b docker
git commit -m "docker file"
git push -u origin docker

git checkout -b awsscript
git commit -m "AWS setup file and nginx config file"
git push -u origin awsscript



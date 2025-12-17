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


## ⚠️ Challenges Faced

Understanding Git branching and upstream tracking

Pushing to correct branches (main, ui, docker, awsscript)

Docker networking between frontend and backend

Writing Dockerfiles for multiple services

Configuring Nginx reverse proxy on AWS

Handling line-ending warnings (LF vs CRLF) on Winddows

## 🎯 Conclusion

This project provided hands-on experience with end-to-end DevOps workflows.
It strengthened understanding of Git branching strategies, Docker containerization, and cloud deployment automation.

PeerLink demonstrates how DevOps practices improve deployment reliability, scalability, and maintainability, making it a strong foundation project for aspiring DevOps and Cloud Engineers.

---

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


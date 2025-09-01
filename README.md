---

# JobBordX — Full-Stack Job Board App

A full-stack job board application built with React (frontend) and Flask (backend).
The project includes **Dockerized services, CI/CD with Jenkins, and Kubernetes deployment to demonstrate DevOps readiness.

---

## Features

* Post and view job listings
* Responsive UI with React + Tailwind CSS
* Flask backend with SQLite database
* RESTful API with modular CRUD routes
* Dockerized frontend and backend
* Jenkins pipeline for CI/CD
* Kubernetes deployment support

---

## Tech Stack

* **Frontend:** React, Tailwind CSS
* **Backend:** Flask, SQLAlchemy
* **Database:** SQLite
* **DevOps:** Docker, Docker Compose, Jenkins, Kubernetes

---

## Setup Instructions

1. Clone the repository

```bash
git clone https://github.com/GaneshWalunjX/JobBordX.git
cd JobBordX
```

2. Backend setup

```bash
cd backend
pip install -r instance/requirements.txt
```

3. Frontend setup

```bash
cd ../frontend
npm install
npm start
```

---

## Docker Setup

Run the entire stack using Docker Compose:

```bash
docker-compose up --build
```

This builds and runs both frontend and backend containers.

---

## CI/CD with Jenkins

* Jenkinsfile defines automated build, test, and deployment pipelines.
* Integrated with Docker for containerized builds.
* Configurable for Kubernetes deployment.

---

## Kubernetes Deployment

* Includes manifests for frontend and backend pods, services, and deployments.
* Ready to run on any Kubernetes cluster (minikube, EKS, GKE, etc.).

---

## Notes

This project demonstrates:

* Full-stack integration with React + Flask
* Production-ready Dockerization (frontend & backend)
* Jenkins-based CI/CD pipeline
* Kubernetes deployment workflow
* Clean UI and scalable architecture

---
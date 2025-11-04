# JobBordX — Full-Stack Job Board Application

A **full-stack job board platform** built with **React (frontend)** and **Flask (backend)** — containerized with **Docker**, automated via **Jenkins CI/CD**, and deployable on **Kubernetes**.
This project demonstrates full-stack integration, DevOps readiness, and scalable architecture.

---

## Features

* Post, view, and manage job listings
* Responsive UI built with **React + Tailwind CSS**
* **Flask RESTful API** with modular CRUD endpoints
* **SQLite** database using SQLAlchemy ORM
* Fully **Dockerized** frontend and backend services
* **CI/CD pipeline** powered by Jenkins
* **Kubernetes manifests** for cloud or local deployment

---

## Tech Stack

**Frontend:** React, Tailwind CSS
**Backend:** Flask, SQLAlchemy
**Database:** SQLite
**DevOps:** Docker, Docker Compose, Jenkins, Kubernetes

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/GaneshWalunjX/JobBordX.git
cd JobBordX
```

### 2. Backend Setup

```bash
cd backend
pip install -r instance/requirements.txt
flask run
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

Then open your browser at **[http://localhost:3000](http://localhost:3000)**

---

## Run with Docker

Run the entire stack (frontend + backend) using Docker Compose:

```bash
docker-compose up --build
```

This command:

* Builds both containers (frontend & backend)
* Links them together in a shared network
* Exposes the app on local ports (e.g., `http://localhost:3000`)

---
## Kubernetes Deployment

JobBordX includes ready-to-use **Kubernetes manifests** for both frontend and backend:

* Deployments and Services for each component
* Configurable environment variables
* Compatible with **Minikube**, **EKS**, **GKE**, or **AKS**

To deploy the app on Kubernetes, run:

```bash
kubectl apply -f k8s/
kubectl get pods
```

Once deployed, access the app via your cluster’s external IP.

---

## CI/CD with Jenkins

* The **Jenkinsfile** automates:

  * Code build and test stages
  * Docker image creation


---

## Project Highlights

* Full-stack integration (React + Flask)
* Modular and RESTful API design
* Production-ready Dockerization
* Jenkins-based CI/CD automation
* Kubernetes-compatible deployment workflow
* Clean, responsive UI and scalable architecture

---

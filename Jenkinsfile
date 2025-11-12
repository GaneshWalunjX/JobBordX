pipeline {
  agent any

  environment {
    K8S_NAMESPACE = 'jobboardx-ns'
    FRONTEND_PORT = '3000'
    BACKEND_PORT = '5000'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Deploy Green Versions') {
      steps {
        sh '''
          echo "Applying green deployments..."
          kubectl apply -f backend-deployment.yaml -n $K8S_NAMESPACE
          kubectl apply -f frontend-deployment.yaml -n $K8S_NAMESPACE

          echo "Waiting for rollout to complete..."
          kubectl rollout status deployment/jobboardx-backend-green -n $K8S_NAMESPACE
          kubectl rollout status deployment/jobboardx-frontend-green -n $K8S_NAMESPACE
        '''
      }
    }

    stage('Health Check') {
      steps {
        sh '''
          echo "Checking backend health..."
          kubectl run temp-backend-check --rm -i --restart=Never --image=curlimages/curl -n $K8S_NAMESPACE -- \
            curl -f http://jobboardx-backend-service:$BACKEND_PORT/health || exit 1

          echo "Checking frontend health..."
          kubectl run temp-frontend-check --rm -i --restart=Never --image=curlimages/curl -n $K8S_NAMESPACE -- \
            curl -f http://jobboardx-frontend-service:$FRONTEND_PORT || exit 1
        '''
      }
    }

    stage('Switch Traffic to Green') {
      steps {
        sh '''
          echo "Switching service selectors to green versions..."
          kubectl patch service jobboardx-backend-service -n $K8S_NAMESPACE \
            -p '{"spec":{"selector":{"app":"jobboardx-backend","version":"green"}}}'

          kubectl patch service jobboardx-frontend-service -n $K8S_NAMESPACE \
            -p '{"spec":{"selector":{"app":"jobboardx-frontend","version":"green"}}}'
        '''
      }
    }

    stage('Archive Deployment Status') {
      steps {
        sh '''
          kubectl get pods -n $K8S_NAMESPACE > pods.txt
          kubectl describe deployment jobboardx-backend-green -n $K8S_NAMESPACE >> pods.txt
          kubectl describe deployment jobboardx-frontend-green -n $K8S_NAMESPACE >> pods.txt
        '''
        archiveArtifacts artifacts: 'pods.txt', fingerprint: true
      }
    }
  }

  post {
    always {
      cleanWs()
    }
  }


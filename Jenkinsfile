pipeline {
  agent any

  environment {
    COMPOSE_FILE = 'docker-compose.yml'
    PORT = '3000'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build & Run') {
      steps {
        sh 'docker-compose -f $COMPOSE_FILE up -d --build'
      }
    }

    stage('Health Check') {
      steps {
        sh '''
          echo "Checking backend..."
          curl -f http://localhost:5000/health || exit 1

          echo "Checking frontend..."
          curl -f http://localhost:$PORT || exit 1
        '''
      }
    }

    stage('Archive Logs') {
      steps {
        sh 'docker-compose logs > logs.txt'
        archiveArtifacts artifacts: 'logs.txt', fingerprint: true
      }
    }

    stage('Cleanup') {
      steps {
        sh 'docker-compose down'
      }
    }
  }

  post {
    always {
      cleanWs()
    }
  }
}

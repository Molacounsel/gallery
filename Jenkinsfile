pipeline {
  agent any

  stages {
    stage('Install Tools') {
      steps {
        sh 'npm install'
      }
    }

    stage('Deploy to Render') {
      steps {
        sh 'curl -X POST $RENDER_DEPLOY_HOOK || echo "Manual deployment needed or hook missing."'
      }
    }
  }

  post {
    success {
      echo 'Pipeline completed successfully. Your Render deployment should now reflect MILESTONE 2.'
    }
    failure {
      echo 'Pipeline failed. Check console output for details.'
    }
  }
}

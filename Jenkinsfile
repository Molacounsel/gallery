pipeline {
  agent any

  stages {
    stage("Installing Tools") {
      steps {
        sh "npm install"
      }
    }

    stage("Running Tests") {
      steps {
        echo "DEBUG: MONGO_URI is ${env.MONGO_URI}"
        sh "npm test"
      }
    }

    stage("Deploying to Render") {
      steps {
        sh "curl -X POST $RENDER_DEPLOY_HOOK"
      }
    }
  }

  post {
    success {
      echo "Pipeline completed successfully."

      // Trigger SlackNotifier job with dynamic build info
      build job: 'SlackNotifier', parameters: [
        string(name: 'BUILD_ID', value: "${BUILD_ID}"),
        string(name: 'RENDER_URL', value: 'https://gallery-app-ah8y.onrender.com')
      ]
    }

    failure {
      echo "Pipeline failed. See console output for details."
      mail to: "counselmola@gmail.com",
           subject: "Test Failure Notification",
           body: "The tests are unsuccessful. Please check the Jenkins console output for details."
    }
  }
}

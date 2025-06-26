pipeline {
  agent any

  tools {
    nodejs 'node 2025'
  }

  stages {
    stage("Cloning Repository from Github") {
      steps {
        git branch: 'master',
            url: 'https://github.com/Molacounsel/gallery.git'
      }
    }

    stage("Installing Dependencies") {
      steps {
        sh "npm install"
      }
    }

    stage("Running Tests") {
      steps {
        sh "npm test"
      }
      post {
        failure {
          emailext(
            to: "counselmola@gmail.com",
            subject: "Test Failure Notification",
            body: "The tests are unsuccessful. Please check the Jenkins console output for details."
          )
        }
      }
    }

    stage("Deploying to Render") {
      steps {
        echo "Deployment auto-triggered via Github push"
        echo "App URL: https://gallery-app-ah8y.onrender.com"
      }
    }
  }

  post {
    success {
      slackSend(
        channel: '#robert_ip1',
        message: "The tests were successful. Build #${BUILD_ID} has been successfully deployed to Render: https://gallery-app-ah8y.onrender.com/",
        color: 'good'
      )
      echo "Pipeline completed successfully."
    }
    failure {
      echo "Pipeline failed. Please check the console output for details."
    }
  }
}

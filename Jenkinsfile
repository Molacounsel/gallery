pipeline{
  agent any

  stages{
    stage("Installing Tools"){
      steps{
        sh "npm install"
      }
    }

    stage("Running Tests"){
      steps{
        sh "npm test"
      }
    }

    stage("Deploying to Render"){
      steps{
        sh "curl -X POST $RENDER_DEPLOY_HOOK"
      }
    }
  }

  post{
    success{
      echo "Pipeline completed successfully."
    }

    failure{
      echo "Pipeline failed. See console output for details."
      mail to: "counselmola@gmail.com",
           subject: "Test Failure Notification",
           body: "The tests have failed. Please check the Jenkins console output for details."
    }
  }
}

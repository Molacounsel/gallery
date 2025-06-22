pipeline{
  agent any

  stages{
    stage("Installing Tools"){
      steps{
        sh "npm install"
      }
    }

    stage("Deploying to Render"){
      steps{
        sh "curl -X POST $RENDER_DEPLOY_HOOK."
      }
    }
  }

  post{
    success{
      echo "Pipeline completed successfully. Render deployment should reflect MILESTONE 2."
    }
    failure{
      echo "Pipeline failed. See console output for details."
    }
  }
}

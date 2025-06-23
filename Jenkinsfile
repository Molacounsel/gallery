pipeline{
  agent any

  environment{
    MONGO_URI = 'mongodb+srv://counselmola:Counsel1995@mycluster.wexfegm.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster'
    RENDER_DEPLOY_HOOK = credentials('render-deploy-hook') // Or replace with hardcoded URL for testing
  }

  stages{
    stage("Installing Tools"){
      steps{
        sh "npm install"
      }
    }

    stage("Running Tests"){
      steps{
        echo "DEBUG: MONGO_URI is ${env.MONGO_URI}"
        sh "npm test"
      }
    }

    stage("Deploying to Render"){
      steps{
        sh "curl -X POST ${env.RENDER_DEPLOY_HOOK}"
      }
    }
  }

  post{
    success{
      echo "Pipeline completed successfully."
      build job: 'SlackNotifier', parameters: [
        string(name: 'BUILD_ID', value: "${BUILD_ID}"),
        string(name: 'RENDER_URL', value: 'https://gallery-app-ah8y.onrender.com')
      ]
    }

    failure{
      echo "Pipeline failed. Skipping email notification (no SMTP configured)."
      // To re-enable later, add SMTP config in Jenkins and uncomment below:
      // mail to: "counselmola@gmail.com",
      //      subject: "Test Failure Notification",
      //      body: "The tests are unsuccessful. Please check the Jenkins console output for details."
    }
  }
}

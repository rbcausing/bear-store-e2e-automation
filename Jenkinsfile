pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    stages {
        stage('Clean Workspace') {
            steps {
                deleteDir()
            }
        }

        stage('Checkout') {
            steps {
                git url: 'https://github.com/rbcausing/bear-store-e2e-automation.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test --reporter=junit,html'
            }
        }

        stage('Generate Report') {
            steps {
                bat 'npx playwright show-report'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
            junit 'playwright-report/results.xml'
        }
    }
}
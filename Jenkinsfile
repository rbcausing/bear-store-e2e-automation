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
                script {
                    if (isUnix()) {
                        sh 'npm install'
                        sh 'npx playwright install'
                    } else {
                        bat 'npm install'
                        bat 'npx playwright install'
                    }
                }
            }
        }

        stage('Run Playwright Tests') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npx playwright test --reporter=junit,html'
                    } else {
                        bat 'npx playwright test --reporter=junit,html'
                    }
                }
            }
        }

        stage('Generate Report') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npx playwright show-report &'
                    } else {
                        bat 'npx playwright show-report &'
                    }
                    // Wait up to 30 seconds for the report index.html to exist
                    int retries = 30
                    while (retries > 0) {
                        if (fileExists('playwright-report/index.html')) {
                            break
                        }
                        sleep 1
                        retries--
                    }
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
            junit 'playwright-report/results.xml', allowEmptyResults: true
        }
    }
}
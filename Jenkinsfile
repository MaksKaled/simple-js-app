pipeline {
    agent any
    tools {
        nodejs 'nodejs-lts'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    sh 'npm test'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("your-dockerhub-username/simple-js-app:latest")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'b85360f7-b3a9-419f-8551-608d9b28dd38') {
                        docker.image("makskaled/simple-js-app:latest").push()
                    }
                }
            }
        }
    }
}

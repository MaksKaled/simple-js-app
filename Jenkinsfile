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
                    docker.withRegistry('https://registry.hub.docker.com', 'd85e0f72-ff4a-4d7d-8eba-9e2734e8cdac') {
                        docker.image("makskaled/simple-js-app:latest").push()
                    }
                }
            }
        }
    }
}

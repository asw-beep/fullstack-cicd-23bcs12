pipeline {
    agent any

    environment {
        DOCKERHUB_USER = "aswinmony42"
        FRONTEND_IMAGE = "aswinmony42/23bcs12_2023bcs0012_frontend"
        BACKEND_IMAGE = "aswinmony42/23bcs12_2023bcs0012_backend"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git 'https://github.com/as-beep/fullstack-cicd-23bcs12.git'
            }
        }

        stage('Build Backend Image') {
            steps {
                sh 'docker build -t $BACKEND_IMAGE ./backend'
            }
        }

        stage('Build Frontend Image') {
            steps {
                sh 'docker build -t $FRONTEND_IMAGE ./frontend'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                }
            }
        }

        stage('Push Backend Image') {
            steps {
                sh 'docker push $BACKEND_IMAGE'
            }
        }

        stage('Push Frontend Image') {
            steps {
                sh 'docker push $FRONTEND_IMAGE'
            }
        }
    }
}

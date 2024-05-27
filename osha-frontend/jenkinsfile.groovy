pipeline {
    agent any

    environment {
        DEPLOY_FILE = "dev.zip"
        EEGSAC_HOME = "/home4/educa7ls"
        DEPLOY_FOLDER = "/home4/educa7ls/testing.osha.es"
    }

    stages {
        stage("inicializar") {
            steps {
                sh "echo \"Hola mundoo \""
            }
        }
        stage("compilar") {
            agent {
                docker {
                    image 'node'
                    reuseNode true
                }
            }
            steps {
                sh "npm install"
                sh "npm run build"
            }
        }
        stage("zip dist") {
            steps {
                dir('osha-frontend') {
                    dir("dist") {
                        sh "zip -r -q $DEPLOY_FILE *"
                    } 
                }   
            }
        }
        stage("zip src") {
            steps {
                dir('osha-frontend') {
                    sh "zip -r -q src.zip src"
                }   
            }
        }
        stage('Deploy') {
            environment {
                EEGSAC_SSH_FILE = credentials('eegsac_ssh_private_key')
                SSH_CONF = "-oHostKeyAlgorithms=+ssh-dss -o StrictHostKeyChecking=no"
            }
            steps {
                dir("dist") {
                    sh "scp $SSH_CONF -i $EEGSAC_SSH_FILE $DEPLOY_FILE educa7ls@162.251.85.146:$EEGSAC_HOME"

                    sh "ssh $SSH_CONF -i $EEGSAC_SSH_FILE educa7ls@162.251.85.146 \"rm -rf $DEPLOY_FOLDER/*\""
                    
                    sh "ssh $SSH_CONF -i $EEGSAC_SSH_FILE educa7ls@162.251.85.146 \"mv $EEGSAC_HOME/$DEPLOY_FILE $DEPLOY_FOLDER/\""
                    // Unzip
                    sh "ssh $SSH_CONF -i $EEGSAC_SSH_FILE educa7ls@162.251.85.146 \"cd $DEPLOY_FOLDER/ && unzip -o $DEPLOY_FILE\""
                    sh "ssh $SSH_CONF -i $EEGSAC_SSH_FILE educa7ls@162.251.85.146 \"cd $DEPLOY_FOLDER/ && unzip -o src.zip\""

                    // remove deploy.zip
                    sh "ssh $SSH_CONF -i $EEGSAC_SSH_FILE educa7ls@162.251.85.146 \"rm $DEPLOY_FOLDER/$DEPLOY_FILE\""

                }
            }
        }
    }
}

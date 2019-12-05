terraform {
  backend "s3" {}
}

provider "aws" {
  version = "~> 2.0"
  region = "ap-southeast-2"
}

output "weight_tracker_web_ecr_url" {
  value = aws_ecr_repository.weight_tracker_web.repository_url
}

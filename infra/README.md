# How to deploy to AWS environment

This procedure mainly use by AWS CLI commands for Website to deploy.
You can change AWS PROFILE bellow the commands.This time I put the unique my profile name.

## 1. Create the S3 bucket for the delivery of the contents

Change [the bucket policy principal](https://github.com/mym-kingbob/mym.works/blob/infra/infra/s3.cf.yml#L58) from OriginAccessIdentity to allow all get all resources.

```
AWS: '*'
```

The following command will be executed.

```
aws cloudformation create-stack --stack-name mym-works-s3-prd --template-body file://s3.cf.yml --parameters ParameterKey=Environment,ParameterValue=prd --profile=mym-works-site
```

## 2. Create the S3 bucket for CloudFront's logs

The following command will be executed.

```
aws cloudformation create-stack --stack-name mym-works-s3-log-prd --template-body file://s3_cloudfront_log.cf.yml --parameters ParameterKey=Environment,ParameterValue=prd --profile=mym-works-site
```

## 3. Get the SSL certified

Get the following domain's SSL certificates in the AWS ACM console of each environment.
Then, you will need to attach the certificates to Cloudfront. You will also have to change the AWS region to `us-east-1` when getting an SSL certificate.
The SSL certificate will automatically update when using DNS authorization.

```
mym.works
```

## 4. Create the CloudFront distribution

The following command will be executed.

```
aws cloudformation create-stack --stack-name mym-works-cloudfront-prd --template-body file://cloudfront.cf.yml --parameters ParameterKey=Environment,ParameterValue=prd ParameterKey=AcmCertificateArnString,ParameterValue=arn:aws:acm:us-east-1:013415400209:certificate/ede6e4fd-4e0f-4f48-923d-dbcbe6ae3bd8 --profile=mym-works-site
```

## 5. Associate between Route53 and CloudFront domain

Add the A Record alias target from the applicant zone in the Route53.

## 6. Update the 1. stack for import the 4. stack resources( OriginAccessIdentity )

Undo the Bucket policy to use the OriginAccessIdentity.
The following command will be executed.

```
aws cloudformation update-stack --stack-name mym-works-s3-prd --template-body file://s3.cf.yml --parameters ParameterKey=Environment,ParameterValue=prd --profile=mym-works-site
```

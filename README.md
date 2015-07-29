# blrrt-aws-lambda-fn-name

Returns the name of a blrrt AWS lambda function.

# Installation

    npm install --save blrrt-aws-lambda-fn-name

# Usage

    var blrrtLambdaFnName = require('blrrt-aws-lambda-fn-name');

    var lambdaFnName = blrrtLambdaFnName('web', 'development', 'handle-post-created', '1.0.0');
    console.log(lambdaFnName) // "web__development__handle-post-created__v1_0_"

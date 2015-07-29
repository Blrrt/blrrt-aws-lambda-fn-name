# blrrt-aws-lambda-fn-name

Returns the name of a blrrt AWS lambda function.

# Installation

    npm install --save @blrrt/aws-lambda-fn-name

# Usage

    var lambdaFnName = require('@blrrt/aws-lambda-fn-name');

    // "web__development__handle-post-created__v1_0_0"
    lambdaFnName('web', 'development', 'handle-post-created', '1.0.0');

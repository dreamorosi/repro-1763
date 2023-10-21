import { Tracer } from "@aws-lambda-powertools/tracer";
import { GlueClient } from "@aws-sdk/client-glue";

const tracer = new Tracer({ serviceName: "myService" });
tracer.captureAWSv3Client(new GlueClient({}));

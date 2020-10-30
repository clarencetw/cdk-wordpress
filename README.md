# cdk-wordpress

# Sample

```ts
import { Ecs } from "cdk-wordpress";

const wordpress = new Ecs(stack, "WordPressEcs");

// Get WordPress endpoint
new CfnOutput(stack, "Endpoint", { value: wordpress.endpoint });
```

### To deploy

```bash
cdk deploy
```

### To destroy

```bash
cdk destroy
```

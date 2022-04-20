# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WordPress <a name="WordPress" id="cdk-wordpress.WordPress"></a>

#### Initializers <a name="Initializers" id="cdk-wordpress.WordPress.Initializer"></a>

```typescript
import { WordPress } from 'cdk-wordpress'

new WordPress(scope: Construct, id: string, props?: WordPressProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-wordpress.WordPress.Initializer.parameter.scope">scope</a></code> | <code>@aws-cdk/core.Construct</code> | *No description.* |
| <code><a href="#cdk-wordpress.WordPress.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-wordpress.WordPress.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-wordpress.WordPressProps">WordPressProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-wordpress.WordPress.Initializer.parameter.scope"></a>

- *Type:* @aws-cdk/core.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-wordpress.WordPress.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-wordpress.WordPress.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-wordpress.WordPressProps">WordPressProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-wordpress.WordPress.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-wordpress.WordPress.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-wordpress.WordPress.isConstruct">isConstruct</a></code> | Return whether the given object is a Construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-wordpress.WordPress.isConstruct"></a>

```typescript
import { WordPress } from 'cdk-wordpress'

WordPress.isConstruct(x: any)
```

Return whether the given object is a Construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-wordpress.WordPress.isConstruct.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-wordpress.WordPress.property.node">node</a></code> | <code>@aws-cdk/core.ConstructNode</code> | The construct tree node associated with this construct. |
| <code><a href="#cdk-wordpress.WordPress.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-wordpress.WordPress.property.node"></a>

```typescript
public readonly node: ConstructNode;
```

- *Type:* @aws-cdk/core.ConstructNode

The construct tree node associated with this construct.

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="cdk-wordpress.WordPress.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---


## Structs <a name="Structs" id="Structs"></a>

### WordPressProps <a name="WordPressProps" id="cdk-wordpress.WordPressProps"></a>

The interface for all wordpress.

#### Initializer <a name="Initializer" id="cdk-wordpress.WordPressProps.Initializer"></a>

```typescript
import { WordPressProps } from 'cdk-wordpress'

const wordPressProps: WordPressProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-wordpress.WordPressProps.property.cluster">cluster</a></code> | <code>@aws-cdk/aws-ecs.Cluster</code> | The WordPress cluster. |
| <code><a href="#cdk-wordpress.WordPressProps.property.rdsInstance">rdsInstance</a></code> | <code>@aws-cdk/aws-rds.DatabaseInstance</code> | The WordPress RDS. |
| <code><a href="#cdk-wordpress.WordPressProps.property.vpc">vpc</a></code> | <code>@aws-cdk/aws-ec2.IVpc</code> | The WordPress VPC. |

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="cdk-wordpress.WordPressProps.property.cluster"></a>

```typescript
public readonly cluster: Cluster;
```

- *Type:* @aws-cdk/aws-ecs.Cluster

The WordPress cluster.

---

##### `rdsInstance`<sup>Optional</sup> <a name="rdsInstance" id="cdk-wordpress.WordPressProps.property.rdsInstance"></a>

```typescript
public readonly rdsInstance: DatabaseInstance;
```

- *Type:* @aws-cdk/aws-rds.DatabaseInstance

The WordPress RDS.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="cdk-wordpress.WordPressProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* @aws-cdk/aws-ec2.IVpc

The WordPress VPC.

---




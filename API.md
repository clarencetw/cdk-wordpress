# API Reference

**Classes**

Name|Description
----|-----------
[WordPress](#cdk-wordpress-wordpress)|*No description*


**Structs**

Name|Description
----|-----------
[WordPressProps](#cdk-wordpress-wordpressprops)|The interface for all wordpress.



## class WordPress  <a id="cdk-wordpress-wordpress"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new WordPress(scope: Construct, id: string, props?: WordPressProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[WordPressProps](#cdk-wordpress-wordpressprops)</code>)  *No description*
  * **cluster** (<code>[Cluster](#aws-cdk-aws-ecs-cluster)</code>)  The WordPress cluster. __*Optional*__
  * **rdsInstance** (<code>[DatabaseInstance](#aws-cdk-aws-rds-databaseinstance)</code>)  The WordPress RDS. __*Optional*__
  * **vpc** (<code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code>)  The WordPress VPC. __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**endpoint** | <code>string</code> | <span></span>



## struct WordPressProps  <a id="cdk-wordpress-wordpressprops"></a>


The interface for all wordpress.



Name | Type | Description 
-----|------|-------------
**cluster**? | <code>[Cluster](#aws-cdk-aws-ecs-cluster)</code> | The WordPress cluster.<br/>__*Optional*__
**rdsInstance**? | <code>[DatabaseInstance](#aws-cdk-aws-rds-databaseinstance)</code> | The WordPress RDS.<br/>__*Optional*__
**vpc**? | <code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code> | The WordPress VPC.<br/>__*Optional*__




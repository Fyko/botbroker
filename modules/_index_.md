[@fyko/botmart](../README.md) › [Globals](../globals.md) › ["index"](_index_.md)

# Module: "index"

## Index

### Interfaces

* [Sale](../interfaces/_index_.sale.md)

### Type aliases

* [APIResponse](_index_.md#apiresponse)
* [APISale](_index_.md#apisale)
* [Product](_index_.md#product)

### Functions

* [craftURL](_index_.md#crafturl)
* [fetchData](_index_.md#fetchdata)
* [fetchLatest](_index_.md#fetchlatest)

### Object literals

* [Bots](_index_.md#const-bots)
* [Groups](_index_.md#const-groups)
* [Products](_index_.md#const-products)

## Type aliases

###  APIResponse

Ƭ **APIResponse**: *[APISale](_index_.md#apisale)[]*

*Defined in [index.ts:8](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L8)*

___

###  APISale

Ƭ **APISale**: *[string, number]*

*Defined in [index.ts:6](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L6)*

___

###  Product

Ƭ **Product**: *keyof typeof Groups | keyof typeof Bots*

*Defined in [index.ts:4](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L4)*

## Functions

###  craftURL

▸ **craftURL**(`product`: number, `type`: string, `days`: number): *string*

*Defined in [index.ts:52](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L52)*

Crafts the URL to request the latest sales

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`product` | number | - | The ID of the product to fetch |
`type` | string | "renewal" | - |
`days` | number | 365 | How many days back to fetch sales  |

**Returns:** *string*

___

###  fetchData

▸ **fetchData**(`url`: string): *Promise‹[APIResponse](_index_.md#apiresponse)›*

*Defined in [index.ts:60](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *Promise‹[APIResponse](_index_.md#apiresponse)›*

___

###  fetchLatest

▸ **fetchLatest**(`product`: [Product](_index_.md#product), `type`: "renewal" | "lifetime", `days`: number): *Promise‹[Sale](../interfaces/_index_.sale.md)[]›*

*Defined in [index.ts:77](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L77)*

Fetches the latest sales of a BotBroker product

**`example`** 
```ts
const data = await fetchLatest('CYBERSOLE');
const total = data.reduce((all, { amount }) => (all += amount), 0);
console.log(total / data.length);
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`product` | [Product](_index_.md#product) | - | The product to fetch |
`type` | "renewal" &#124; "lifetime" | "renewal" | The subscription type of the product, "renewal" or "lifetime" |
`days` | number | 365 | How many days back to fetch sales |

**Returns:** *Promise‹[Sale](../interfaces/_index_.sale.md)[]›*

## Object literals

### `Const` Bots

### ▪ **Bots**: *object*

*Defined in [index.ts:15](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L15)*

###  ADEPT

• **ADEPT**: *number* = 30

*Defined in [index.ts:16](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L16)*

###  BALKO

• **BALKO**: *number* = 8

*Defined in [index.ts:17](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L17)*

###  CYBERSOLE

• **CYBERSOLE**: *number* = 6

*Defined in [index.ts:18](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L18)*

###  DASHEIO

• **DASHEIO**: *number* = 4

*Defined in [index.ts:19](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L19)*

###  GHOST_SNKRS

• **GHOST_SNKRS**: *number* = 3

*Defined in [index.ts:20](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L20)*

###  MEKPREME

• **MEKPREME**: *number* = 24

*Defined in [index.ts:21](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L21)*

###  PHANTOMAIO

• **PHANTOMAIO**: *number* = 2

*Defined in [index.ts:22](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L22)*

###  PRISMAIO

• **PRISMAIO**: *number* = 10

*Defined in [index.ts:23](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L23)*

###  PROJECT_DESTORYER

• **PROJECT_DESTORYER**: *number* = 5

*Defined in [index.ts:24](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L24)*

###  SPLASHFORCE

• **SPLASHFORCE**: *number* = 11

*Defined in [index.ts:25](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L25)*

###  SWFTAIO

• **SWFTAIO**: *number* = 22

*Defined in [index.ts:26](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L26)*

###  VELOX

• **VELOX**: *number* = 91

*Defined in [index.ts:27](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L27)*

###  WRATH

• **WRATH**: *number* = 49

*Defined in [index.ts:28](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L28)*

___

### `Const` Groups

### ▪ **Groups**: *object*

*Defined in [index.ts:31](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L31)*

###  BOUNCE_ALERTS

• **BOUNCE_ALERTS**: *number* = 88

*Defined in [index.ts:32](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L32)*

###  CALICOS

• **CALICOS**: *number* = 25

*Defined in [index.ts:33](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L33)*

###  EXCLUDED

• **EXCLUDED**: *number* = 90

*Defined in [index.ts:34](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L34)*

###  FLIPSIO

• **FLIPSIO**: *number* = 89

*Defined in [index.ts:35](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L35)*

###  GUAP

• **GUAP**: *number* = 19

*Defined in [index.ts:36](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L36)*

###  MEKNOTIFYCN

• **MEKNOTIFYCN**: *number* = 28

*Defined in [index.ts:37](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L37)*

###  PEACHY_PINGS

• **PEACHY_PINGS**: *number* = 14

*Defined in [index.ts:38](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L38)*

###  RESTOCK_WORLD

• **RESTOCK_WORLD**: *number* = 13

*Defined in [index.ts:39](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L39)*

###  SITE_SUPPLY

• **SITE_SUPPLY**: *number* = 23

*Defined in [index.ts:40](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L40)*

###  THREEFIVEONEIO

• **THREEFIVEONEIO**: *number* = 16

*Defined in [index.ts:41](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L41)*

___

### `Const` Products

### ▪ **Products**: *object*

*Defined in [index.ts:44](https://github.com/Fyko/botmart/blob/6ff680f/src/index.ts#L44)*

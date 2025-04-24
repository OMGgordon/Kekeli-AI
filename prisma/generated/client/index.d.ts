
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model DemoRequest
 * 
 */
export type DemoRequest = $Result.DefaultSelection<Prisma.$DemoRequestPayload>
/**
 * Model GetStartedRequest
 * 
 */
export type GetStartedRequest = $Result.DefaultSelection<Prisma.$GetStartedRequestPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DemoRequests
 * const demoRequests = await prisma.demoRequest.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more DemoRequests
   * const demoRequests = await prisma.demoRequest.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.demoRequest`: Exposes CRUD operations for the **DemoRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DemoRequests
    * const demoRequests = await prisma.demoRequest.findMany()
    * ```
    */
  get demoRequest(): Prisma.DemoRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.getStartedRequest`: Exposes CRUD operations for the **GetStartedRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GetStartedRequests
    * const getStartedRequests = await prisma.getStartedRequest.findMany()
    * ```
    */
  get getStartedRequest(): Prisma.GetStartedRequestDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    DemoRequest: 'DemoRequest',
    GetStartedRequest: 'GetStartedRequest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "demoRequest" | "getStartedRequest"
      txIsolationLevel: never
    }
    model: {
      DemoRequest: {
        payload: Prisma.$DemoRequestPayload<ExtArgs>
        fields: Prisma.DemoRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DemoRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DemoRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoRequestPayload>
          }
          findFirst: {
            args: Prisma.DemoRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DemoRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoRequestPayload>
          }
          findMany: {
            args: Prisma.DemoRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoRequestPayload>[]
          }
          create: {
            args: Prisma.DemoRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoRequestPayload>
          }
          createMany: {
            args: Prisma.DemoRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DemoRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoRequestPayload>
          }
          update: {
            args: Prisma.DemoRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoRequestPayload>
          }
          deleteMany: {
            args: Prisma.DemoRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DemoRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DemoRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemoRequestPayload>
          }
          aggregate: {
            args: Prisma.DemoRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDemoRequest>
          }
          groupBy: {
            args: Prisma.DemoRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<DemoRequestGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DemoRequestFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DemoRequestAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DemoRequestCountArgs<ExtArgs>
            result: $Utils.Optional<DemoRequestCountAggregateOutputType> | number
          }
        }
      }
      GetStartedRequest: {
        payload: Prisma.$GetStartedRequestPayload<ExtArgs>
        fields: Prisma.GetStartedRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GetStartedRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GetStartedRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GetStartedRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GetStartedRequestPayload>
          }
          findFirst: {
            args: Prisma.GetStartedRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GetStartedRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GetStartedRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GetStartedRequestPayload>
          }
          findMany: {
            args: Prisma.GetStartedRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GetStartedRequestPayload>[]
          }
          create: {
            args: Prisma.GetStartedRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GetStartedRequestPayload>
          }
          createMany: {
            args: Prisma.GetStartedRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GetStartedRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GetStartedRequestPayload>
          }
          update: {
            args: Prisma.GetStartedRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GetStartedRequestPayload>
          }
          deleteMany: {
            args: Prisma.GetStartedRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GetStartedRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GetStartedRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GetStartedRequestPayload>
          }
          aggregate: {
            args: Prisma.GetStartedRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGetStartedRequest>
          }
          groupBy: {
            args: Prisma.GetStartedRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<GetStartedRequestGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.GetStartedRequestFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.GetStartedRequestAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.GetStartedRequestCountArgs<ExtArgs>
            result: $Utils.Optional<GetStartedRequestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    demoRequest?: DemoRequestOmit
    getStartedRequest?: GetStartedRequestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model DemoRequest
   */

  export type AggregateDemoRequest = {
    _count: DemoRequestCountAggregateOutputType | null
    _min: DemoRequestMinAggregateOutputType | null
    _max: DemoRequestMaxAggregateOutputType | null
  }

  export type DemoRequestMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    company: string | null
    title: string | null
    message: string | null
    createdAt: Date | null
  }

  export type DemoRequestMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    company: string | null
    title: string | null
    message: string | null
    createdAt: Date | null
  }

  export type DemoRequestCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    company: number
    title: number
    message: number
    createdAt: number
    _all: number
  }


  export type DemoRequestMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    company?: true
    title?: true
    message?: true
    createdAt?: true
  }

  export type DemoRequestMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    company?: true
    title?: true
    message?: true
    createdAt?: true
  }

  export type DemoRequestCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    company?: true
    title?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type DemoRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DemoRequest to aggregate.
     */
    where?: DemoRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemoRequests to fetch.
     */
    orderBy?: DemoRequestOrderByWithRelationInput | DemoRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DemoRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemoRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemoRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DemoRequests
    **/
    _count?: true | DemoRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DemoRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DemoRequestMaxAggregateInputType
  }

  export type GetDemoRequestAggregateType<T extends DemoRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateDemoRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDemoRequest[P]>
      : GetScalarType<T[P], AggregateDemoRequest[P]>
  }




  export type DemoRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemoRequestWhereInput
    orderBy?: DemoRequestOrderByWithAggregationInput | DemoRequestOrderByWithAggregationInput[]
    by: DemoRequestScalarFieldEnum[] | DemoRequestScalarFieldEnum
    having?: DemoRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DemoRequestCountAggregateInputType | true
    _min?: DemoRequestMinAggregateInputType
    _max?: DemoRequestMaxAggregateInputType
  }

  export type DemoRequestGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    company: string
    title: string
    message: string | null
    createdAt: Date
    _count: DemoRequestCountAggregateOutputType | null
    _min: DemoRequestMinAggregateOutputType | null
    _max: DemoRequestMaxAggregateOutputType | null
  }

  type GetDemoRequestGroupByPayload<T extends DemoRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DemoRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DemoRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DemoRequestGroupByOutputType[P]>
            : GetScalarType<T[P], DemoRequestGroupByOutputType[P]>
        }
      >
    >


  export type DemoRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    company?: boolean
    title?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["demoRequest"]>



  export type DemoRequestSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    company?: boolean
    title?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type DemoRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "company" | "title" | "message" | "createdAt", ExtArgs["result"]["demoRequest"]>

  export type $DemoRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DemoRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      company: string
      title: string
      message: string | null
      createdAt: Date
    }, ExtArgs["result"]["demoRequest"]>
    composites: {}
  }

  type DemoRequestGetPayload<S extends boolean | null | undefined | DemoRequestDefaultArgs> = $Result.GetResult<Prisma.$DemoRequestPayload, S>

  type DemoRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DemoRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DemoRequestCountAggregateInputType | true
    }

  export interface DemoRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DemoRequest'], meta: { name: 'DemoRequest' } }
    /**
     * Find zero or one DemoRequest that matches the filter.
     * @param {DemoRequestFindUniqueArgs} args - Arguments to find a DemoRequest
     * @example
     * // Get one DemoRequest
     * const demoRequest = await prisma.demoRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DemoRequestFindUniqueArgs>(args: SelectSubset<T, DemoRequestFindUniqueArgs<ExtArgs>>): Prisma__DemoRequestClient<$Result.GetResult<Prisma.$DemoRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DemoRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DemoRequestFindUniqueOrThrowArgs} args - Arguments to find a DemoRequest
     * @example
     * // Get one DemoRequest
     * const demoRequest = await prisma.demoRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DemoRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, DemoRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DemoRequestClient<$Result.GetResult<Prisma.$DemoRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DemoRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoRequestFindFirstArgs} args - Arguments to find a DemoRequest
     * @example
     * // Get one DemoRequest
     * const demoRequest = await prisma.demoRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DemoRequestFindFirstArgs>(args?: SelectSubset<T, DemoRequestFindFirstArgs<ExtArgs>>): Prisma__DemoRequestClient<$Result.GetResult<Prisma.$DemoRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DemoRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoRequestFindFirstOrThrowArgs} args - Arguments to find a DemoRequest
     * @example
     * // Get one DemoRequest
     * const demoRequest = await prisma.demoRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DemoRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, DemoRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__DemoRequestClient<$Result.GetResult<Prisma.$DemoRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DemoRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DemoRequests
     * const demoRequests = await prisma.demoRequest.findMany()
     * 
     * // Get first 10 DemoRequests
     * const demoRequests = await prisma.demoRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const demoRequestWithIdOnly = await prisma.demoRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DemoRequestFindManyArgs>(args?: SelectSubset<T, DemoRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemoRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DemoRequest.
     * @param {DemoRequestCreateArgs} args - Arguments to create a DemoRequest.
     * @example
     * // Create one DemoRequest
     * const DemoRequest = await prisma.demoRequest.create({
     *   data: {
     *     // ... data to create a DemoRequest
     *   }
     * })
     * 
     */
    create<T extends DemoRequestCreateArgs>(args: SelectSubset<T, DemoRequestCreateArgs<ExtArgs>>): Prisma__DemoRequestClient<$Result.GetResult<Prisma.$DemoRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DemoRequests.
     * @param {DemoRequestCreateManyArgs} args - Arguments to create many DemoRequests.
     * @example
     * // Create many DemoRequests
     * const demoRequest = await prisma.demoRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DemoRequestCreateManyArgs>(args?: SelectSubset<T, DemoRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DemoRequest.
     * @param {DemoRequestDeleteArgs} args - Arguments to delete one DemoRequest.
     * @example
     * // Delete one DemoRequest
     * const DemoRequest = await prisma.demoRequest.delete({
     *   where: {
     *     // ... filter to delete one DemoRequest
     *   }
     * })
     * 
     */
    delete<T extends DemoRequestDeleteArgs>(args: SelectSubset<T, DemoRequestDeleteArgs<ExtArgs>>): Prisma__DemoRequestClient<$Result.GetResult<Prisma.$DemoRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DemoRequest.
     * @param {DemoRequestUpdateArgs} args - Arguments to update one DemoRequest.
     * @example
     * // Update one DemoRequest
     * const demoRequest = await prisma.demoRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DemoRequestUpdateArgs>(args: SelectSubset<T, DemoRequestUpdateArgs<ExtArgs>>): Prisma__DemoRequestClient<$Result.GetResult<Prisma.$DemoRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DemoRequests.
     * @param {DemoRequestDeleteManyArgs} args - Arguments to filter DemoRequests to delete.
     * @example
     * // Delete a few DemoRequests
     * const { count } = await prisma.demoRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DemoRequestDeleteManyArgs>(args?: SelectSubset<T, DemoRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DemoRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DemoRequests
     * const demoRequest = await prisma.demoRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DemoRequestUpdateManyArgs>(args: SelectSubset<T, DemoRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DemoRequest.
     * @param {DemoRequestUpsertArgs} args - Arguments to update or create a DemoRequest.
     * @example
     * // Update or create a DemoRequest
     * const demoRequest = await prisma.demoRequest.upsert({
     *   create: {
     *     // ... data to create a DemoRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DemoRequest we want to update
     *   }
     * })
     */
    upsert<T extends DemoRequestUpsertArgs>(args: SelectSubset<T, DemoRequestUpsertArgs<ExtArgs>>): Prisma__DemoRequestClient<$Result.GetResult<Prisma.$DemoRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DemoRequests that matches the filter.
     * @param {DemoRequestFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const demoRequest = await prisma.demoRequest.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DemoRequestFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a DemoRequest.
     * @param {DemoRequestAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const demoRequest = await prisma.demoRequest.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DemoRequestAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of DemoRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoRequestCountArgs} args - Arguments to filter DemoRequests to count.
     * @example
     * // Count the number of DemoRequests
     * const count = await prisma.demoRequest.count({
     *   where: {
     *     // ... the filter for the DemoRequests we want to count
     *   }
     * })
    **/
    count<T extends DemoRequestCountArgs>(
      args?: Subset<T, DemoRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DemoRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DemoRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DemoRequestAggregateArgs>(args: Subset<T, DemoRequestAggregateArgs>): Prisma.PrismaPromise<GetDemoRequestAggregateType<T>>

    /**
     * Group by DemoRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DemoRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DemoRequestGroupByArgs['orderBy'] }
        : { orderBy?: DemoRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DemoRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDemoRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DemoRequest model
   */
  readonly fields: DemoRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DemoRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DemoRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DemoRequest model
   */
  interface DemoRequestFieldRefs {
    readonly id: FieldRef<"DemoRequest", 'String'>
    readonly firstName: FieldRef<"DemoRequest", 'String'>
    readonly lastName: FieldRef<"DemoRequest", 'String'>
    readonly email: FieldRef<"DemoRequest", 'String'>
    readonly company: FieldRef<"DemoRequest", 'String'>
    readonly title: FieldRef<"DemoRequest", 'String'>
    readonly message: FieldRef<"DemoRequest", 'String'>
    readonly createdAt: FieldRef<"DemoRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DemoRequest findUnique
   */
  export type DemoRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoRequest
     */
    select?: DemoRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemoRequest
     */
    omit?: DemoRequestOmit<ExtArgs> | null
    /**
     * Filter, which DemoRequest to fetch.
     */
    where: DemoRequestWhereUniqueInput
  }

  /**
   * DemoRequest findUniqueOrThrow
   */
  export type DemoRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoRequest
     */
    select?: DemoRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemoRequest
     */
    omit?: DemoRequestOmit<ExtArgs> | null
    /**
     * Filter, which DemoRequest to fetch.
     */
    where: DemoRequestWhereUniqueInput
  }

  /**
   * DemoRequest findFirst
   */
  export type DemoRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoRequest
     */
    select?: DemoRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemoRequest
     */
    omit?: DemoRequestOmit<ExtArgs> | null
    /**
     * Filter, which DemoRequest to fetch.
     */
    where?: DemoRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemoRequests to fetch.
     */
    orderBy?: DemoRequestOrderByWithRelationInput | DemoRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DemoRequests.
     */
    cursor?: DemoRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemoRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemoRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DemoRequests.
     */
    distinct?: DemoRequestScalarFieldEnum | DemoRequestScalarFieldEnum[]
  }

  /**
   * DemoRequest findFirstOrThrow
   */
  export type DemoRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoRequest
     */
    select?: DemoRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemoRequest
     */
    omit?: DemoRequestOmit<ExtArgs> | null
    /**
     * Filter, which DemoRequest to fetch.
     */
    where?: DemoRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemoRequests to fetch.
     */
    orderBy?: DemoRequestOrderByWithRelationInput | DemoRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DemoRequests.
     */
    cursor?: DemoRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemoRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemoRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DemoRequests.
     */
    distinct?: DemoRequestScalarFieldEnum | DemoRequestScalarFieldEnum[]
  }

  /**
   * DemoRequest findMany
   */
  export type DemoRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoRequest
     */
    select?: DemoRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemoRequest
     */
    omit?: DemoRequestOmit<ExtArgs> | null
    /**
     * Filter, which DemoRequests to fetch.
     */
    where?: DemoRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DemoRequests to fetch.
     */
    orderBy?: DemoRequestOrderByWithRelationInput | DemoRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DemoRequests.
     */
    cursor?: DemoRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DemoRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DemoRequests.
     */
    skip?: number
    distinct?: DemoRequestScalarFieldEnum | DemoRequestScalarFieldEnum[]
  }

  /**
   * DemoRequest create
   */
  export type DemoRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoRequest
     */
    select?: DemoRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemoRequest
     */
    omit?: DemoRequestOmit<ExtArgs> | null
    /**
     * The data needed to create a DemoRequest.
     */
    data: XOR<DemoRequestCreateInput, DemoRequestUncheckedCreateInput>
  }

  /**
   * DemoRequest createMany
   */
  export type DemoRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DemoRequests.
     */
    data: DemoRequestCreateManyInput | DemoRequestCreateManyInput[]
  }

  /**
   * DemoRequest update
   */
  export type DemoRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoRequest
     */
    select?: DemoRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemoRequest
     */
    omit?: DemoRequestOmit<ExtArgs> | null
    /**
     * The data needed to update a DemoRequest.
     */
    data: XOR<DemoRequestUpdateInput, DemoRequestUncheckedUpdateInput>
    /**
     * Choose, which DemoRequest to update.
     */
    where: DemoRequestWhereUniqueInput
  }

  /**
   * DemoRequest updateMany
   */
  export type DemoRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DemoRequests.
     */
    data: XOR<DemoRequestUpdateManyMutationInput, DemoRequestUncheckedUpdateManyInput>
    /**
     * Filter which DemoRequests to update
     */
    where?: DemoRequestWhereInput
    /**
     * Limit how many DemoRequests to update.
     */
    limit?: number
  }

  /**
   * DemoRequest upsert
   */
  export type DemoRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoRequest
     */
    select?: DemoRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemoRequest
     */
    omit?: DemoRequestOmit<ExtArgs> | null
    /**
     * The filter to search for the DemoRequest to update in case it exists.
     */
    where: DemoRequestWhereUniqueInput
    /**
     * In case the DemoRequest found by the `where` argument doesn't exist, create a new DemoRequest with this data.
     */
    create: XOR<DemoRequestCreateInput, DemoRequestUncheckedCreateInput>
    /**
     * In case the DemoRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DemoRequestUpdateInput, DemoRequestUncheckedUpdateInput>
  }

  /**
   * DemoRequest delete
   */
  export type DemoRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoRequest
     */
    select?: DemoRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemoRequest
     */
    omit?: DemoRequestOmit<ExtArgs> | null
    /**
     * Filter which DemoRequest to delete.
     */
    where: DemoRequestWhereUniqueInput
  }

  /**
   * DemoRequest deleteMany
   */
  export type DemoRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DemoRequests to delete
     */
    where?: DemoRequestWhereInput
    /**
     * Limit how many DemoRequests to delete.
     */
    limit?: number
  }

  /**
   * DemoRequest findRaw
   */
  export type DemoRequestFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DemoRequest aggregateRaw
   */
  export type DemoRequestAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DemoRequest without action
   */
  export type DemoRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemoRequest
     */
    select?: DemoRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DemoRequest
     */
    omit?: DemoRequestOmit<ExtArgs> | null
  }


  /**
   * Model GetStartedRequest
   */

  export type AggregateGetStartedRequest = {
    _count: GetStartedRequestCountAggregateOutputType | null
    _min: GetStartedRequestMinAggregateOutputType | null
    _max: GetStartedRequestMaxAggregateOutputType | null
  }

  export type GetStartedRequestMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    company: string | null
    createdAt: Date | null
  }

  export type GetStartedRequestMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    company: string | null
    createdAt: Date | null
  }

  export type GetStartedRequestCountAggregateOutputType = {
    id: number
    email: number
    name: number
    company: number
    createdAt: number
    _all: number
  }


  export type GetStartedRequestMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    company?: true
    createdAt?: true
  }

  export type GetStartedRequestMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    company?: true
    createdAt?: true
  }

  export type GetStartedRequestCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    company?: true
    createdAt?: true
    _all?: true
  }

  export type GetStartedRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GetStartedRequest to aggregate.
     */
    where?: GetStartedRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GetStartedRequests to fetch.
     */
    orderBy?: GetStartedRequestOrderByWithRelationInput | GetStartedRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GetStartedRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GetStartedRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GetStartedRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GetStartedRequests
    **/
    _count?: true | GetStartedRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GetStartedRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GetStartedRequestMaxAggregateInputType
  }

  export type GetGetStartedRequestAggregateType<T extends GetStartedRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateGetStartedRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGetStartedRequest[P]>
      : GetScalarType<T[P], AggregateGetStartedRequest[P]>
  }




  export type GetStartedRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GetStartedRequestWhereInput
    orderBy?: GetStartedRequestOrderByWithAggregationInput | GetStartedRequestOrderByWithAggregationInput[]
    by: GetStartedRequestScalarFieldEnum[] | GetStartedRequestScalarFieldEnum
    having?: GetStartedRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GetStartedRequestCountAggregateInputType | true
    _min?: GetStartedRequestMinAggregateInputType
    _max?: GetStartedRequestMaxAggregateInputType
  }

  export type GetStartedRequestGroupByOutputType = {
    id: string
    email: string
    name: string | null
    company: string | null
    createdAt: Date
    _count: GetStartedRequestCountAggregateOutputType | null
    _min: GetStartedRequestMinAggregateOutputType | null
    _max: GetStartedRequestMaxAggregateOutputType | null
  }

  type GetGetStartedRequestGroupByPayload<T extends GetStartedRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GetStartedRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GetStartedRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GetStartedRequestGroupByOutputType[P]>
            : GetScalarType<T[P], GetStartedRequestGroupByOutputType[P]>
        }
      >
    >


  export type GetStartedRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    company?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["getStartedRequest"]>



  export type GetStartedRequestSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    company?: boolean
    createdAt?: boolean
  }

  export type GetStartedRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "company" | "createdAt", ExtArgs["result"]["getStartedRequest"]>

  export type $GetStartedRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GetStartedRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      company: string | null
      createdAt: Date
    }, ExtArgs["result"]["getStartedRequest"]>
    composites: {}
  }

  type GetStartedRequestGetPayload<S extends boolean | null | undefined | GetStartedRequestDefaultArgs> = $Result.GetResult<Prisma.$GetStartedRequestPayload, S>

  type GetStartedRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GetStartedRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GetStartedRequestCountAggregateInputType | true
    }

  export interface GetStartedRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GetStartedRequest'], meta: { name: 'GetStartedRequest' } }
    /**
     * Find zero or one GetStartedRequest that matches the filter.
     * @param {GetStartedRequestFindUniqueArgs} args - Arguments to find a GetStartedRequest
     * @example
     * // Get one GetStartedRequest
     * const getStartedRequest = await prisma.getStartedRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GetStartedRequestFindUniqueArgs>(args: SelectSubset<T, GetStartedRequestFindUniqueArgs<ExtArgs>>): Prisma__GetStartedRequestClient<$Result.GetResult<Prisma.$GetStartedRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GetStartedRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GetStartedRequestFindUniqueOrThrowArgs} args - Arguments to find a GetStartedRequest
     * @example
     * // Get one GetStartedRequest
     * const getStartedRequest = await prisma.getStartedRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GetStartedRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, GetStartedRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GetStartedRequestClient<$Result.GetResult<Prisma.$GetStartedRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GetStartedRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GetStartedRequestFindFirstArgs} args - Arguments to find a GetStartedRequest
     * @example
     * // Get one GetStartedRequest
     * const getStartedRequest = await prisma.getStartedRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GetStartedRequestFindFirstArgs>(args?: SelectSubset<T, GetStartedRequestFindFirstArgs<ExtArgs>>): Prisma__GetStartedRequestClient<$Result.GetResult<Prisma.$GetStartedRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GetStartedRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GetStartedRequestFindFirstOrThrowArgs} args - Arguments to find a GetStartedRequest
     * @example
     * // Get one GetStartedRequest
     * const getStartedRequest = await prisma.getStartedRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GetStartedRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, GetStartedRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__GetStartedRequestClient<$Result.GetResult<Prisma.$GetStartedRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GetStartedRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GetStartedRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GetStartedRequests
     * const getStartedRequests = await prisma.getStartedRequest.findMany()
     * 
     * // Get first 10 GetStartedRequests
     * const getStartedRequests = await prisma.getStartedRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const getStartedRequestWithIdOnly = await prisma.getStartedRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GetStartedRequestFindManyArgs>(args?: SelectSubset<T, GetStartedRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GetStartedRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GetStartedRequest.
     * @param {GetStartedRequestCreateArgs} args - Arguments to create a GetStartedRequest.
     * @example
     * // Create one GetStartedRequest
     * const GetStartedRequest = await prisma.getStartedRequest.create({
     *   data: {
     *     // ... data to create a GetStartedRequest
     *   }
     * })
     * 
     */
    create<T extends GetStartedRequestCreateArgs>(args: SelectSubset<T, GetStartedRequestCreateArgs<ExtArgs>>): Prisma__GetStartedRequestClient<$Result.GetResult<Prisma.$GetStartedRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GetStartedRequests.
     * @param {GetStartedRequestCreateManyArgs} args - Arguments to create many GetStartedRequests.
     * @example
     * // Create many GetStartedRequests
     * const getStartedRequest = await prisma.getStartedRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GetStartedRequestCreateManyArgs>(args?: SelectSubset<T, GetStartedRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GetStartedRequest.
     * @param {GetStartedRequestDeleteArgs} args - Arguments to delete one GetStartedRequest.
     * @example
     * // Delete one GetStartedRequest
     * const GetStartedRequest = await prisma.getStartedRequest.delete({
     *   where: {
     *     // ... filter to delete one GetStartedRequest
     *   }
     * })
     * 
     */
    delete<T extends GetStartedRequestDeleteArgs>(args: SelectSubset<T, GetStartedRequestDeleteArgs<ExtArgs>>): Prisma__GetStartedRequestClient<$Result.GetResult<Prisma.$GetStartedRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GetStartedRequest.
     * @param {GetStartedRequestUpdateArgs} args - Arguments to update one GetStartedRequest.
     * @example
     * // Update one GetStartedRequest
     * const getStartedRequest = await prisma.getStartedRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GetStartedRequestUpdateArgs>(args: SelectSubset<T, GetStartedRequestUpdateArgs<ExtArgs>>): Prisma__GetStartedRequestClient<$Result.GetResult<Prisma.$GetStartedRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GetStartedRequests.
     * @param {GetStartedRequestDeleteManyArgs} args - Arguments to filter GetStartedRequests to delete.
     * @example
     * // Delete a few GetStartedRequests
     * const { count } = await prisma.getStartedRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GetStartedRequestDeleteManyArgs>(args?: SelectSubset<T, GetStartedRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GetStartedRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GetStartedRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GetStartedRequests
     * const getStartedRequest = await prisma.getStartedRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GetStartedRequestUpdateManyArgs>(args: SelectSubset<T, GetStartedRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GetStartedRequest.
     * @param {GetStartedRequestUpsertArgs} args - Arguments to update or create a GetStartedRequest.
     * @example
     * // Update or create a GetStartedRequest
     * const getStartedRequest = await prisma.getStartedRequest.upsert({
     *   create: {
     *     // ... data to create a GetStartedRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GetStartedRequest we want to update
     *   }
     * })
     */
    upsert<T extends GetStartedRequestUpsertArgs>(args: SelectSubset<T, GetStartedRequestUpsertArgs<ExtArgs>>): Prisma__GetStartedRequestClient<$Result.GetResult<Prisma.$GetStartedRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GetStartedRequests that matches the filter.
     * @param {GetStartedRequestFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const getStartedRequest = await prisma.getStartedRequest.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: GetStartedRequestFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a GetStartedRequest.
     * @param {GetStartedRequestAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const getStartedRequest = await prisma.getStartedRequest.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: GetStartedRequestAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of GetStartedRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GetStartedRequestCountArgs} args - Arguments to filter GetStartedRequests to count.
     * @example
     * // Count the number of GetStartedRequests
     * const count = await prisma.getStartedRequest.count({
     *   where: {
     *     // ... the filter for the GetStartedRequests we want to count
     *   }
     * })
    **/
    count<T extends GetStartedRequestCountArgs>(
      args?: Subset<T, GetStartedRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GetStartedRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GetStartedRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GetStartedRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GetStartedRequestAggregateArgs>(args: Subset<T, GetStartedRequestAggregateArgs>): Prisma.PrismaPromise<GetGetStartedRequestAggregateType<T>>

    /**
     * Group by GetStartedRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GetStartedRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GetStartedRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GetStartedRequestGroupByArgs['orderBy'] }
        : { orderBy?: GetStartedRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GetStartedRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGetStartedRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GetStartedRequest model
   */
  readonly fields: GetStartedRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GetStartedRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GetStartedRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GetStartedRequest model
   */
  interface GetStartedRequestFieldRefs {
    readonly id: FieldRef<"GetStartedRequest", 'String'>
    readonly email: FieldRef<"GetStartedRequest", 'String'>
    readonly name: FieldRef<"GetStartedRequest", 'String'>
    readonly company: FieldRef<"GetStartedRequest", 'String'>
    readonly createdAt: FieldRef<"GetStartedRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GetStartedRequest findUnique
   */
  export type GetStartedRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GetStartedRequest
     */
    select?: GetStartedRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GetStartedRequest
     */
    omit?: GetStartedRequestOmit<ExtArgs> | null
    /**
     * Filter, which GetStartedRequest to fetch.
     */
    where: GetStartedRequestWhereUniqueInput
  }

  /**
   * GetStartedRequest findUniqueOrThrow
   */
  export type GetStartedRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GetStartedRequest
     */
    select?: GetStartedRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GetStartedRequest
     */
    omit?: GetStartedRequestOmit<ExtArgs> | null
    /**
     * Filter, which GetStartedRequest to fetch.
     */
    where: GetStartedRequestWhereUniqueInput
  }

  /**
   * GetStartedRequest findFirst
   */
  export type GetStartedRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GetStartedRequest
     */
    select?: GetStartedRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GetStartedRequest
     */
    omit?: GetStartedRequestOmit<ExtArgs> | null
    /**
     * Filter, which GetStartedRequest to fetch.
     */
    where?: GetStartedRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GetStartedRequests to fetch.
     */
    orderBy?: GetStartedRequestOrderByWithRelationInput | GetStartedRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GetStartedRequests.
     */
    cursor?: GetStartedRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GetStartedRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GetStartedRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GetStartedRequests.
     */
    distinct?: GetStartedRequestScalarFieldEnum | GetStartedRequestScalarFieldEnum[]
  }

  /**
   * GetStartedRequest findFirstOrThrow
   */
  export type GetStartedRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GetStartedRequest
     */
    select?: GetStartedRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GetStartedRequest
     */
    omit?: GetStartedRequestOmit<ExtArgs> | null
    /**
     * Filter, which GetStartedRequest to fetch.
     */
    where?: GetStartedRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GetStartedRequests to fetch.
     */
    orderBy?: GetStartedRequestOrderByWithRelationInput | GetStartedRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GetStartedRequests.
     */
    cursor?: GetStartedRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GetStartedRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GetStartedRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GetStartedRequests.
     */
    distinct?: GetStartedRequestScalarFieldEnum | GetStartedRequestScalarFieldEnum[]
  }

  /**
   * GetStartedRequest findMany
   */
  export type GetStartedRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GetStartedRequest
     */
    select?: GetStartedRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GetStartedRequest
     */
    omit?: GetStartedRequestOmit<ExtArgs> | null
    /**
     * Filter, which GetStartedRequests to fetch.
     */
    where?: GetStartedRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GetStartedRequests to fetch.
     */
    orderBy?: GetStartedRequestOrderByWithRelationInput | GetStartedRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GetStartedRequests.
     */
    cursor?: GetStartedRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GetStartedRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GetStartedRequests.
     */
    skip?: number
    distinct?: GetStartedRequestScalarFieldEnum | GetStartedRequestScalarFieldEnum[]
  }

  /**
   * GetStartedRequest create
   */
  export type GetStartedRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GetStartedRequest
     */
    select?: GetStartedRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GetStartedRequest
     */
    omit?: GetStartedRequestOmit<ExtArgs> | null
    /**
     * The data needed to create a GetStartedRequest.
     */
    data: XOR<GetStartedRequestCreateInput, GetStartedRequestUncheckedCreateInput>
  }

  /**
   * GetStartedRequest createMany
   */
  export type GetStartedRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GetStartedRequests.
     */
    data: GetStartedRequestCreateManyInput | GetStartedRequestCreateManyInput[]
  }

  /**
   * GetStartedRequest update
   */
  export type GetStartedRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GetStartedRequest
     */
    select?: GetStartedRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GetStartedRequest
     */
    omit?: GetStartedRequestOmit<ExtArgs> | null
    /**
     * The data needed to update a GetStartedRequest.
     */
    data: XOR<GetStartedRequestUpdateInput, GetStartedRequestUncheckedUpdateInput>
    /**
     * Choose, which GetStartedRequest to update.
     */
    where: GetStartedRequestWhereUniqueInput
  }

  /**
   * GetStartedRequest updateMany
   */
  export type GetStartedRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GetStartedRequests.
     */
    data: XOR<GetStartedRequestUpdateManyMutationInput, GetStartedRequestUncheckedUpdateManyInput>
    /**
     * Filter which GetStartedRequests to update
     */
    where?: GetStartedRequestWhereInput
    /**
     * Limit how many GetStartedRequests to update.
     */
    limit?: number
  }

  /**
   * GetStartedRequest upsert
   */
  export type GetStartedRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GetStartedRequest
     */
    select?: GetStartedRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GetStartedRequest
     */
    omit?: GetStartedRequestOmit<ExtArgs> | null
    /**
     * The filter to search for the GetStartedRequest to update in case it exists.
     */
    where: GetStartedRequestWhereUniqueInput
    /**
     * In case the GetStartedRequest found by the `where` argument doesn't exist, create a new GetStartedRequest with this data.
     */
    create: XOR<GetStartedRequestCreateInput, GetStartedRequestUncheckedCreateInput>
    /**
     * In case the GetStartedRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GetStartedRequestUpdateInput, GetStartedRequestUncheckedUpdateInput>
  }

  /**
   * GetStartedRequest delete
   */
  export type GetStartedRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GetStartedRequest
     */
    select?: GetStartedRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GetStartedRequest
     */
    omit?: GetStartedRequestOmit<ExtArgs> | null
    /**
     * Filter which GetStartedRequest to delete.
     */
    where: GetStartedRequestWhereUniqueInput
  }

  /**
   * GetStartedRequest deleteMany
   */
  export type GetStartedRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GetStartedRequests to delete
     */
    where?: GetStartedRequestWhereInput
    /**
     * Limit how many GetStartedRequests to delete.
     */
    limit?: number
  }

  /**
   * GetStartedRequest findRaw
   */
  export type GetStartedRequestFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * GetStartedRequest aggregateRaw
   */
  export type GetStartedRequestAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * GetStartedRequest without action
   */
  export type GetStartedRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GetStartedRequest
     */
    select?: GetStartedRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GetStartedRequest
     */
    omit?: GetStartedRequestOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const DemoRequestScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    company: 'company',
    title: 'title',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type DemoRequestScalarFieldEnum = (typeof DemoRequestScalarFieldEnum)[keyof typeof DemoRequestScalarFieldEnum]


  export const GetStartedRequestScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    company: 'company',
    createdAt: 'createdAt'
  };

  export type GetStartedRequestScalarFieldEnum = (typeof GetStartedRequestScalarFieldEnum)[keyof typeof GetStartedRequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type DemoRequestWhereInput = {
    AND?: DemoRequestWhereInput | DemoRequestWhereInput[]
    OR?: DemoRequestWhereInput[]
    NOT?: DemoRequestWhereInput | DemoRequestWhereInput[]
    id?: StringFilter<"DemoRequest"> | string
    firstName?: StringFilter<"DemoRequest"> | string
    lastName?: StringFilter<"DemoRequest"> | string
    email?: StringFilter<"DemoRequest"> | string
    company?: StringFilter<"DemoRequest"> | string
    title?: StringFilter<"DemoRequest"> | string
    message?: StringNullableFilter<"DemoRequest"> | string | null
    createdAt?: DateTimeFilter<"DemoRequest"> | Date | string
  }

  export type DemoRequestOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    company?: SortOrder
    title?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type DemoRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DemoRequestWhereInput | DemoRequestWhereInput[]
    OR?: DemoRequestWhereInput[]
    NOT?: DemoRequestWhereInput | DemoRequestWhereInput[]
    firstName?: StringFilter<"DemoRequest"> | string
    lastName?: StringFilter<"DemoRequest"> | string
    email?: StringFilter<"DemoRequest"> | string
    company?: StringFilter<"DemoRequest"> | string
    title?: StringFilter<"DemoRequest"> | string
    message?: StringNullableFilter<"DemoRequest"> | string | null
    createdAt?: DateTimeFilter<"DemoRequest"> | Date | string
  }, "id">

  export type DemoRequestOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    company?: SortOrder
    title?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: DemoRequestCountOrderByAggregateInput
    _max?: DemoRequestMaxOrderByAggregateInput
    _min?: DemoRequestMinOrderByAggregateInput
  }

  export type DemoRequestScalarWhereWithAggregatesInput = {
    AND?: DemoRequestScalarWhereWithAggregatesInput | DemoRequestScalarWhereWithAggregatesInput[]
    OR?: DemoRequestScalarWhereWithAggregatesInput[]
    NOT?: DemoRequestScalarWhereWithAggregatesInput | DemoRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DemoRequest"> | string
    firstName?: StringWithAggregatesFilter<"DemoRequest"> | string
    lastName?: StringWithAggregatesFilter<"DemoRequest"> | string
    email?: StringWithAggregatesFilter<"DemoRequest"> | string
    company?: StringWithAggregatesFilter<"DemoRequest"> | string
    title?: StringWithAggregatesFilter<"DemoRequest"> | string
    message?: StringNullableWithAggregatesFilter<"DemoRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DemoRequest"> | Date | string
  }

  export type GetStartedRequestWhereInput = {
    AND?: GetStartedRequestWhereInput | GetStartedRequestWhereInput[]
    OR?: GetStartedRequestWhereInput[]
    NOT?: GetStartedRequestWhereInput | GetStartedRequestWhereInput[]
    id?: StringFilter<"GetStartedRequest"> | string
    email?: StringFilter<"GetStartedRequest"> | string
    name?: StringNullableFilter<"GetStartedRequest"> | string | null
    company?: StringNullableFilter<"GetStartedRequest"> | string | null
    createdAt?: DateTimeFilter<"GetStartedRequest"> | Date | string
  }

  export type GetStartedRequestOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    company?: SortOrder
    createdAt?: SortOrder
  }

  export type GetStartedRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GetStartedRequestWhereInput | GetStartedRequestWhereInput[]
    OR?: GetStartedRequestWhereInput[]
    NOT?: GetStartedRequestWhereInput | GetStartedRequestWhereInput[]
    email?: StringFilter<"GetStartedRequest"> | string
    name?: StringNullableFilter<"GetStartedRequest"> | string | null
    company?: StringNullableFilter<"GetStartedRequest"> | string | null
    createdAt?: DateTimeFilter<"GetStartedRequest"> | Date | string
  }, "id">

  export type GetStartedRequestOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    company?: SortOrder
    createdAt?: SortOrder
    _count?: GetStartedRequestCountOrderByAggregateInput
    _max?: GetStartedRequestMaxOrderByAggregateInput
    _min?: GetStartedRequestMinOrderByAggregateInput
  }

  export type GetStartedRequestScalarWhereWithAggregatesInput = {
    AND?: GetStartedRequestScalarWhereWithAggregatesInput | GetStartedRequestScalarWhereWithAggregatesInput[]
    OR?: GetStartedRequestScalarWhereWithAggregatesInput[]
    NOT?: GetStartedRequestScalarWhereWithAggregatesInput | GetStartedRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GetStartedRequest"> | string
    email?: StringWithAggregatesFilter<"GetStartedRequest"> | string
    name?: StringNullableWithAggregatesFilter<"GetStartedRequest"> | string | null
    company?: StringNullableWithAggregatesFilter<"GetStartedRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GetStartedRequest"> | Date | string
  }

  export type DemoRequestCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    company: string
    title: string
    message?: string | null
    createdAt?: Date | string
  }

  export type DemoRequestUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    company: string
    title: string
    message?: string | null
    createdAt?: Date | string
  }

  export type DemoRequestUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemoRequestUncheckedUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemoRequestCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    company: string
    title: string
    message?: string | null
    createdAt?: Date | string
  }

  export type DemoRequestUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemoRequestUncheckedUpdateManyInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GetStartedRequestCreateInput = {
    id?: string
    email: string
    name?: string | null
    company?: string | null
    createdAt?: Date | string
  }

  export type GetStartedRequestUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    company?: string | null
    createdAt?: Date | string
  }

  export type GetStartedRequestUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GetStartedRequestUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GetStartedRequestCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    company?: string | null
    createdAt?: Date | string
  }

  export type GetStartedRequestUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GetStartedRequestUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DemoRequestCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    company?: SortOrder
    title?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type DemoRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    company?: SortOrder
    title?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type DemoRequestMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    company?: SortOrder
    title?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GetStartedRequestCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    company?: SortOrder
    createdAt?: SortOrder
  }

  export type GetStartedRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    company?: SortOrder
    createdAt?: SortOrder
  }

  export type GetStartedRequestMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    company?: SortOrder
    createdAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}